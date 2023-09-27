# Twitter/X Clone

A clone of Twitter/X built with Next.js 13, React, Typescript, Tailwind, and Supabase.

## Tech Stack

- Next.js 13
- React
- Typescript
- Tailwind
- Supabase

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/xSharkhy/xwitter-next
    ```
2. Install NPM packages
    ```sh
    npm install
    ```

## Usage
1. Set up a Supabase account and create a new project
2. Create a new database in your Supabase project
3. Create a .env.local file in the root of your project and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Run the development server
   ```sh
    npm run dev
    ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

