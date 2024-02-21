const API_URL = 'https://bajdster.cfolks.pl/graphql'

interface CocktailTitle {
    title: string;
  }
  
  interface CocktailEdge {
    node: CocktailTitle;
  }
  
  interface CocktailEdges {
    edges: CocktailEdge[];
  }
  
  interface CocktailsData {
    posts: CocktailEdges;
  }


  async function fetchAPI(query: string): Promise<CocktailsData> {
    const headers = { 'Content-Type': 'application/json' };
    
    const res = await fetch(API_URL as string, {
      method: 'POST',
      headers,
      body: JSON.stringify({query})
    });
  
    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      console.error('error details', query);
      throw new Error('Failed to fetch API');
    }
    return json.data;
  }

  
  export async function getCoctailTitles(): Promise<CocktailsData> {
    const data = await fetchAPI(` 
    {
        posts {
          edges {
            node {
              title
            }
          }
        }
      }`);
  
    return data;
  }
  
  