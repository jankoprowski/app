 'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const router = useRouter()

    const create = async(event: Event) => {

        event.preventDefault()

        await fetch('http://localhost:8090/api/collections/posts/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'title': title, 'body': body})
        })

        setBody('')
        setTitle('')

        router.refresh();
    }

    return <div>
        <form onSubmit={create}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
            <button>Submit</button>
        </form>
    </div>

}