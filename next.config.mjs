// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.mjs  (ESM)
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repo = 'portfolio' // <-- exact GitHub repo name for Project Pages

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isGitHubPages ? `/${repo}` : '',
  assetPrefix: isGitHubPages ? `/${repo}/` : '',
  trailingSlash: true,
}

export default config

