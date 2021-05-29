import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';
import Chooser from './components/Chooser';
import Footer from './components/Footer';
import store from './store';

console.log('LiSc is open source! https://github.com/mpunkenhofer/lisc');

const App: React.FunctionComponent = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/'>
                <Link to='/new'>New</Link>
            </Route>
            <Route path='/test'>
                <h1>Test</h1>
            </Route>
            <Route path='/new'>
                <Chooser/>
            </Route>
            <Route>
                <p>Route not found.</p>
            </Route>
        </Switch>
        <Footer/>
    </HashRouter>
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);