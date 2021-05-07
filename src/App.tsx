import React from 'react';
import './App.css';

import Email from './components/Email';
import Sms from './components/Sms';
import Url from './components/Url';

import HelloWorld9 from './components/HelloWorld9';

const App: React.FC = () => {
  return (
    <div className="Container">

      <div className="Column1">
        <Email/>
      </div>
      <div className="Column2">
        <Sms/>
      </div>
      <div className="Column3">
        <Url/>
      </div>
    </div>
  );
}

export default App;