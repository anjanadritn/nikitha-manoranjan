# 💍 Nikitha H. & Manoranjan B.V. — Digital Wedding Invitation Website

A luxury, cinematic South Indian digital wedding invitation web application built for the wedding of **Nikitha H. & Manoranjan B.V.**.

---

## 📁 Photo & Asset Placement Guide

Place your actual wedding photographs and background music directly in the `/public` folder:

```text
public/
  ├── images/
  │   ├── hero.jpg             <-- Main hero couple photograph (Full HD)
  │   ├── bride.jpg            <-- Bride Nikitha H. portrait photo
  │   ├── groom.jpg            <-- Groom Manoranjan B.V. portrait photo
  │   ├── venue.jpg            <-- Sri Ramanjaneya Kalyana Mantapa photo
  │   ├── social-preview.jpg   <-- WhatsApp link preview banner (1200x630px)
  │   ├── couple-1.jpg         <-- Gallery image 1
  │   ├── engagement-1.jpg     <-- Gallery image 2
  │   ├── family-1.jpg         <-- Gallery image 3
  │   ├── couple-2.jpg         <-- Gallery image 4
  │   ├── wedding-1.jpg        <-- Gallery image 5
  │   └── family-2.jpg         <-- Gallery image 6
  └── music/
      └── wedding-music.mp3    <-- Wedding background music MP3 track
```

> **Note**: If any photo or music file is missing, the website automatically falls back to built-in gold vector emblems, parchment frames, and Web Audio API synthesized tanpura chords so nothing breaks!

---

## ⚙️ Centralized Wedding Configuration

All wedding details, names, dates, phone numbers, addresses, gallery images, calendar text, and WhatsApp messages are stored in **one single file**:

👉 `src/config/weddingConfig.ts`

You do **NOT** need to edit HTML or component files to change wedding data. Simply update `weddingConfig.ts`.

---

## 📍 How Google Maps Directions Work

1. **Preset Origins**: Buttons for **Masarapadi** and **Bhairapura** launch turn-by-turn navigation directly from those towns to Sri Ramanjaneya Kalyana Mantapa.
2. **My Current Location**: Uses the browser's Geolocation API to get the user's current GPS coordinates and open Google Maps directions to the venue. If permission is denied, it gracefully informs the user.
3. **Custom Origin**: Guests can type any town or city name in the input box to navigate.
4. **Copy Address**: One click copies the full address string to clipboard with instant visual confirmation.

---

## 💌 RSVP & Backend Information

- **Current Implementation**: The RSVP form and Guest Blessings Wall save responses locally using `localStorage` and trigger celebration confetti.
- **Backend Ready**: To connect to a database (e.g. Supabase, Firebase, or an API endpoint), simply update the submit handler in `src/components/RSVPSection.tsx`. No credentials are exposed in the frontend.

---

## 🚀 Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start local dev server:
   ```bash
   npm run dev
   ```
3. Build for production deployment:
   ```bash
   npm run build
   ```
