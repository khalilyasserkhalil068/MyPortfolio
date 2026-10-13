import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ⚠️  GitHub Pages: change '/portfolio/' below to match your exact repository name.
//     Example: repo URL  https://github.com/username/my-portfolio → '/my-portfolio/'
//     For a username.github.io repo (root site) → '/'
const repoName = '/portfolio/'

// https://vite.dev/config/
export default defineConfig({
  // Dynamically picks up the repo name from GitHub Actions env, or falls back to repoName above
  base: process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : repoName,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
