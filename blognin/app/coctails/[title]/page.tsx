import React from 'react'
import { getCoctailDetails } from '@/lib/coctailDetails'

interface PageProps
{
    params: {title: string}
}

const page: React.FC<PageProps> = async ({params}) => {

// console.log(params.title)
    const coctail = await getCoctailDetails('Daiquiri')
    console.log(coctail.posts.edges[0].node.recipe.ingredients)


  return (
    <div>{params.title}</div>
  )
}

export default page