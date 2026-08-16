import React from 'react';
import { Calendar, Download } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

interface CalendarExportProps {
  type: 'wedding' | 'engagement';
}

export const CalendarExport: React.FC<CalendarExportProps> = ({ type }) => {
  const isWedding = type === 'wedding';
  const title = isWedding ? weddingConfig.calendar.weddingTitle : weddingConfig.calendar.engagementTitle;
  const details = isWedding ? weddingConfig.calendar.weddingDetails : weddingConfig.calendar.engagementDetails;
  const location = weddingConfig.venue.fullAddress;

  // Timestamps
  // Wedding: 26 Aug 2026 04:50 AM IST to 05:30 AM IST (UTC: 25 Aug 23:20 to 26 Aug 00:00)
  // Engagement: 25 Aug 2026 06:30 PM IST onwards (UTC: 25 Aug 13:00 to 16:00)
  const startTimeISO = isWedding ? '20260825T232000Z' : '20260825T130000Z';
  const endTimeISO = isWedding ? '20260826T000000Z' : '20260825T160000Z';

  // Google Calendar Link
  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startTimeISO}/${endTimeISO}&details=${encodeURIComponent(
    details
  )}&location=${encodeURIComponent(location)}`;

  // Download .ics File
  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Nikitha & Manoranjan Wedding//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${details}`,
      `LOCATION:${location}`,
      `DTSTART:${startTimeISO}`,
      `DTEND:${endTimeISO}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${isWedding ? 'Wedding-Muhurtham' : 'Engagement'}-Nikitha-Manoranjan.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      {/* Google Calendar Link */}
      <a
        href={googleCalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/50 text-gold-300 font-cinzel text-xs font-semibold tracking-wider transition-colors"
      >
        <Calendar className="w-3.5 h-3.5 text-gold-400" />
        <span>Google Calendar</span>
      </a>

      {/* Download .ics File */}
      <button
        onClick={handleDownloadICS}
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-maroon-900 hover:bg-maroon-800 border border-gold-500/40 text-gold-300 font-cinzel text-xs font-semibold tracking-wider transition-colors cursor-pointer"
      >
        <Download className="w-3.5 h-3.5 text-gold-400" />
        <span>Download .ICS</span>
      </button>
    </div>
  );
};
