import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 
export default function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
  return (
    <main className={`${inter.variable} font-mono`}>
      <Component {...pageProps} />
      <Home {...pageProps} />
    </main>
  )
}