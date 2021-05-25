import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Chooser from './components/Chooser';
import store from './store';

console.log('LiSc is open source! https://github.com/mpunkenhofer/lisc');

const App: React.FunctionComponent = () => (
    <Chooser/>
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);