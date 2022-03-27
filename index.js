import transformToHtmlElement from './lib/transformToHtmlElement';
import transformToReactElement from './lib/transformToReactElement';

const Parser = ({ htmlStr, data }) => {
  const htmlDom = transformToHtmlElement(htmlStr, data);
  const reactDom = transformToReactElement(htmlDom);
  return reactDom;
};

export default Parser;
