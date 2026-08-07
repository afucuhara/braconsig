import type { NextConfig } from "next";

const isCpanelStaticExport = process.env.CPANEL_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isCpanelStaticExport
    ? {
        output: "export",
        typescript: {
          ignoreBuildErrors: true,
        },
      }
    : {}),
};

export default nextConfig;
