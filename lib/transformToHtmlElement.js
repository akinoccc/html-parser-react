export default (htmlstr, data = {}) => {
  const dataKeys = htmlstr.match(/\{.*\}/g) || [];
  dataKeys.forEach(target => {
    const key = target.replace(/[\{\}]/g, '');
    htmlstr = htmlstr.replace(target, data[key]);
  });
  const dom = document.createElement('div');
  dom.innerHTML = htmlstr;
  return dom.childNodes;
};
