import './globals.css'

export const metadata = {
  title: 'Pure Switch Co — Zero-Waste Personal Care Guides',
  description: 'Your complete guide to toxin-free, zero-waste personal care routines. Digital guides, recipes, and a community making the switch to sustainable living.',
  keywords: 'zero waste skincare, natural personal care, DIY beauty, sustainable bathroom, plastic free',
  openGraph: {
    title: 'Pure Switch Co — Zero-Waste Personal Care Guides',
    description: 'Actionable guides to switch to zero-waste personal care. No fluff, just results.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream-50 text-sage-900 antialiased">{children}</body>
    </html>
  )
}
