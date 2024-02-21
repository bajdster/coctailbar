import React from 'react'
import { getCoctailDetails } from '@/lib/coctailDetails'
import Image from 'next/image';
import Link from 'next/link';
import { getCoctailTitles } from '@/lib/coctailTitles';

interface PageProps
{
    params: {title: string}
}

const page: React.FC<PageProps> = async ({params}) => {

    const titles = (await getCoctailTitles()).posts.edges.map(coctail =>
      {
        return <Link className="text-sky-500" href={`/coctails/${coctail.node.title}`} key={coctail.node.title}>{coctail.node.title}</Link>;
      });

    
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
    <>
    <Link className='bg-sky-600 relative top-8 left-8 p-2 rounded-md hover:bg-sky-700 text-white hover:text-black' href="/coctails">Wróc do listy</Link>
    <div className='flex min-h-screen flex-col items-center mt-6'>
    <h2 className='text-4xl p-8 text-sky-700'>{searchedTitle}</h2>
      <div className='flex items-center justify-around'>
        
        <Image src={url} alt={searchedTitle} width={200} height={200} className="lg:w-[300px] lg:h-auto"/>
        <div>
          <h2 className='text-xl mb-4'>Przygotuj: </h2>
          {editedIngredients}
        </div>
      </div>
      <div className='flex w-1/2 text-justify mt-6 mb-6 flex-col'>
        <h2 className='text-xl mb-4'>Kroki: </h2>
        {editedContent}
      </div>

      <div className='flex w-1/2 text-justify mt-10 mb-6 flex-col'>
        <h2>Wypróbuj inne przepisy:</h2>
        <ul className='flex flex-col mt-2'>
        {titles}
        </ul>
      </div>
    </div>
    </>
  )
}

export default page