'use client';
import { useWallet } from '@suiet/wallet-kit';  // Wallet hook
import { useState } from 'react';

export default function Home() {
  const { connected, connect, account } = useWallet();  // Wallet স্টেট
  const [status, setStatus] = useState('');

  const handleConnect = async () => {
    try {
      await connect();  // Wallet কানেক্ট করো
      if (connected) {
        setStatus(`Wallet Connected! Address: ${account.address}`);
      }
    } catch (error) {
      setStatus('Connection failed. Try again!');
    }
  };

  const handleSell = () => {
    if (!connected) {
      setStatus('Please connect wallet first!');
      return;
    }
    setStatus(`Uploaded to Walrus! CID: walrus://abc123\nNFT Minted! Address: ${account.address}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>DataWalrusMart</h1>
      <button onClick={handleConnect} style={{ background: '#4361ee', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px' }}>
        {connected ? 'Wallet Connected' : 'Connect Sui Wallet'}
      </button>
      <br /><br />
      <input type="file" />
      <br /><br />
      <input type="number" placeholder="Price in SUI" />
      <br /><br />
      <button onClick={handleSell} style={{ background: '#38a169', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px' }}>
        Sell Data as NFT
      </button>
      <pre style={{ marginTop: '20px', background: '#f3f4f6', padding: '10px' }}>{status}</pre>
      <footer>Built by Rakib for Walrus Haulout 2025</footer>
    </div>
  );
}
