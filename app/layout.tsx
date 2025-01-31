import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_components/_theme-provider/theme-provider";

const barlow = Barlow({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Color picker App",
  description: "Use Tailwind for custom your components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
      >
      <body
        className={`${barlow.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
