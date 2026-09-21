# DOMORE

A modern, full‑stack task management web app. DOMORE pairs a polished React frontend with a dedicated Node.js/Express API and MongoDB database, giving you task management, a calendar, stats, and account/settings features backed by real authentication and data persistence.

- 🖥️ **Frontend (this repo):** [github.com/WDataW/DOMORE](https://github.com/WDataW/DOMORE)
- ⚙️ **Backend / API:** [github.com/WDataW/DOMORE-Backend](https://github.com/WDataW/DOMORE-Backend)
- 🌐 **Live app:** [domore.nerdos.site](https://domore.nerdos.site)
- 🔌 **Live API:** [api.domore.nerdos.site](https://api.domore.nerdos.site)

## Main Pages

1. **Landing Page**
2. **Auth Pages**
   - Sign in
   - Sign up
   - Forgot Password, Verify Email, Set Password
3. **App Pages**
   - Home
   - Tasks
   - Stats
   - Mail
   - Settings
   - ...and more

## Features

1. **Task Management**
   - Create, edit, and organize tasks easily.
   - Add descriptive titles, due dates, and details for better clarity.
2. **Tag System**
   - Assign tags to tasks for quick filtering and organization.
   - Create your own custom tags to match your workflow.
3. **Calendar View**
   - Visualize tasks on a calendar by day, week, or month.
   - Schedule new tasks directly from the calendar interface.
4. **Statistics Dashboard**
   - Gain insights into your productivity through detailed charts and graphs.
   - Track progress, completed tasks, and activity trends.
5. **Mail**
   - View system messages and updates in a dedicated mail page.
6. **Settings & Personalization**
   - Switch between Arabic and English interfaces.
   - Toggle dark/light themes and adjust notification preferences.
   - Customize the app with your own accent colors.
   - Manage your account settings in one place.
7. **Authentication & Accounts** *(powered by the new backend)*
   - Secure sign up / sign in with hashed passwords and JWT-based sessions.
   - Email verification and password reset flows.
   - File uploads (e.g. avatars) with image processing.

## Architecture

DOMORE is split into two repositories that work together:

| Layer | Repo | Stack |
|---|---|---|
| Frontend | [DOMORE](https://github.com/WDataW/DOMORE) | React, Tailwind CSS, React Router |
| Backend / API | [DOMORE-Backend](https://github.com/WDataW/DOMORE-Backend) | Node.js, Express, MongoDB (Mongoose) |

The frontend talks to the API over HTTPS via Axios; the API handles auth, data storage, validation, file uploads, and email.

## Technologies

**Frontend**
- React.js
- Tailwind CSS
- React Router for routing
- Shadcn for charts
- Framer Motion for animations
- i18next for internationalization
- Axios for API requests
- Deployed on Vercel

**Backend**
- Node.js with Express
- MongoDB with Mongoose
- JWT (jsonwebtoken) + bcrypt for authentication
- Zod for request validation
- Helmet, CORS, and express-rate-limit for security
- express-fileupload + sharp + file-type for image uploads
- Nodemailer / Resend for transactional email
- JSON locale files for localized system inbox messages

## Getting Started

To run the full app locally you'll need both repositories: this frontend and the [DOMORE-Backend](https://github.com/WDataW/DOMORE-Backend) API.

### Requirements

- Node.js v18 or higher
- npm
- A MongoDB instance (local or hosted) for the backend

### 1. Set up the backend

Clone and run the [DOMORE-Backend](https://github.com/WDataW/DOMORE-Backend) API first — the frontend needs it running to log in, save tasks, and so on. Follow that repo's own README for install steps and required environment variables.

### 2. Set up the frontend

```bash
git clone https://github.com/WDataW/DOMORE.git
cd DOMORE
npm install
```

Point the frontend at your backend (update the API base URL wherever it's configured in the source, e.g. in the Axios setup), then:

```bash
npm run dev       # start the development server
npm run build      # build for production
npm run preview    # preview the production build
```

## Deploy Instructions

1. Clone or fork both repositories into your GitHub account.
2. Deploy the backend (e.g. to Render, Railway, or your own server) and note its public URL.
3. Go to [vercel.com](https://vercel.com/) and link your GitHub account.
4. Import the forked frontend repo into Vercel.
5. Update the API base URL in the frontend source to point at your deployed backend.
6. Keep the default build configuration and click **Deploy**.

## About

- Frontend: [domore.nerdos.site](https://domore.nerdos.site)
- API: [api.domore.nerdos.site](https://api.domore.nerdos.site)
