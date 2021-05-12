//importing types
import { Article } from '../interfaces';

//function utils
export const findFeaturedArticle = (articles: Article[]) => {
  return articles.map(article => {
    //destructuring
    const { urlToImage, title } = article;
    if (urlToImage && title) return article;
  })[0]!;
};

//exporting everything
export * from './seo';