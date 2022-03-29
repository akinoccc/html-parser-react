import transformToHtmlElement from './lib/transformToHtmlElement';
import transformToReactElement from './lib/transformToReactElement';

/**
 * @name: AmsChan
 * @param {string} htmlStr
 * @param {object} data
 * @param {object} option
 * @return {JSX.Element[]} ReactElement[]
 */
const Parser = ({ htmlStr, data, option }) => {
  const htmlDom = transformToHtmlElement(htmlStr, data);
  const reactDom = transformToReactElement(htmlDom, option);
  return reactDom;
};

export default Parser;
