import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../src/css/output.css?ver=3';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';
import App from './components/App/App.jsx';
// import registerServiceWorker from './registerServiceWorker';

const fullpageOptions = {
  callbacks: ['onLeave'],
};

const FullpageWrapper = fullpageProps => (<ReactFullpage
  {...fullpageProps}
  render={({ state, fullpageApi }) => {
    return (
      <div>
<App/>
      </div>
    );
  }}
/>);

ReactDOM.render(<FullpageWrapper {...fullpageOptions} />, document.getElementById('root'));
// registerServiceWorker();
