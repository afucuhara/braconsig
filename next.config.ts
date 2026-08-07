import type { NextConfig } from "next";

const isCpanelStaticExport = process.env.CPANEL_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isCpanelStaticExport ? { output: "export" } : {}),
};

export default nextConfig;
