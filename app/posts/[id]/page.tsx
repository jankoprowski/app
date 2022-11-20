export default async function Page({ params }: {
    params: { id: string }
}) {

    const resp = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${params.id}`/*, {cache: 'no-store'}*/)
    const post = await resp.json();

    return (<div>
        <h1>Post {post.id}</h1>
        <main>{post.body}</main>
    </div>
    )
}