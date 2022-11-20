export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <h1>Posts</h1>
        {children}
    </div>
  )
}
