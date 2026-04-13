# EduQuest - Gamified Education PWA

A Progressive Web App designed to transform learning into an engaging, interactive adventure for children aged 8-16.

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for responsive design
- **Supabase** for backend (auth, database, storage)
- **React Query** for data fetching
- **Redux Toolkit** for state management
- **React Router** for navigation
- **PWA** support with Vite PWA plugin

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_OPENAI_API_KEY=your_openai_api_key (optional)
VITE_APP_URL=http://localhost:3000
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API services and integrations
├── store/         # Redux store and slices
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── config/        # Configuration files
└── styles/        # Global styles and Tailwind config
```

## Development

The app is built step by step following the CONTEXT.md specifications. Current progress:

- ✅ Project initialization (Vite + React + TypeScript)
- ✅ Tailwind CSS setup
- ✅ Basic folder structure
- ✅ Configuration files
- ✅ Supabase client setup
- ✅ Routing structure
- ✅ Splash and Auth pages
- 🔄 In progress...

## License

Private project
