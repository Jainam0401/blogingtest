 "use server"

import { prisma } from "@/lib/prisma"

export async function blogswithImages(){
    const blogs = await prisma.blogs.findMany({
        orderBy:{
            createdAt:"desc"
        },
        take:3,
        select:{
            id:true,
            title:true,
            content:true,
        postedBy:true,
        createdAt:true,
        // tags:true,
        image:true,
            users:{
                select:{
                    name:true,
                    email:true,
                    pfp:true

                }
            }
        },
        

    })
    return blogs
}

export async function blogswithoutImages(){
    const blogs = await prisma.blogs.findMany({
      
        orderBy:{
            createdAt:"desc"
        },
      
        select:{
            id:true,
            title:true,
            content:true,
        postedBy:true,
        createdAt:true,
        tags:true,
        image:false,
        users:{
                select:{
                    name:true,
                    email:true,
                    pfp:true
                }}
        },

    
    })
    return blogs
}