import "@/static/globals.css";
import { Inter } from "next/font/google";
import favicon from "@/app/favicon.ico";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pokedex</title>
        <meta name="title" content="Pokedex" />
        <meta name="description" content="Pokedex made with nextjs" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://void-pokedex.vercel.app/" />
        <meta property="og:title" content="Pokedex" />
        <meta property="og:description" content="Pokedex made with nextjs" />
        <meta
          property="og:image"
          content="https://jesusjalomo.vercel.app/1.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://void-pokedex.vercel.app/"
        />
        <meta property="twitter:title" content="Pokedex" />
        <meta
          property="twitter:description"
          content="Pokedex made with nextjs"
        />
        <meta
          property="twitter:image"
          content="https://jesusjalomo.vercel.app/1.png"
        />
        <link rel="icon" favicon={favicon} />
      </head>

      <body className="bg-[#E8E8E8] w-full h-screen grid grid-flow-row relative justify-between grid-rows-page grid-cols-1 ">
        {children}
      </body>
    </html>
  );
}
