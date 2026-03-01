export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, background: 'black', color: 'white', fontFamily: 'system-ui' }}>
        {children}
      </body>
    </html>
  );
}
