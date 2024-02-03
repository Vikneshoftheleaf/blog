import Link from 'next/link';


async function getData() {
  // Fetch recent blog posts

  const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/getPosts',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
  })

  const data = await res.json()

  return data;
}

export const metadata = {
  title: 'Home',
  description: 'This is My Blog',
}

export default async function Home() {

  const rec = await getData();
  return (
    <>
        <h1 className="text-center text-4xl font-extrabold">WelCome To My Blog</h1>

        <h1 className="text-center text-xl font-bold">Recent Blog</h1>
    <ol>
        {rec.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} >{post.title}</Link>
          </li>
        ))}
      </ol>
    </>
    
    
  )
}


