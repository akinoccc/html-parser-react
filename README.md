# Html-Parser-React

<div style="display: flex;">
  <img style="margin-right: 10px" src="https://img.shields.io/npm/v/html-parser-react" />
  <img style="margin-right: 10px" src="https://img.shields.io/travis/vkm0303/html-parser-react"/>
  <img style="margin-right: 10px" src="https://img.shields.io/coveralls/github/vkm0303/html-parser-react.svg"/>
  <img style="margin-right: 10px" src="https://img.shields.io/npm/dw/html-parser-react"/>
  <img style="margin-right: 10px" src="https://img.shields.io/github/license/vkm0303/html-parser-react"/>
</div>

## Introduction

you may need to transform html string to react dom, so I develop this parser. you just need transmiting the html string which you want to parse and then you can get a react dom that you can use it as a component.

## Install

```bash
npm i html-parser-react --save
```

## Usage

### Basic

```js
import ReactDOM from 'react-dom';
import Parser from 'html-parser-react';
ReactDom.render(
  <Parser htmlstr={'<h1 style="font-weight: 700;">this is a example!</h1>'} />,
  document.getElementById('root')
);
```

### Render Data

you can use `{dataName}` to render data the same as react and you need to add actual data by props.

```js
import ReactDOM from 'react-dom';
import Parser from 'html-parser-react';
ReactDom.render(
  <Parser
    htmlStr={`
      <h1 style="font-weight: 700">render data example!</h1>
      <span>{content}</span>
    `}
    data={{ content: 'render data' }}
  ></Parser>,
  document.getElementById('root')
);
```

### Transform Function

you can transmit a transform function to parser component, then the parser will parse html dom by your function.

```js
import React from 'react-dom';
import ReactDOM from 'react-dom';
import Parser from 'html-parser-react';
ReactDom.render(
  <Parser
    key='transform'
    htmlStr={`<div>a transform function example</div>`}
    option={{
      transform: () =>
        React.createElement('div', { key: Math.random() }, ['transform'])
    }}
  ></Parser>,
  document.getElementById('root')
);
```

#### Arguments

`node`: the html dom.

`index`: the index of the node in relation to it's parent.

#### ReturnTypes

`null`: stop parsing current node and its child nodes.

`undefined`: if the function does not return anything or returns undefined, then the parser will continue was usual.

`react element`: react elements will be pushed in node tree directly.

## Maintainer

<a href="https://github.com/vkm0303" target="_blank"><img style="width: 40px;height:40px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/64176534?v=4"></img></a>

## Contributing

### fork

fork this project to your repo.

### clone the project

```bash
git clone https://github.com/vkm0303/html-parser-react.git
```

### start

```bash
npm run initial
```

### pull request

when you push your change, you can pull request on github and then I will check your code.

## License

<a style="font-size: 20px" href="/LICENSE">MIT</a>
