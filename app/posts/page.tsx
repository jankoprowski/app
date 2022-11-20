import PocketBase from 'pocketbase'
import Link from 'next/link'
import Form from "./createPost"

export default async function  Page({ params }: {
    params: { id: number }
}) {

    const client = new PocketBase('http://127.0.0.1:8090');

    const posts = await client.collection('posts').getFullList(200);

    return (<div>
        {posts.map((elem) => (<div>
                <h2><Link href={`/posts/${elem.id}`}>{elem.title}</Link></h2>
                <main>{elem.body}</main>
            </div>))}            
            <Form></Form>
    </div>
    )
}