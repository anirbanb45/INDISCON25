import './global.css'
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'IEEE-INDISCON',
  description: 'ieeeindiscon.org',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {/* Main content container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}