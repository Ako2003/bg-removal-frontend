import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'BgRemover - AI-Powered Background Removal Tool',
  description: 'Remove backgrounds from images instantly with our AI-powered tool. Perfect for e-commerce, social media, and professional photography.',
  keywords: 'background removal, AI, image editing, transparent background, photo editing',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={poppins.className}>
            <Header />
            {children}
            <Footer />
        </body>
      </html>
  );
}