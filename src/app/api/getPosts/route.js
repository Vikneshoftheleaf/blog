"use server"

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase';
import { NextResponse } from "next/server";
export async function POST(request)
{

    const postsCollection = collection(db, 'blog');
    const postsQuery = await getDocs(postsCollection);
    const recentPosts = postsQuery.docs.map((post) => ({
      slug: post.data().slug,
      title: post.data().title,
    }));
  
    return NextResponse.json(recentPosts)

}