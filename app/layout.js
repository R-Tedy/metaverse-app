import "./globals.css";
import { Navbar, Footer } from "@/components";
// import styles from "@/styles";


export const metadata = {
  title: "MetaVerse",
  description: "A look at what the metaverse would have been or rather will be once properly executed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </head>
      
      <body
      >
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
      
    </html>
  );
}
