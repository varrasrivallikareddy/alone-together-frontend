export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ 
        margin: 0, 
        background: 'black', 
        color: '#f5f5f5', 
        fontFamily: 'system-ui, sans-serif'
      }}>
        {children}
      </body>
    </html>
  );
}

