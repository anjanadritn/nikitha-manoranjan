import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Mail, Lock } from 'lucide-react';

export interface AdminLoginProps {
  onLoginSuccess?: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !password) {
      setError('Please enter email and password.');
      return;
    }

    try {
      setLoading(true);
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (signInError) {
        setError(signInError.message || 'Login failed.');
        setLoading(false);
        return;
      }

      setLoading(false);
      if (onLoginSuccess) onLoginSuccess();
    } catch (err: any) {
      setError(err?.message || 'Unexpected error');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-maroon-950 p-6">
      <div className="w-full max-w-md bg-maroon-900/80 border border-gold-500/30 rounded-3xl p-8 shadow-2xl">
        <h2 className="font-cinzel text-2xl text-gold-gradient font-bold text-center mb-4">Admin Login</h2>
        <p className="text-center text-champagne-light text-sm mb-6">Enter your administrator credentials to access the private dashboard.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-xs text-gold-300 uppercase font-cinzel tracking-wider">Email</label>
          <div className="flex items-center space-x-3 bg-maroon-950 border border-gold-500/30 rounded-xl px-3 py-2">
            <Mail className="w-5 h-5 text-gold-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-champagne-light placeholder-gold-500/40"
              placeholder="admin@domain.com"
            />
          </div>

          <label className="block text-xs text-gold-300 uppercase font-cinzel tracking-wider">Password</label>
          <div className="flex items-center space-x-3 bg-maroon-950 border border-gold-500/30 rounded-xl px-3 py-2">
            <Lock className="w-5 h-5 text-gold-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-champagne-light placeholder-gold-500/40"
              placeholder="••••••••"
            />
          </div>

          {error && <div className="text-rose-400 text-sm text-center">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-cinzel font-bold text-sm tracking-wider ${
              loading ? 'opacity-70 cursor-wait' : 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:scale-[1.01]'
            } text-maroon-950`}
          >
            {loading ? 'Signing in…' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
