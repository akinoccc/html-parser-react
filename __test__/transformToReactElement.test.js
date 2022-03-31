import transformToHtmlElement from '../lib/transformToHtmlElement';
import transformToReactElement from '../lib/transformToReactElement';
import htmlData from './testData/html.data';
import propsData from './testData/props.data';

describe('ReactParser', () => {
  it('test single html dom', () => {
    const htmlElements = transformToHtmlElement(htmlData.singleHtmlDom);
    const reactElements = transformToReactElement(htmlElements);
    expect(reactElements).toHaveLength(1);
    expect(reactElements[0].props.children).toHaveLength(1);
    expect(reactElements[0].props.children[0]).toBe('single test');
    expect(reactElements[0].type).toBe('div');
    expect(reactElements).toMatchSnapshot();
  });

  it('test mutiple html dom', () => {
    const htmlElements = transformToHtmlElement(htmlData.mutipleHtmlDom);
    const reactElements = transformToReactElement(htmlElements);
    expect(reactElements).toHaveLength(2);
    expect(reactElements[0].type).toBe('div');
    expect(reactElements[1].type).toBe('div');
    expect(reactElements[0].props.children).toHaveLength(1);
    expect(reactElements[1].props.children).toHaveLength(1);
    expect(reactElements[0].props.children[0].type).toBe('text');
    expect(reactElements[1].props.children[0].type).toBe('text');
    expect(reactElements[0].props.children[0].props.children[0]).toBe('first');
    expect(reactElements[1].props.children[0].props.children[0]).toBe('second');
    expect(reactElements).toMatchSnapshot();
  });

  it('test html attrs', () => {
    const htmlElements = transformToHtmlElement(htmlData.attributes);
    const reactElements = transformToReactElement(htmlElements);
    expect(reactElements).toHaveLength(1);
    expect(reactElements[0].props.id).toBe('test');
    expect(reactElements[0].props.src).toBe('null');
    expect(reactElements[0].props.children).toEqual(null);
    expect(reactElements[0].type).toBe('img');
    expect(reactElements).toMatchSnapshot();
  });

  it('test binding function', () => {
    const htmlElements = transformToHtmlElement(htmlData.bindFunctions);
    const reactElements = transformToReactElement(htmlElements);
    expect(reactElements).toHaveLength(1);
    expect(reactElements[0].props.children).toHaveLength(0);
    expect(typeof reactElements[0].props.onClick).toBe('function');
    expect(reactElements[0].props.onClick()).toBe(1);
    expect(reactElements[0].type).toBe('button');
    expect(reactElements).toMatchSnapshot();
  });

  it('test style', () => {
    const htmlElements = transformToHtmlElement(htmlData.style);
    const reactElements = transformToReactElement(htmlElements);
    expect(reactElements).toHaveLength(1);
    expect(reactElements[0].props.children).toHaveLength(0);
    expect(reactElements[0].props.style).toEqual({
      weight: 10,
      height: 5.5,
      marginLeft: 10,
      color: '#ccc',
      fontWeight: 700
    });
    expect(reactElements[0].type).toBe('div');
    expect(reactElements).toMatchSnapshot();
  });

  it('test render data', () => {
    const htmlElements = transformToHtmlElement(
      htmlData.renderData,
      propsData.data
    );
    const reactElements = transformToReactElement(htmlElements);
    expect(reactElements).toHaveLength(1);
    expect(reactElements[0].props.children).toHaveLength(2);
    expect(reactElements[0].props.children[1].props.children).toHaveLength(1);
    expect(reactElements[0].type).toBe('div');
    expect(reactElements[0].props.children[0]).toBe('this is data1');
    expect(reactElements[0].props.children[1].type).toBe('span');
    expect(reactElements[0].props.children[1].props.children[0]).toBe(
      'this is data2'
    );
    expect(reactElements).toMatchSnapshot();
  });

  it('transform function return undefine', () => {
    const htmlElements = transformToHtmlElement(htmlData.singleHtmlDom);
    const reactElements = transformToReactElement(
      htmlElements,
      propsData.option1
    );
    expect(reactElements).toHaveLength(1);
    expect(reactElements[0].props.children).toHaveLength(1);
    expect(reactElements[0].props.children[0]).toBe('single test');
    expect(reactElements[0].type).toBe('div');
    expect(reactElements).toMatchSnapshot();
  });

  it('transform function return null', () => {
    const htmlElements = transformToHtmlElement(htmlData.singleHtmlDom);
    const reactElements = transformToReactElement(
      htmlElements,
      propsData.option2
    );
    expect(reactElements).toHaveLength(0);
    expect(reactElements).toMatchSnapshot();
  });

  it('transform function return react element', () => {
    const htmlElements = transformToHtmlElement(htmlData.singleHtmlDom);
    const reactElements = transformToReactElement(
      htmlElements,
      propsData.option3
    );
    expect(reactElements).toHaveLength(1);
    expect(reactElements[0].props.children).toBe('transform');
    expect(reactElements[0].type).toBe('div');
    expect(reactElements).toMatchSnapshot();
  });
});
