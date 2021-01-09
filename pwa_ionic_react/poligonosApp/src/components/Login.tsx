import { React } from 'react';
import { render } from 'react-dom'

// const login = require('./routes/login');

function Login(){

    function handleClick(e) {
        e.preventDefault();
        console.log('O link foi clicado.');
      }

    return
         <div>
        <p>Usuário</p>
        <p>Senha</p>
        <button onClick={handleClick}>LOGIN</button>
    </div>;
    
}

export default Login;
