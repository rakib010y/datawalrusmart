'use client';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');

  const handleSell = () => {
    setStatus(`Uploaded to Walrus! CID: walrus://abc123\nNFT Minted on Sui! ID: 0x789\nPrice: ${price} SUI\nReady for sale!`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center', background: '#f4f6f8', minHeight: '100vh' }}>
      <h1 style={{ color: '#1a56db', fontSize: '2.5rem' }}>DataWalrusMart</h1>
      <p style={{ color: '#6b7280' }}>Sell your data as NFT on Sui!</p>

      <button style={{ background: '#4361ee', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', fontSize: '1rem' }}>
        Connect Sui Wallet
      </button>

      <div style={{ margin: '30px 0' }}>
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: 'block', margin: '10px auto' }}
        />
        <input 
          type="number" 
          placeholder="Price in SUI" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: '10px', width: '200px', margin: '10px auto', display: 'block' }}
        />
        <button 
          onClick={handleSell}
          style={{ background: '#38a169', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', fontSize: '1rem' }}
        >
          Sell Data as NFT
        </button>
      </div>

      {status && (
        <pre style={{ background: '#e5e7eb', padding: '15px', borderRadius: '8px', margin: '20px auto', maxWidth: '400px', textAlign: 'left' }}>
          {status}
        </pre>
      )}

      <footer style={{ marginTop: '50px', color: '#9ca3af' }}>
        Built by <strong>Rakib</strong> for <strong>Walrus Haulout 2025</strong>
      </footer>
    </div>
  );
    }
