import './App.css';
import htmlstrParser from '../../lib/htmlstr-to-react';

function App() {
  const Parser = htmlstrParser(
    `<a href="https://github.com/vkm0303" target="_blank"><img style="width: 40px;height:40px;    border-radius: 50%;" src="https://avatars.githubusercontent.com/u/64176534?v=4"></img></a>`
  );
  return (
    <div id='App'>
      <Parser></Parser>
    </div>
  );
}

export default App;
