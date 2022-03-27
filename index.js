import transformToHtmlElement from './lib/transformToHtmlElement';
import transformToReactElement from './lib/transformToHtmlElement';

const Parser = ({ htmlStr }) => {
  const htmlDom = transformToHtmlElement(htmlStr);
  const reactDom = transformToReactElement(htmlDom);
  return reactDom;
};

export default Parser;
