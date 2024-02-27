import type { Metadata } from "next";
import "@/app/globals.css";
import {  Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/providers/ThemeProvider"
import TranslationProvider from "@/providers/TranslationProvider";
import { loadTranslations } from "@/lib/api";
import { cookies } from 'next/headers'
import { TopBar } from "@/components/nav/topbar";
import settings from '@/settings.mjs'
import { Modal } from "@/components/modal"

// import { fontFamily } from "tailwindcss/defaultTheme"


const fontSans = FontSans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  // fallback: fontFamily.sans
});


export const metadata: Metadata = {
  title: settings?.metadata?.name || "",
  description: "",
};

export default  async function RootLayout({
  children, params: {lang}
}: Readonly<{
  children: React.ReactNode;
  params: {lang: string};
}>) {

  const locale = cookies().get("NEXT_LOCALE")?.value || lang

  const translations = await loadTranslations()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={
        cn(
          fontSans.variable,
          "relative flex min-h-screen flex-col font-sans bg-background antialiased"
        )
      }> 
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
           
          <TranslationProvider 
              translations={ translations } 
              locale={ locale }
            >


<TopBar  />


<main className="flex-1 mt-12">
  <div className="container">
  
  { children }

 

  </div>
</main>



<footer className="py-6 md:px-8 md:py-0"></footer>
 


          <Modal />

          </TranslationProvider>
        </ThemeProvider>

      

      </body>
    </html>
  );
}
