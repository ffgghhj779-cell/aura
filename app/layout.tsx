import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Motivation Aura | Premium Gear for the Saudi Athlete',
  description:
    'Curated premium sports equipment and mental conditioning tailored for Saudi athletes. Discover mood-matched gear from Nike, Adidas, Lululemon, and more.',
  openGraph: {
    title: 'Motivation Aura',
    description: 'Mental Coach for the Saudi Athlete',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
