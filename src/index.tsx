import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

console.log('LiSc is open source! https://github.com/mpunkenhofer/lisc');

const App: React.FunctionComponent = () => (
    <h1>
        Hello, Lisc
    </h1>
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);