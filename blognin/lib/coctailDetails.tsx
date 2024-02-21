import fetchAPI from "./fetchAPI";

interface Image {
  sourceUrl: string;
}

interface Recipe {
  image: Image;
  ingredients: string;
  title: string;
}

interface PostNode {
  recipe: Recipe;
  content: string
}

interface PostEdge {
  node: PostNode;
}

interface PostsData {
  posts: {
    edges: PostEdge[];
  };
}

export async function getCoctailDetails(title: string): Promise<PostsData> {
  const data = await fetchAPI(`
  {
    posts(where: {title: "${title}"}) {
      edges {
        node {
          recipe {
            title
            ingredients
            image {
              sourceUrl
            }
          }
          content
        }
      }
    }
  }`);
  
  return data;
}
