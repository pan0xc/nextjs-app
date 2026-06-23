import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "next-themes"
import { Header } from "@/components/Header"
import { Providers } from "@/components/providers"
import SignedIn from "@/components/SignedIn";

const InterSans = Inter({ subsets: ['latin'], variable: '--font-sans' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", InterSans.variable, "font-sans")}
    >
      <body className="antialiased min-h-dvh flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <SignedIn>
              <Header />
            </SignedIn>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
