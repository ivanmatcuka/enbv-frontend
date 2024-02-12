// 'use client';

import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './globals.css';

import { ApolloWrapper } from '../ApolloWrapper';
import ThemeRegistry from '../theming/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Если б не было войны',
  description: 'Coming...',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <ThemeRegistry>
            <Header />
            {children}
            <Footer />
          </ThemeRegistry>
        </ApolloWrapper>
      </body>
    </html>
  );
}
