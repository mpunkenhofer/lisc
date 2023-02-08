import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {Route, HashRouter, Link, Routes} from 'react-router-dom';
import Chooser from './components/Chooser';
import Footer from './components/Footer';
import store from './store';

console.log('LiSc is open source! https://github.com/mpunkenhofer/lisc');

const New = () => <Link to="/new">New</Link>;
const Test = () => <h1>Test</h1>;
const NotFound = () => <p>Route not found.</p>;

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<New />} />
      <Route path="/test" element={<Test />} />
      <Route path="/new" element={<Chooser />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </HashRouter>
);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
