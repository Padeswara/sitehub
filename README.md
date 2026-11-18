# SiteHub

A simple, responsive site database manager built to help my partner easily organize and track site locations, PIC contacts, photo documentation, and approval statuses in one place.

---

## Features

- **Interactive Status Overview**
  View live counts for **Total Sites**, **On Going**, **Pending**, **Approve**, and **Decline**. Clicking any status card filters the site list automatically.
- **Cards & Table Views**
  Switch between a visual card grid and a compact data table across both desktop and mobile devices.
- **Full Site Management & Photo Documentation**
  Add, edit, and delete site records—including company name, address, PIC name, WhatsApp number, status, notes, and site photos (with click-to-preview lightbox).
- **Quick Status Updates**
  Update a site's status directly from its card or table row without opening the edit form.
- **Search, Filter & Sort**
  Instantly search by company, address, PIC, phone number, or notes, filter by status, and sort alphabetically (`A–Z` / `Z–A`) or by date (`Newest` / `Oldest`).
- **One-Click WhatsApp Contact**
  Tap a PIC's phone number to open a WhatsApp chat directly.
- **Export to Excel (`.xlsx`)**
  Download the current filtered site list as a formatted Excel spreadsheet.
- **Light & Dark Mode**
  Defaults to Light Mode with a one-click toggle in the navbar.
- **Instant Local Storage**
  Saves all site data and photos directly in the browser (`localStorage`)—no login or database setup required.

---

## Tech Stack

- [React 19](https://react.dev/) & [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [SheetJS (`xlsx`)](https://sheetjs.com/)

---

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview the production build**
   ```bash
   npm run preview
   ```

5. **Run linter**
   ```bash
   npm run lint
   ```

---

© 2026 Rittergeistworks by Padeswaraa. All rights reserved.
