import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { store } from './store/store';
import "antd/dist/antd.css";
import './styles/reset.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)


