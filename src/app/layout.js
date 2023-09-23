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
        <title>Pokedex</title>
        <meta name="title" content="Pokedex" />
        <meta name="description" content="Pokedex made with nextjs" />
        <meta
          name="keywords"
          content="Pokedex, Nextjs, React, Pokemon, Charizard, Pikachu, Ditto, Pidgeotto, Raichu, Entei, Zapdos, Moltres, Suicuine, Eevee, Jolteon, Snorlax, Pokemon game, poke game, pokemon news, pokemon team, poke team, latest news pokemon, play pokemon, mewtwo, mew, mega, poki"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en, en-us" />
        <meta name="publisher" content="Jesus Jalomo" />
        <meta name="author" content="Jesus Jalomo" />

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
        <meta http-equiv="Cache-control" content="public" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="icon"
          favicon="https://void-pokedex.vercel.app/pokeball-512-256624.png"
        />
      </head>

      <body className="bg-[#E8E8E8] w-full h-screen grid grid-flow-row relative justify-between grid-rows-page grid-cols-1 ">
        {children}
      </body>
    </html>
  );
}
