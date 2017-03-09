/*
 The base component renderer
*/
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
const path = process.env.component;
const Component = require(path).default;

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

// Hot Module Replacement API
console.log(path, 'wtf');
if (module.hot) {
  module.hot.accept(path, render);
}
