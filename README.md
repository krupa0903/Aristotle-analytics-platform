# ⚡ Aristotle

> **Know your users, not just your numbers.**

A lightweight, privacy-first web analytics platform with real-time click heatmaps, live visitor mapping, and intelligent traffic insights — built for developers who care about performance and privacy.

🔗 **Live Demo:** [aristotle-an-analytics-platform-hfsdguq6b-saraneks-projects.vercel.app](https://aristotle-an-analytics-platform-hfsdguq6b-saraneks-projects.vercel.app)

---

## ✨ Features

- 📊 **Real-time Dashboard** — Live pageviews, click counts, rage click detection, and traffic trends updated every 5 seconds
- 🔥 **Click Heatmaps** — Visual overlay of where users click on your actual website, with rage click highlighting
- 🌍 **Live User Map** — World map showing active visitors with real-time geolocation and activity feed
- 🔁 **Funnel Analytics** — Track user drop-off across your key pages
- 🛡️ **Privacy First** — No cookies, no IP storage, GDPR compliant, under 5KB tracker script
- 🌙 **Dark / Light Mode** — Fully themed dashboard with system preference support
- 🔐 **Auth System** — Signup/signin with unique site ID per user

---

## 🚀 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/saranek/aristotle.git
cd aristotle
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root:

```env
DATABASE_URL=your_supabase_or_postgres_connection_string
```

### 3. Set up the database

Run this SQL in your Supabase SQL editor:

```sql
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  website_url TEXT,
  website_name TEXT,
  site_id TEXT UNIQUE
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  site_id TEXT,
  type TEXT,
  page TEXT,
  x FLOAT,
  y FLOAT,
  referrer TEXT,
  city TEXT,
  country TEXT,
  country_code TEXT,
  lat FLOAT,
  lon FLOAT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and sign up.

---

## 📡 Tracking Script

Add this to the `<head>` of any website you want to track:

```html
<script 
  src="https://aristotle-an-analytics-platform-hfsdguq6b-saraneks-projects.vercel.app/tracker.js" 
  data-site="YOUR_SITE_ID" 
  data-api="https://aristotle-an-analytics-platform-hfsdguq6b-saraneks-projects.vercel.app">
</script>
```

Your `site_id` is shown in **Settings → Tracking Script** after signing up.

---

## 🗂️ Project Structure

```
aristotle/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── signin/route.js    # Sign in API
│   │   │   └── signup/route.js    # Sign up API
│   │   ├── collect/route.js       # Event collection + geolocation
│   │   └── data/route.js          # Dashboard data API
│   ├── auth/
│   │   ├── signin/page.tsx
│   │   └── signup/page.tsx
│   └── dashboard/
│       ├── page.tsx               # Main dashboard
│       ├── heatmap/page.tsx       # Click heatmap
│       ├── live/page.tsx          # Live users map
│       ├── funnel/page.tsx        # Funnel analytics
│       └── settings/page.tsx      # Settings
├── public/
│   └── tracker.js                 # Embeddable tracking script
└── src/
    └── contexts/
        └── ThemeContext.tsx
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL (Supabase) |
| Charts | Recharts |
| Maps | D3-geo + World Atlas |
| Geolocation | ip-api.com (free tier) |
| Deployment | Vercel |

---

## 🌐 Deploying to Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add `DATABASE_URL` environment variable
4. Deploy — you'll get a live URL instantly

---

## 🔒 Privacy by Design

| Feature | Status |
|--------|--------|
| Cookies | ❌ Never used |
| IP Address stored | ❌ Never stored |
| Cross-site tracking | ❌ Not possible |
| GDPR compliant | ✅ Yes |
| Tracker script size | ✅ Under 5KB |
| Open source | ✅ Yes |

---

## 👩‍💻 Built By

Made with ❤️ for a hackathon by Krupa, Sara and Rukmini.

---

## 📄 License

MIT — free to use, modify, and deploy.
