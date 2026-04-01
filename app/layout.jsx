import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RadioPlayer from "../components/RadioPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Centro Cristiano Esquina",
  description: "Página de Centro Cristiano Esquina, donde se muestran los eventos. Más Radio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col">
        <NavBar />
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
          <div className="flex h-full grow flex-col">
            <main className="flex-1 px-4 py-10 sm:px-10 lg:px-20 pt-22.5">
              {children}
            </main>
          </div>
        </div>
        <Footer />
        <RadioPlayer />
      </body>
    </html>
  );
}
