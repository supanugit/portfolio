import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Supanusan | Full-Stack Developer & React Native Expert",
  description:
    "Portfolio of Supanusan, a full-stack developer specializing in React, Next.js, and mobile app development. Explore my projects, skills, and contact me for collaboration.",
  openGraph: {
    title: "Supanusan | Full-Stack Developer & React Native Expert",
    description:
      "Discover the projects and expertise of Supanusan, a full-stack developer specializing in React, Next.js, and mobile apps.",
    url: "https://your-portfolio.com",
    type: "website",
    images: [
      {
        url: "https://your-portfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supanusan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supanusan | Full-Stack Developer & React Native Expert",
    description:
      "Explore my projects, skills, and expertise in React, Next.js, and mobile app development.",
    images: ["https://your-portfolio.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
