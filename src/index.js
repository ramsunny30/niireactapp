import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';

const store = configureStore();
const rootEl = document.getElementById('root');

let render = () => {

    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter>
        <ScrollToTop>
            <ReduxToastr
            position='bottom-right'
            transitionIn='fadeIn'
            tranitionout='fadeOut'
            />
        <App />
        </ScrollToTop>
        </BrowserRouter>
         </Provider>
          ,
          rootEl
          );
};

if (module.hot) {
    module.hot.accept('./app/layout/App.js', () => {
        setTimeout(render);
    })
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
