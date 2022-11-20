import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          <Link href="/about">
            About
          </Link> | 
          <Link href="/posts">
            Posts
          </Link>
        </header>
        {children}
        </body>
    </html>
  )
}
