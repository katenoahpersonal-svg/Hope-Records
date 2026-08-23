import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repositoryName.endsWith(".github.io");

// GitHub project pages live at /<repository-name>/ (for example /Hope-Records/).
// Local development stays at / so you can use npm run dev normally.
const basePath = isGitHubPagesBuild && repositoryName && !isUserOrOrgSite
  ? `/${repositoryName}`
  : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
