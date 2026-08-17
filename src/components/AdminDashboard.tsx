import React, { useEffect, useState, useMemo } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface RSVPRecord {
  id: string;
  full_name: string;
  phone?: string | null;
  attendance: string;
  guests?: string | null;
  message?: string | null;
  created_at: string;
}

export interface AdminDashboardProps {
  onLogout?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [rsvps, setRsvps] = useState<RSVPRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [attendanceFilter, setAttendanceFilter] = useState<'all' | 'accept' | 'decline'>('all');

  const fetchRsvps = async () => {
    setError(null);
    setLoading(true);
    try {
      const { data, error: fetchError } = await supabase
        .from<RSVPRecord>('rsvps')
        .select('id, full_name, phone, attendance, guests, message, created_at')
        .order('created_at', { ascending: false });

      if (fetchError) {
        setError(fetchError.message || 'Failed to load RSVPs');
        setRsvps([]);
      } else if (data) {
        setRsvps(data as RSVPRecord[]);
      }
    } catch (err: any) {
      setError(err?.message || 'Unexpected error while fetching RSVPs');
      setRsvps([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRsvps();
    // no subscriptions required; simple dashboard
  }, []);

  const totals = useMemo(() => {
    const total = rsvps.length;
    const accepted = rsvps.filter((r) => r.attendance === 'accept').length;
    const declined = rsvps.filter((r) => r.attendance === 'decline').length;
    const totalGuests = rsvps.reduce((sum, r) => {
      const g = parseInt(String(r.guests || '').trim() || '0', 10);
      return sum + (isNaN(g) ? 0 : g);
    }, 0);
    return { total, accepted, declined, totalGuests };
  }, [rsvps]);

  const filtered = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    return rsvps.filter((r) => {
      if (attendanceFilter !== 'all' && r.attendance !== attendanceFilter) return false;
      if (!q) return true;
      const name = r.full_name?.toLowerCase() || '';
      const phone = (r.phone || '').toLowerCase();
      return name.includes(q) || phone.includes(q);
    });
  }, [rsvps, searchText, attendanceFilter]);

  const handleRefresh = () => fetchRsvps();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      // ignore signOut errors
    }
    if (onLogout) onLogout();
  };

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 bg-maroon-950 text-champagne-light">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-cinzel font-bold text-gold-gradient">RSVP Admin Dashboard</h1>
            <p className="text-sm text-champagne-light/80">Manage guest responses and review messages.</p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleRefresh}
              className="px-4 py-3 rounded-xl bg-maroon-900/60 border border-gold-500/30 text-sm hover:brightness-110 touch-manipulation"
            >
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-maroon-950 font-cinzel font-bold"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-maroon-900/60 border border-gold-500/20 rounded-2xl p-4">
            <div className="text-sm text-gold-300">Total RSVPs</div>
            <div className="text-2xl font-bold">{totals.total}</div>
          </div>
          <div className="bg-maroon-900/60 border border-gold-500/20 rounded-2xl p-4">
            <div className="text-sm text-gold-300">Accepted</div>
            <div className="text-2xl font-bold">{totals.accepted}</div>
          </div>
          <div className="bg-maroon-900/60 border border-gold-500/20 rounded-2xl p-4">
            <div className="text-sm text-gold-300">Declined</div>
            <div className="text-2xl font-bold">{totals.declined}</div>
          </div>
          <div className="bg-maroon-900/60 border border-gold-500/20 rounded-2xl p-4">
            <div className="text-sm text-gold-300">Total Guests</div>
            <div className="text-2xl font-bold">{totals.totalGuests}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search by name or phone"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-maroon-900/50 border border-gold-500/20 outline-none text-champagne-light"
            />
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={attendanceFilter}
              onChange={(e) => setAttendanceFilter(e.target.value as any)}
              className="px-4 py-3 rounded-xl bg-maroon-900/50 border border-gold-500/20 text-champagne-light"
            >
              <option value="all">All</option>
              <option value="accept">Accepted</option>
              <option value="decline">Declined</option>
            </select>
          </div>
        </div>

        <div className="bg-maroon-900/60 border border-gold-500/20 rounded-2xl p-4">
          {loading ? (
            <div className="text-center py-8">Loading RSVPs…</div>
          ) : error ? (
            <div className="text-rose-400 text-center py-8">{error}</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-8">No RSVPs yet.</div>
          ) : (
            <>
              {/* Mobile card list */}
              <div className="sm:hidden space-y-4">
                {filtered.map((r) => (
                  <div key={r.id} className="bg-maroon-950/40 p-4 rounded-xl">
                    <div className="flex items-start justify-between">
                      <div className="font-semibold text-lg text-champagne-light">{r.full_name}</div>
                      <div className="text-sm text-gold-300">{new Date(r.created_at).toLocaleString()}</div>
                    </div>
                    <div className="mt-2 text-sm text-champagne-light/90">Phone: <span className="break-words">{r.phone || '—'}</span></div>
                    <div className="mt-1 text-sm">Attendance: <span className="text-gold-300">{r.attendance}</span></div>
                    <div className="mt-1 text-sm">Guests: <span className="text-champagne-light">{r.guests || '0'}</span></div>
                    <div className="mt-2 text-sm whitespace-pre-wrap break-words text-champagne-light">{r.message || '—'}</div>
                  </div>
                ))}
              </div>

              {/* Table for larger screens */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-left table-auto">
                  <thead>
                    <tr className="text-sm text-gold-300 border-b border-gold-500/10">
                      <th className="py-3 px-2">Full Name</th>
                      <th className="py-3 px-2">Phone</th>
                      <th className="py-3 px-2">Attendance</th>
                      <th className="py-3 px-2">Guests</th>
                      <th className="py-3 px-2">Message</th>
                      <th className="py-3 px-2">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((r) => (
                      <tr key={r.id} className="border-b border-gold-500/6 align-top">
                        <td className="py-3 px-2 align-top">{r.full_name}</td>
                        <td className="py-3 px-2 align-top break-words">{r.phone || '—'}</td>
                        <td className="py-3 px-2 align-top">{r.attendance}</td>
                        <td className="py-3 px-2 align-top">{r.guests || '0'}</td>
                        <td className="py-3 px-2 align-top max-w-md break-words">{r.message || '—'}</td>
                        <td className="py-3 px-2 align-top">{new Date(r.created_at).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
