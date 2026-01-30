import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import AuthModal from "@/components/AuthModal";
import ChatWidget from "@/components/ChatWidget";
import HideOnRoutes from "@/components/HideOnRoutes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Department of CS & IT - B.K. Birla College",
  description: "Official website of the Computer Science and IT Department, B.K. Birla College (Autonomous), Kalyan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <AuthProvider>
          <HideOnRoutes routes={["/student-dashboard"]}>
            <Navbar />
          </HideOnRoutes>
          {children}
          <HideOnRoutes routes={["/student-dashboard"]}>
            <Footer />
          </HideOnRoutes>
          <AuthModal />
          <ChatWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
