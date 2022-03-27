import {
  transformToHtmlElement,
  transformToReactElement
} from './lib/htmlstr-to-react';

const Parser = ({ htmlStr }) => {
  const htmlDom = transformToHtmlElement(htmlStr);
  const [reactDom] = transformToReactElement(htmlDom);
  return reactDom;
};

export default Parser;
