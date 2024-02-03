// pages/blog/[slug].js

import { redirect } from "next/navigation";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params

  const post = await getData(params.slug)

  // fetch data

  return {
    title: post.title,

  }
}


export async function getData(slug) {
  // Fetch data for the specific post
  const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/getPostData', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(
      {
        slug: slug,
      }
    )
  }

  )

  const data = await res.json();

  console.log(data.found)
  return data;
  

}





const BlogPost = async ({ params }) => {

  const post = await getData(params.slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};


export default BlogPost;
