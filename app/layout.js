export const metadata = {
  title: 'MEEU Partners',
  description: 'MEEU Partners',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
