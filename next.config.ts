import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/djqttard2/image/upload/q_auto/f_auto/v1775087593/Gemini_Generated_Image_mkv5zdmkv5zdmkv5_qaqy2o.png')]
  }
};

export default nextConfig;
