export const swcMinify = true;
export async function redirects() {
  return [
    {
      source: "/blog",
      destination: "/",
      permanent: true,
    },
  ];
}
export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.jsdelivr.net",
    },
  ],
};
