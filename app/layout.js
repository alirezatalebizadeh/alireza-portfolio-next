import "./globals.css";

export const metadata = {
  title: "علیرضا طالبی زاده",
  description: "سایت شخصی علیرضا طالبی زاده توسعه داده شده با next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
