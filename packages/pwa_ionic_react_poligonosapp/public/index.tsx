import React, {render} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

console.log('\n firebase gtag dynamic token typescript \n');

import _ from 'lodash';

let printMe = require('./print.ts');

printMe();


try{
    render(<App />, document.getElementById('root'));
	
	serviceWorker.unregister()
	
	if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('SW registered: ', registration)
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError)
            })
    })
}
	
	
}catch(e){
    alert('Erro de inicialização');
}

module.exports = {};

