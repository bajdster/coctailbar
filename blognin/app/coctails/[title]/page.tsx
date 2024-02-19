import React from 'react'
import { getCoctailDetails } from '@/lib/coctailDetails'
import Image from 'next/image';

interface PageProps
{
    params: {title: string}
}

const page: React.FC<PageProps> = async ({params}) => {

    const title: string = params.title;
    const searchedTitle: string = title.split("%20").join(" ")
    const coctail = await getCoctailDetails(searchedTitle)
    const content:string = coctail.posts.edges[0].node.content
    const ingredients: string = coctail.posts.edges[0].node.recipe.ingredients

    const editedContent:string = content.replace(/<\/?p>/g, '');
    const editedIngredients = ingredients.split(",").map(ingredient=>
      {
        return <li key={ingredient}>{ingredient}</li>
      })
    const url: string =  coctail.posts.edges[0].node.recipe.image.sourceUrl
    console.log(ingredients)

  return (
    <div className='flex min-h-screen flex-col items-center mt-6'>
      <div className='flex items-center justify-around'>
        <Image src={url} alt={searchedTitle} width={200} height={200}/>
        <div>
          {editedIngredients}
        </div>
      </div>
      <div className='flex w-3/4 text-justify mt-6'>{editedContent}</div>
    </div>
  )
}

export default page