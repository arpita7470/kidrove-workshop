# AI & Robotics Summer Workshop — Landing Page

A responsive workshop landing page (inspired by Kidrove's style) for an **AI & Robotics Summer Workshop**, built with **React + Tailwind CSS** on the frontend and an **Express.js + MongoDB** API on the backend.

## Live demo

- **Live site:** _add Vercel/Netlify link here after deploying_
- **GitHub repo:** _add repo link here_

## Project structure

```
kidrove-workshop/
├── frontend/   → React (Vite) + Tailwind CSS landing page
└── backend/    → Express.js API with the /api/enquiry endpoint
```

## Tech stack

| Layer    | Tech                              |
| -------- | ---------------------------------- |
| Frontend | React 19, Vite, Tailwind CSS v4    |
| Backend  | Node.js, Express.js, Mongoose      |
| Database | MongoDB (optional — see below)     |

## Getting started

### 1. Frontend

```bash
cd frontend
npm install
cp .env.example .env   # set VITE_API_URL if backend runs on a different host/port
npm run dev
```

Runs on `http://localhost:5173` by default.

To build for production:

```bash
npm run build
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env   # set MONGODB_URI to enable persistence
npm run dev             # or: npm start
```

Runs on `http://localhost:5000` by default.

**MongoDB is optional.** If `MONGODB_URI` is not set, the server still runs and the `/api/enquiry` endpoint still validates and accepts submissions — it just logs them to the console instead of saving them. This was a deliberate choice so the app works end-to-end out of the box, with DB persistence as a drop-in upgrade.

To enable persistence, create a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster and paste its connection string into `MONGODB_URI` in `backend/.env`.

## API reference

### `POST /api/enquiry`

Accepts a registration form submission.

**Request body:**

```json
{
  "name": "Aahh Sharma",
  "email": "aahh@example.com",
  "phone": "9876543210"
}
```

**Success response — `201`:**

```json
{
  "success": true,
  "message": "Thanks! Your enquiry was received. We'll be in touch shortly."
}
```

**Validation error response — `400`:**

```json
{
  "success": false,
  "message": "Validation failed. Please check the highlighted fields.",
  "errors": {
    "name": "Name is required.",
    "email": "Please provide a valid email address.",
    "phone": "Phone number must be exactly 10 digits."
  }
}
```

Validation rules: name is required (min 2 characters), email must match a standard email pattern, and phone must be exactly 10 digits.

## Pages and sections

- **Hero** — workshop title, short description, and an "Enroll Now" CTA that scrolls to the form
- **Workshop Details** — age group, duration, mode, fee, and start date as quick-glance cards
- **Learning Outcomes** — 6 concrete things a student will be able to do by the end
- **FAQ** — accordion with 5 common questions
- **Registration Form** — name, email, phone with inline validation, loading state, and success/error feedback wired to the backend

## Design notes

The palette and visual language were chosen deliberately rather than defaulting to a generic "kids site" look: a deep indigo anchor (trust, tech), Kidrove's own brand blue as a circuit-style accent, and a warm coral for calls to action — paired with Space Grotesk (display) and Inter (body) for a friendly-but-credible tone, since parents are the ones paying and enrolling. The hero's animated circuit/robot illustration is the page's signature element, tying directly into the "AI & Robotics" subject matter instead of using a generic stock photo.

## Notes for evaluators

See `SUBMISSION_NOTE.md` for the approach summary and what would be improved with more time.
