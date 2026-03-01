export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      background: 'black'
    }}>
      <h1 style={{ fontSize: '4rem', margin: 0, color: '#f5f5f5' }}>
        🖤 Alone Together
      </h1>
      <p style={{ fontSize: '1.5rem', margin: '1rem 0', opacity: 0.8 }}>
        "When no one's around, we are."
      </p>
      <a href="/login" style={{
        padding: '1rem 2rem',
        background: '#d4af37',
        color: 'black',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: 'bold'
      }}>
        Start Talking
      </a>
    </main>
  );
}

