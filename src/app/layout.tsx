'use client';
import { Montserrat } from "next/font/google";
import { Header } from '@/components/Header';
import { UserRound, Phone, ShoppingCart } from 'lucide-react';
import './globals.css';
import MobileMenu from '@/components/MobileMenu';
import { Subheader } from '@/components/Subheader';
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${montserrat.className} h-screen bg-black`}>
        <Header.Root>
          <Header.Container>
            <Header.LinkRoot>
              <Header.LinkAnchor link='/' text='Logo'/>
            </Header.LinkRoot>
            <Header.Menu>
              <Header.MenuLinkRoot>
                <Header.MenuLinkIcon icon={UserRound} />
                <Header.MenuLinkAnchor href='/' onClick={() => {}}>
                  Conta
                </Header.MenuLinkAnchor>
              </Header.MenuLinkRoot>
              <Header.MenuLinkRoot>
                <Header.MenuLinkIcon icon={Phone} />
                <Header.MenuLinkAnchor href='/' onClick={() => {}}>
                  Suporte
                </Header.MenuLinkAnchor>
              </Header.MenuLinkRoot>
              <Header.MenuLinkRoot>
                <Header.MenuLinkIcon icon={ShoppingCart} />
                <Header.MenuLinkAnchor href='/' onClick={() => {}}>
                  Carrinho
                </Header.MenuLinkAnchor>
              </Header.MenuLinkRoot>
            </Header.Menu>
            <MobileMenu />
          </Header.Container>
          <Subheader />
        </Header.Root>
      {children}
    </body>
    </html>
  );
};

