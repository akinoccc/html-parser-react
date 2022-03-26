<div style="display: flex;">
  <img style="margin-right: 10px" src="https://img.shields.io/npm/v/html-parser-react" />
  <img src="https://img.shields.io/github/license/vkm0303/html-parser-react"/>
</div>

## Background

you may need to transform html string to react dom, so I develop this parser. you just need transmiting the html string which you want to parse and then you can get a react dom that you can use it as a component.

## Install

```bash
npm i html-to-react-parser --save
```

## Usage

```js
import ReactDOM from 'react-dom';
import Parser from 'html-to-react-parser';
ReactDom.render(
  <Parser htmlstr={'<div style="font-weight: 700;">this is example</div>'} />,
  document.getElementById('root')
);
```

### Maintainer

<a href="https://github.com/vkm0303" target="_blank"><img style="width: 40px;height:40px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/64176534?v=4"></img></a>

### Contributing

`pendding`

## License

<a style="font-size: 20px" href="/html-parser-react/blob/master/LICENSE">MIT</a>
