// const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
const API_URL = 'https://bajdster.cfolks.pl/graphql'


interface Image {
    id: string;
    databaseId: number;
    link: string;
    sourceUrl: string;
  }
  
  interface Recipe {
    image: Image;
    ingredients: string[];
    recipetags: { id: string }[];
    title: string
  }
  
  interface PostNode {
    content: string;
    recipe: Recipe;
  }
  
  interface PostEdge {
    node: PostNode;
  }
  
  interface PostsData {
    posts: {
      edges: PostEdge[];
      nodes: { id: string }[];
    };
  }
  

  async function fetchAPI(query: string): Promise<PostsData> {
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
  

  export async function getCoctailThumbnails(): Promise<PostsData> {
    const data = await fetchAPI(` 
    {
        posts {
          edges {
            node {
              recipe {
                title
                image {
                  sourceUrl
                }
              }
            }
          }
        }
      }`);
  
    return data;
  }
  