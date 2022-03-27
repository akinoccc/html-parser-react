export default transformToHtmlElement = htmlstr => {
  const dom = document.createElement('div');
  dom.innerHTML = htmlstr;
  return dom.childNodes;
};
