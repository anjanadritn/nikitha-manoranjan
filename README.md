# 💍 Nikitha H. & Manoranjan B.V. — Digital Wedding Invitation Website

A luxury, cinematic South Indian digital wedding invitation web application built for the wedding of **Nikitha H. & Manoranjan B.V.**.

🌐 **Production Website URL**: [https://nikitha-manoranjan-xw5j.vercel.app/](https://nikitha-manoranjan-xw5j.vercel.app/)

---

## 📷 Adding Couple Photos

Place couple photographs inside the `public/images/gallery/` folder:

```text
public/
  └── images/
      ├── hero.jpg
      ├── bride.jpg
      ├── groom.jpg
      ├── venue.jpg
      ├── social-preview.jpg
      └── gallery/
          ├── couple-1.jpg
          ├── couple-2.jpg
          ├── couple-3.jpg
          ├── couple-4.jpg
          └── couple-5.jpg
```

To display additional couple photos in the website gallery, open `src/config/weddingConfig.ts` and add their paths to the `galleryImages` array:

```typescript
// Example entry in weddingConfig.ts:
{
  id: 'couple-7',
  src: '/images/gallery/couple-7.jpg',
  title: 'Together Forever',
  category: 'Couple',
  alt: 'Nikitha and Manoranjan Couple Portrait 7',
}
```

---

## ⚙️ Centralized Wedding Configuration

All wedding details, names, dates, phone numbers, addresses, gallery images, calendar text, and WhatsApp messages are stored in **one single file**:

👉 `src/config/weddingConfig.ts`

---

## 📍 How Google Maps Directions Work

1. **Preset Origins**: Buttons for **Masarapadi** and **Bhairapura** launch turn-by-turn navigation directly from those towns to Sri Ramanjaneya Kalyana Mantapa.
2. **My Current Location**: Uses the browser's Geolocation API to get the user's current GPS coordinates and open Google Maps directions to the venue. If permission is denied, it gracefully informs the user.
3. **Custom Origin**: Guests can type any town or city name in the input box to navigate.
4. **Copy Address**: One click copies the full address string to clipboard with instant visual confirmation.

---

## 💌 WhatsApp Share & Vercel Deployment

- The WhatsApp share button automatically generates a WhatsApp invitation containing the live production link: `https://nikitha-manoranjan-xw5j.vercel.app/`
- Every commit pushed to the `main` branch of your GitHub repository will automatically trigger a Vercel build and update the live website.

---

## 🚀 Pushing Updates to GitHub

```bash
git add .
git commit -m "Update gallery to couple photos and add Vercel URL to WhatsApp share"
git push origin main
```
