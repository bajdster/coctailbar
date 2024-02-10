'use client'
import React from 'react'

type Coctails = {
    coctailUrl: string,
    coctailTitle: string
}

const Search: React.FC<{coctails: Coctails[]}> = ({coctails}) => {

const coctailTitles:{title:string}[] = coctails.map(coctail=>
    {
        return {title: coctail.coctailTitle}
    })

function searchCoctails()
{

}

  return (
    <div className='w-full h-16 flex items-center justify-center '>
        <form className='w-3/4 h-full flex flex-col items-center justify-center relative bg-slate-500'>
            <div className='w-3/4 h-3/4 lg:w-1/2'>
                <input type='text' className='w-3/4 h-full p-2 rounded-md border-black border-2' onChange={searchCoctails}></input>
                <button className='ml-4 font-kaushan text-sky-600 hover:text-sky-800'>Szukaj</button>

            </div>
            <ul className='bg-white z-20 absolute top-full w-1/2'>
                {coctailTitles.map(title=>
                    {
                        return <li className='p-2 border-2' key={title.title}>{title.title}</li>
                    })}
            </ul>
        </form>

    </div>
  )
}

export default Search