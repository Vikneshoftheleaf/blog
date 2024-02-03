"use server";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase';


import { NextResponse } from "next/server";

export async function POST(request)
{
    const {slug} = await request.json();
    let post;
    const q = query(collection(db, "blog"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      post = (doc.id, " => ", doc.data());
    });
  
    if(post != null)
    {
        return NextResponse.json(post)
    }
    else{
        return NextResponse.json({found:false});
    }
   


  

}