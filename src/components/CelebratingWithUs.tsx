import React, { useEffect, useState, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';

export const CelebratingWithUs: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAccepted = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Query the public-safe view that exposes only accepted RSVP names
      const { data, error } = await supabase
        .from('rsvps_public')
        .select('full_name, created_at')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching accepted RSVPs:', error);
        setError('Unable to load guest list.');
        setNames([]);
      } else if (data) {
        const onlyNames = (data as Array<any>).map((r) => r.full_name).filter(Boolean);
        setNames(onlyNames);
      }
    } catch (err) {
      console.error('Unexpected fetch error', err);
      setError('Unable to load guest list.');
      setNames([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAccepted();

    // refresh when a new RSVP is submitted (only accepted RSVPs dispatch this)
    const handler = () => fetchAccepted();
    window.addEventListener('rsvp:submitted', handler as EventListener);

    // periodic refresh every 15 seconds
    const interval = setInterval(fetchAccepted, 15_000);
    return () => {
      clearInterval(interval);
      window.removeEventListener('rsvp:submitted', handler as EventListener);
    };
  }, [fetchAccepted]);

  return (
    <section id="celebrating-with-us" className="relative py-16 bg-maroon-950 border-t border-gold-500/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-3 mb-6">
          <h3 className="font-cinzel text-3xl font-bold text-gold-gradient">💕 CELEBRATING WITH US</h3>
          <p className="font-cormorant text-lg text-champagne-light/90 italic">Our loved ones joining us on our special day</p>
        </div>

        {loading ? (
          <p className="text-champagne-light">Loading guest list…</p>
        ) : error ? (
          <p className="text-rose-400">{error}</p>
        ) : names.length === 0 ? (
          <p className="text-champagne-light">No RSVPs yet. Be the first to say you’ll join us!</p>
        ) : (
          <>
            <p className="font-cinzel text-xl text-gold-300 mb-4">{names.length} loved ones are joining us ❤️</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
              {names.map((n, i) => (
                <div key={`${n}-${i}`} className="p-3 rounded-lg bg-maroon-900/60 border border-gold-500/20 text-champagne-light">
                  <span className="font-cinzel">{n}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CelebratingWithUs;
