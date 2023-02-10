import * as React from 'react';
import {ChangeEvent, useCallback, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {Route, HashRouter, Link, Routes} from 'react-router-dom';
import Chooser from './components/Chooser';
import Footer from './components/Footer';
import store from './store';
import {initializeApp} from 'firebase/app';
import {getStorage, ref, uploadString} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCCon3Wo4SMiWssqt085aWufdgWL-PmS9A',

  authDomain: 'lisc-90068.firebaseapp.com',

  projectId: 'lisc-90068',

  storageBucket: 'lisc-90068.appspot.com',

  messagingSenderId: '718080118269',

  appId: '1:718080118269:web:f79898d0f949add5c3dd94',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

console.log(storage.app.name);

const storageRef = ref(storage, 'test.txt');

console.log('LiSc is open source! https://github.com/mpunkenhofer/lisc');

const New = () => <Link to="/new">New</Link>;
const Test = () => <h1>Test</h1>;
const NotFound = () => <p>Route not found.</p>;

const myRequest = new Request('flowers.jpg');

const Post = () => {
  const [value, setValue] = useState('Hi');
  const [title, setTitle] = useState('Title');

  const onSubmit = useCallback(async () => {
    console.log(title, value);
    uploadString(storageRef, value).then(() => {
      console.log('Uploaded a raw string!');
    });
  }, [title, value]);

  return (
    <>
      <h1>Pastebin Test</h1>
      <form onSubmit={onSubmit}>
        <input
          value={title}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setTitle(ev.target.value)
          }
        />
        <textarea
          value={value}
          onChange={(ev: ChangeEvent<HTMLTextAreaElement>) =>
            setValue(ev.target.value)
          }
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<New />} />
      <Route path="/test" element={<Test />} />
      <Route path="/new" element={<Chooser />} />
      <Route path="/post" element={<Post />} />
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

// Demo: How to post to pastebin using their API
// fetch('https://pastebin.com/api/api_post.php', {
//   method: 'POST',
//   //mode: 'no-cors',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     //'Access-Control-Allow-Origin': '*',
//   },
//   body: new URLSearchParams({
//     api_dev_key: '<pastebin api key>',
//     api_option: 'paste',
//     api_paste_name: title,
//     api_paste_code: value,
//     api_paste_expire_date: '10M',
//     api_paste_private: '1',
//   }),
// }).then(response => {
//   response.text().then(json => console.log(json));
// });
