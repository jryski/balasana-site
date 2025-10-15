import Navigation from '@/components/Navigation'
import './globals.css'

export const metadata = {
  title: 'Balasana - Balance From the Inside Out',
  description: 'Science-backed wellness supplements for mind, body, and spirit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
