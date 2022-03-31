import transformToHtmlElement from '../lib/transformToHtmlElement';
import transformToReactElement from '../lib/transformToReactElement';
import htmlData from './testData/html.data';
import propsData from './testData/props.data';

describe('export test', () => {
  it('export transformToHtmlElement', () => {
    expect(typeof transformToHtmlElement).toBe('function');
  });
  it('export transformToReactElement', () => {
    expect(typeof transformToReactElement).toBe('function');
  });
});
