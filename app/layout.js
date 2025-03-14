import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "علیرضا طالبی زاده",
  description: "سایت شخصی علیرضا طالبی زاده توسعه داده شده با next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
