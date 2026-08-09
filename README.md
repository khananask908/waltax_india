# WalTax India

WalTax India is a modern Next.js web application for business registration, tax filing, compliance, and legal services in India. The platform includes a public-facing website, secure user authentication, a personalized dashboard, and an admin area for managing uploaded documents and sharing them with specific users.

## Features

- Public website for services, pricing, compliance, blogs, and contact information
- User registration and login flow
- Admin login and protected admin dashboard
- Dashboard for authenticated users with profile, wallet, and document management
- File upload, download, delete, and targeted sharing to specific users
- MongoDB-backed user and upload metadata storage

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- MongoDB
- Framer Motion
- Lucide Icons

## Project Structure

- `src/app` – Next.js routes and API handlers
- `src/components` – reusable UI components and dashboard/admin panels
- `src/lib` – authentication and database helpers
- `src/views` – page-level React views
- `public/uploads` – uploaded files stored locally

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root and add:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

```

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run start
```

## Notes

- Admin access is protected through a dedicated admin login route.
- Uploaded files can be shared with specific users from the admin dashboard.
- The upload API currently stores files under the local public uploads directory.

## License

This project is for internal/business use and is not publicly licensed by default.
