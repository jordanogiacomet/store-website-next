'use client';
import { Montserrat } from "next/font/google";
import { Header } from '@/components/Header';
import { UserRound, Phone, ShoppingCart } from 'lucide-react';
import './globals.css';
import MobileMenu from '@/components/MobileMenu';
import Subheader from "@/components/Subheader";
import { ParallaxProvider } from "@/contexts/ParallaxContext";
import { TextFieldComponent } from "@/components/TextField";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const montserrat = Montserrat({ subsets: ["latin"] });

const menuItems = [
  { icon: UserRound, text: 'Conta', href: '/' },
  { icon: Phone, text: 'Suporte', href: '/' },
  { icon: ShoppingCart, text: 'Carrinho', href: '/' },
];

const categories = [
  { label: 'Electronics', items: ['Phones', 'Laptops', 'Cameras'] },
  { label: 'Fashion', items: ['Clothing', 'Shoes', 'Accessories'] },
  { label: 'Home', items: ['Furniture', 'Decor', 'Kitchen'] },
  { label: 'T-Shirts', items: ['Furniture', 'Decor', 'Kitchen'] },
  { label: 'Shoes', items: ['Furniture', 'Decor', 'Kitchen'] },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ParallaxProvider>
      <html lang="en">
        <body className={`${montserrat.className} bg-black`}>
          <Header.Root>
            <Header.Container>
              <Header.LinkRoot>
                <Header.LinkAnchor link='/' text='Logo' />
              </Header.LinkRoot>
              <div className="mx-4">
                <TextFieldComponent.Root placeholder="Search...">
                  <TextFieldComponent.Slot className="pr-2 text-pink-500 cursor-pointer hover:focus">
                    <MagnifyingGlassIcon height="20" width="20" />
                  </TextFieldComponent.Slot>
                </TextFieldComponent.Root>
              </div>
              <Header.Menu>
                {menuItems.map(({ icon, text, href }) => (
                  <Header.MenuLinkRoot key={text}>
                    <Header.MenuLinkIcon icon={icon} />
                    <Header.MenuLinkAnchor href={href} onClick={() => {}}>
                      {text}
                    </Header.MenuLinkAnchor>
                  </Header.MenuLinkRoot>
                ))}
              </Header.Menu>
              <MobileMenu />
            </Header.Container>
            <Subheader categories={categories} />
          </Header.Root>
          {children}
        </body>
      </html>
    </ParallaxProvider>
  );
};