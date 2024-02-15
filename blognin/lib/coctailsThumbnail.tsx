// const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
import fetchAPI from "./fetchAPI";


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
  