import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer";
import Header from "../components/header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paw Hope Rescue",
  description: "Give them hope, one paw at a time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Paw Hope Rescue</title>
        <meta name="description" content="Tears As Golden Retriever Bows Head in Sorrow After Being The Last Dog Left At PawHope Rescue" />
        <meta name="keywords" content="pet rescue, adopt, save pets, hope for pets" />
        <meta name="author" content="You Can Help This Dog" />

        {/* Open Graph Meta Tags (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Tears As Golden Retriever Bows Head in Sorrow After Being The Last Dog Left At PawHope Rescue" />
        <meta property="og:description" content="pet rescue, adopt, save pets, hope for pets,  Tears As Golden Retriever Bows Head in Sorrow After Being The Last Dog Left At PawHope Rescue" />
        <meta property="og:image" content="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1741216740/quality_restoration_20250303171746036_jwxqvt.jpg" />
        <meta property="og:url" content="https://pawhope.vercel.app" />
        <meta property="og:type" content="website" />

      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VXH4HYMXJL"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VXH4HYMXJL');
          `}
        </Script>

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
