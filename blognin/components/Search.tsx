'use client'
import React, { useEffect, useState } from 'react'

type Coctails = {
    coctailUrl: string,
    coctailTitle: string
}

const Search: React.FC<{coctails: Coctails[]}> = ({coctails}) => {

const [coctailsTitles, setCoctailsTitles] = useState<{title:string}[]>([])
const [searchingText, setSearchingText] = useState<string>('')
const [coctailsList, setCoctailsList]= useState<{title:string}[]>([])


useEffect(()=>
{
    const coctailTitles:{title:string}[] = coctails.map(coctail=>
        {
            return {title: coctail.coctailTitle}
        })
    setCoctailsTitles(coctailTitles)
},[])

useEffect(()=>
{
    if(searchingText!== '')
    {
        const searchedCoctails = coctailsTitles.filter(coctailName=>
            {
               return coctailName.title.toLowerCase().includes(searchingText.toLowerCase())
            })
        setCoctailsList(searchedCoctails)
    }
    if(searchingText === '')
    {
        setCoctailsList([])
    }

}, [searchingText])


function searchHandler(e:React.ChangeEvent<HTMLInputElement>)
{
    setSearchingText(e.target.value)
}

  return (
    <div className='w-full h-16 flex items-center justify-center '>
        <p>{searchingText}</p>
        <form className='w-3/4 h-full flex flex-col items-center justify-center relative'>
            <div className='w-3/4 h-3/4 lg:w-1/2'>
                <input type='text' className='w-3/4 h-full p-2 rounded-md border-black border-2' onChange={searchHandler}></input>
                <button className='ml-4 font-kaushan text-sky-600 hover:text-sky-800'>Szukaj</button>

            </div>
            <ul className='bg-white z-20 absolute top-full w-1/2'>
                {coctailsList?.map(title=>
                    {
                        return <li className='p-2 border-2' key={title.title}>{title.title}</li>
                    })}
            </ul>
        </form>

    </div>
  )
}

export default Search