'use client';

import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
