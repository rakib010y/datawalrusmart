'use client';  // এটা অবশ্যই লাগবে — client-side hooks এর জন্য

import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';  // CSS যোগ করো

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
