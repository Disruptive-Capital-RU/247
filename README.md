# 247 Concierge

A premium concierge service platform built with Next.js, offering luxury services to discerning clients.

## Project Overview

This application provides a range of exclusive concierge services including:

- Luxury Travel Arrangements
- Personal Shopping
- Wellness Services
- Medical Concierge
- Event Management

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, TailwindCSS
- **Authentication**: Clerk
- **Backend**: Next.js API Routes
- **Database**: Convex (prepared for integration)

## Project Structure

```
247/
├── public/             # Static assets
│   ├── img/            # Images
│   └── assets/         # Other static assets
├── src/                # Source code
│   ├── app/            # Next.js App Router
│   │   ├── api/        # API Routes
│   │   ├── (routes)/   # Page Routes
│   │   ├── globals.css # Global styles
│   │   └── layout.tsx  # Root layout
│   ├── components/     # Reusable components
│   ├── lib/            # Utility libraries
│   ├── styles/         # CSS modules and styles
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── convex/             # Convex database configuration
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/247.git
cd 247
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Set up environment variables by copying `.env.example` to `.env.local` and filling in the values

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Authentication**: Secure sign-in and sign-up with Clerk
- **Service Booking**: Book appointments for various services
- **Admin Dashboard**: Manage services and appointments (protected route)

## License

This project is proprietary and confidential.

## Contact

For inquiries, please contact info@247concierge.com
