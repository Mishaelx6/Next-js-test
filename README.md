# Next.js Test Project

A modern Next.js application forked from [Mishaelx6/Next-js-test](https://github.com/Mishaelx6/Next-js-test) and refactored for Next.js 14/15 standards with TypeScript, Tailwind CSS, and best practices.

## Development Process

### 1. Project Setup
- Created project folder on desktop: `nextjs-project`
- Forked/cloned repository from `https://github.com/Mishaelx6/Next-js-test`
- Initialized Next.js 14/15 project with:
  - TypeScript support
  - Tailwind CSS for styling
  - ESLint for code quality
  - App Router architecture
  - `src/` directory structure
  - Import alias `@/*` for cleaner imports

### 2. Code Refactoring
- **Fixed broken MessageList component** with proper TypeScript types
- **Added comprehensive error handling** and loading states
- **Optimized React performance** using `useCallback` and proper dependency management
- **Created type definitions** in `src/types/index.ts` for type safety

### 3. Key Improvements Made
1. **TypeScript Integration**: Replaced `any` types with proper interfaces (`Message`, `Config`)
2. **Error Handling**: Added try-catch blocks, loading states, and error displays
3. **Performance Optimization**: Used `useCallback` to prevent unnecessary re-renders

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main home page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── MessageList.tsx   # Refactored message component
└── types/
    └── index.ts          # TypeScript type definitions
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **Next.js 14/15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting
- **React Hooks** - `useState`, `useEffect`, `useCallback`

## Features

- ✅ Modern Next.js 14/15 setup with App Router
- ✅ TypeScript for type safety
- ✅ Responsive design with Tailwind CSS
- ✅ Optimized React components with proper hooks usage
- ✅ Error handling and loading states
- ✅ Clean project structure with `src/` directory

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
