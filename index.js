import transformToHtmlElement from './lib/transformToHtmlElement';
import transformToReactElement from './lib/transformToReactElement';

const Parser = ({ htmlStr, data, option }) => {
  const htmlDom = transformToHtmlElement(htmlStr, data);
  const reactDom = transformToReactElement(htmlDom, option);
  return reactDom;
};

export default Parser;
