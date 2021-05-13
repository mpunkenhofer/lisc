import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.log('LiSc is open source! https://github.com/mpunkenhofer/lisc');

const App: React.FunctionComponent = () => (
    <h1>
        Hello, Lisc
    </h1>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root') as HTMLElement
);