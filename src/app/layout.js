import "@/static/globals.css";
import { Inter } from "next/font/google";
import favicon from "@/app/favicon.ico";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokedex",
  description: "Pokedex made with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" favicon={favicon} />
      </head>

      <body className="bg-[#E8E8E8] w-full h-screen grid grid-flow-row relative justify-between grid-rows-page grid-cols-1 ">
        {children}
      </body>
    </html>
  );
}
