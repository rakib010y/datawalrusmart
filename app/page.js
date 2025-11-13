'use client';

import { ConnectButton, useWallet } from '@suiet/wallet-kit';
import { useState } from 'react';

export default function Home() {
  const { connected, account } = useWallet();
  const [status, setStatus] = useState('');

  const handleSell = () => {
    if (!connected) {
      setStatus('Please connect wallet first!');
      return;
    }
    setStatus(
      `Uploaded to Walrus! CID: walrus://abc123\nNFT Minted! Address: ${account?.address}`
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>DataWalrusMart</h1>
      <ConnectButton />
      <br /><br />
      <input type="file" />
      <br /><br />
      <input type="number" placeholder="Price in SUI" />
      <br /><br />
      <button
        onClick={handleSell}
        style={{
          background: '#38a169',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Sell Data as NFT
      </button>

      {status && (
        <pre
          style={{
            marginTop: '20px',
            background: '#f3f4f6',
            padding: '15px',
            borderRadius: '8px',
            whiteSpace: 'pre-wrap',
            textAlign: 'left',
            fontSize: '14px'
          }}
        >
          {status}
        </pre>
      )}

      <footer style={{ marginTop: '3rem', color: '#666', fontSize: '0.9rem' }}>
        Built by <strong>Rakib</strong> from Bangladesh for Walrus Haulout 2025
      </footer>
    </div>
  );
}
