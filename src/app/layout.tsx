import { Montserrat } from "next/font/google";
import { Header } from '@/components/Header';
import './globals.css';
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
          <Header.LinkRoot>
            <Header.LinkAnchor link='/' text='Logo'/>
          </Header.LinkRoot>
        </Header.Root>
      {children}
    </body>
    </html>
  );
};

