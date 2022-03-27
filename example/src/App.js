import Parser from '../../index';

function Example() {
  return (
    <div>
      <Parser
        htmlStr={`
          <h1 style="font-weight: 700">this is a example!</h1>
          <span>{content}</span>
        `}
        data={{ content: 'this is data render' }}
      ></Parser>
      {}
    </div>
  );
}

export default Example;
