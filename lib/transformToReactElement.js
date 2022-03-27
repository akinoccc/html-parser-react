import React from 'react';
const transformToReactElement = (doms, domTree = []) => {
  const domArr = Array.from(doms);
  domArr.forEach(dom => {
    let type = dom.nodeName.toLowerCase();
    const config = {};
    if (type.match('text')) {
      domTree.push(dom.nodeValue);
      return;
    } else {
      const attrNames = Array.from(dom.attributes || []);
      attrNames.forEach(attr => {
        let { nodeName, value } = attr;
        if (nodeName === 'style') {
          let styleObj = {};
          value.split(';').map(item => {
            if (item.trim().length === 0) {
              return;
            }
            let [key, v] = item.trim().split(':');
            const splitIndex = key.indexOf('-');
            if (splitIndex !== -1) {
              key = key.replace(/\-./, key[splitIndex + 1].toUpperCase());
            }
            let parserV;
            if (v.match('.')) {
              parserV = parseFloat(v);
            } else {
              parserV = parseInt(v);
            }
            if (isNaN(parserV)) {
              styleObj[key] = v;
            } else {
              styleObj[key] = parserV;
            }
          });
          value = styleObj;
        } else {
          const splitIndex = nodeName.indexOf('on');
          if (splitIndex !== -1) {
            let strArr = nodeName.split('');
            strArr[splitIndex + 2] = strArr[splitIndex + 2].toUpperCase();
            nodeName = strArr.join('');
            value = new Function(value);
          }
        }
        config[nodeName] = value;
      });
    }
    config['key'] = Date.now() + Math.random();
    domTree.push(React.createElement(type, config, type === 'img' ? null : []));
    transformToReactElement(
      dom.childNodes,
      domTree[domTree.length - 1].props.children
    );
  });
  return domTree;
};
export default transformToReactElement;
