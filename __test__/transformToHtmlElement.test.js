import transformToHtmlElement from '../lib/transformToHtmlElement';
import htmlData from './testData/html.data';
import propsData from './testData/props.data';

describe('ReactParser', () => {
  it('parses html string', () => {
    expect(
      transformToHtmlElement(htmlData.renderData, propsData.data)
    ).toMatchSnapshot();
    expect(transformToHtmlElement(htmlData.singleHtmlDom)).toMatchSnapshot();
  });
});
