import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Send, CheckCircle2, Users, Phone, User } from 'lucide-react';

/* 
  ========================================================================================
  NOTE FOR PRODUCTION BACKEND INTEGRATION:
  Current RSVP implementation stores responses in browser localStorage.
  To connect to a production backend (e.g. Supabase, Firebase, or custom REST API):
  1. Replace the localStorage logic inside `handleSubmit` below with an async fetch/axios call.
  2. Do not expose private backend keys in client code.
  ========================================================================================
*/

export const RSVPSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('1');
  const [attending, setAttending] = useState<'accept' | 'decline'>('accept');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedRSVP = localStorage.getItem('nikitha_manoranjan_rsvp');
    if (savedRSVP) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const rsvpData = {
      name,
      phone,
      guests,
      attending,
      message,
      timestamp: new Date().toISOString(),
    };

    // Save to LocalStorage (Ready to swap with API call)
    localStorage.setItem('nikitha_manoranjan_rsvp', JSON.stringify(rsvpData));
    setSubmitted(true);

    if (attending === 'accept') {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#FFF9D6', '#6A1B29'],
      });
    }
  };

  return (
    <section id="rsvp" className="relative py-24 bg-maroon-900 overflow-hidden border-t border-gold-500/20">
      
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-gold-400">
            Kindly Respond
          </span>
          <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-gradient">
            WILL YOU JOIN US?
          </h2>
          <p className="font-cormorant text-xl text-champagne-light/90 italic">
            Please let us know if you will grace our wedding with your presence
          </p>
        </div>

        {/* RSVP Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-maroon-950/90 border border-gold-500/40 backdrop-blur-md shadow-2xl text-left"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block font-cinzel text-xs text-gold-300 uppercase tracking-wider mb-2 font-semibold flex items-center space-x-2">
                  <User className="w-4 h-4 text-gold-400" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-maroon-900 border border-gold-500/40 text-champagne-light placeholder-gold-500/40 text-base focus:outline-none focus:border-gold-400"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block font-cinzel text-xs text-gold-300 uppercase tracking-wider mb-2 font-semibold flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-maroon-900 border border-gold-500/40 text-champagne-light placeholder-gold-500/40 text-base focus:outline-none focus:border-gold-400"
                />
              </div>

              {/* Attendance Options */}
              <div>
                <label className="block font-cinzel text-xs text-gold-300 uppercase tracking-wider mb-3 font-semibold">
                  Will You Attend? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setAttending('accept')}
                    className={`p-4 rounded-xl border flex items-center justify-center space-x-3 transition-all cursor-pointer ${
                      attending === 'accept'
                        ? 'bg-gold-500/20 border-gold-400 text-gold-200 shadow-gold-glow font-bold'
                        : 'bg-maroon-900 border-gold-500/30 text-champagne-light/70 hover:text-champagne-light'
                    }`}
                  >
                    <Heart className="w-5 h-5 text-gold-400 fill-gold-400/30" />
                    <span className="font-cinzel text-sm">❤️ Joyfully Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttending('decline')}
                    className={`p-4 rounded-xl border flex items-center justify-center space-x-3 transition-all cursor-pointer ${
                      attending === 'decline'
                        ? 'bg-maroon-800 border-gold-500 text-champagne-light font-bold'
                        : 'bg-maroon-900 border-gold-500/30 text-champagne-light/70 hover:text-champagne-light'
                    }`}
                  >
                    <span className="font-cinzel text-sm">🙏 Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Number of Guests */}
              {attending === 'accept' && (
                <div>
                  <label className="block font-cinzel text-xs text-gold-300 uppercase tracking-wider mb-2 font-semibold flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gold-400" />
                    <span>Number of Guests Attending</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-maroon-900 border border-gold-500/40 text-champagne-light text-base focus:outline-none focus:border-gold-400"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ Family Members</option>
                  </select>
                </div>
              )}

              {/* Optional Blessing Message */}
              <div>
                <label className="block font-cinzel text-xs text-gold-300 uppercase tracking-wider mb-2 font-semibold">
                  Personal Blessing Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a wish for Nikitha & Manoranjan..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-maroon-900 border border-gold-500/40 text-champagne-light placeholder-gold-500/40 text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-maroon-950 font-cinzel font-bold text-base tracking-widest uppercase shadow-gold-glow-lg hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] transition-all cursor-pointer flex items-center justify-center space-x-3"
              >
                <Send className="w-5 h-5" />
                <span>SEND MY RSVP</span>
              </button>

            </form>
          ) : (
            /* Thank You Confirmation State */
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-gold-400 mx-auto animate-bounce" />
              <h3 className="font-cinzel text-3xl font-bold text-gold-gradient">
                THANK YOU FOR YOUR RSVP!
              </h3>
              <p className="font-cormorant text-xl text-champagne-light">
                Your response has been recorded. We eagerly look forward to seeing you on 25 & 26 August 2026!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-cinzel text-xs uppercase text-gold-400 underline hover:text-gold-200 mt-4 cursor-pointer"
              >
                Edit your response
              </button>
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
};
