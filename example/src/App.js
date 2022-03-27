import Parser from 'html-parser-react';

function Example() {
  return (
    <div>
      <Parser
        htmlStr={'<h1 style="font-weight: 700">this is a example!</h1>'}
      ></Parser>
    </div>
  );
}

export default Example;
