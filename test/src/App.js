import './App.css';
import htmlstrParser from '../../lib/htmlstr-to-react';

function App() {
  const Parser = htmlstrParser(
    `<div style="weight: 10px; margin-left: 10; font-weight:700">
      <div>123</div>
      2334
      <div>444</div>
    </div>`
  );
  return (
    <div id='App'>
      <Parser></Parser>
    </div>
  );
}

export default App;
