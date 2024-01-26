import type { Metadata } from "next";
import {  Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/providers/ThemeProvider"
import TranslationProvider from "@/providers/TranslationProvider";
import SettingsProvider from "@/providers/SettingsProvider"
import {loadTranslations} from "@/lib/datasources";
import {cookies} from 'next/headers'
import { TopBar } from "@/components/topbar";
import settings from '@/settings.mjs'

const fontSans = FontSans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: settings?.metadata?.name || "",
  description: "",
};

export default  async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = cookies().get("NEXT_LOCALE")?.value || `${process.env.NEXT_PUBLIC_DEFAULT_LOCALE}`

  const translations = await loadTranslations()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={
        cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )
      }> 
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <SettingsProvider settings={settings}> 
          <TranslationProvider 
              translations={ translations } 
              locale={ locale }
            >

<div className="flex min-h-screen flex-col items-center justify-between p-8">
<TopBar />
<main className="flex min-h-screen flex-col items-center justify-between p-24">{ children }
</main>

<footer>asds</footer>
</div>

          
          </TranslationProvider>
          </SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
