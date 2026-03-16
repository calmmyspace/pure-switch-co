import './globals.css'

export const metadata = {
  title: 'Pure Switch Co',
  description: 'Premium mechanical keyboard switches',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}