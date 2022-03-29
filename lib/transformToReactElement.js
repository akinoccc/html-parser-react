import React from 'react';
/**
 * @name: AmsChan
 * @param {HTMLElement} node
 * @param {JSX.Element[]} nodeTree
 * @param {object} option
 * @return {void}
 */
const _parseNode = (node, nodeTree, option) => {
  let type = node.nodeName.toLowerCase();
  const config = {};
  if (type.match('text')) {
    nodeTree.push(node.nodeValue);
    return;
  } else {
    const attrNames = Array.from(node.attributes || []);
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
  nodeTree.push(React.createElement(type, config, type === 'img' ? null : []));
  transformToReactElement(
    node.childNodes,
    option,
    nodeTree[nodeTree.length - 1].props.children
  );
};

/**
 * @name: AmsChan
 * @param {HTMLElement[]} nodes
 * @param {object} option
 * @param {JSX.Element[]} nodeTree
 * @return {JSX.Element[]} nodeTree
 */
const transformToReactElement = (nodes, option = {}, nodeTree = []) => {
  const nodeArr = Array.from(nodes);
  nodeArr.forEach((node, index) => {
    if (option.transform) {
      const ret = option.transform(node, index);
      if (ret === null) {
        return;
      } else if (ret === undefined) {
        _parseNode(node, nodeTree, option);
      } else {
        nodeTree.push(ret);
      }
    } else {
      _parseNode(node, nodeTree, option);
    }
  });
  return nodeTree;
};
export default transformToReactElement;
