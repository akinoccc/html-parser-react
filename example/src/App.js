import React from 'react';
import Parser from '../../index';

function Example() {
  return (
    <div>
      <Parser
        key='renderdata'
        htmlStr={`
          <h1 style="font-weight: 700">this is a example!</h1>
          <span>{content}</span>
        `}
        data={{ content: 'this is data render' }}
      ></Parser>
      <Parser
        key='transform'
        htmlStr={`<div>a transform function example</div>`}
        option={{
          transform: () =>
            React.createElement('div', { key: Math.random() }, ['transform'])
        }}
      ></Parser>
    </div>
  );
}

export default Example;
