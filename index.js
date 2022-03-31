import { useEffect, useState } from 'react/cjs/react.production.min';
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
  const [reactDom, setReactDom] = useState(null);
  useEffect(() => {
    const htmlDom = transformToHtmlElement(htmlStr, data);
    const res = transformToReactElement(htmlDom, option);
    setReactDom(res);
  }, [htmlStr, data]);
  return reactDom;
};

export default Parser;
