var morgan = require('morgan');
let React = require('react');
// let = require('react-dom/server');

const express = require('express');

let app = express();

let cors = require('cors');


// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/www/index", (request, response) => {
    return response.render("html/index.html");
});

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const jwtSecret = require('./config/config.ts');

const jwt = require('express-jwt');
import jwt_decode from 'jwt-decode';

app.get(
    '/protected',
    jwt({ secret: jwtSecret, algorithms: ['HS256'] }),
    function (req:Request, res:Response) {
        if (!req.user.admin) return res.sendStatus(401)
      return res.sendStatus(200);
    }
)

let token = jwt;
let decoded = jwt_decode('process.env.LEAFLET_ACCESS_TOKEN');

console.log('token decoded');

/* prints:
 * { foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  }
 */

// decode header by passing in options (useful for when you need `kid` to verify a JWT):
let decodedHeader = jwt_decode('process.env.LEAFLET_ACCESS_TOKEN', {
    header: true,
})
console.log(decodedHeader);

/* prints:
 * { typ: "JWT",
 *   alg: "HS256" }
 */

const jwksRsa = require('jwks-rsa');
const authConfig = require('./src/auth_config.json');

app = express();
app.use(cors);
const config = require('./webpack.config.ts');
const compiler = webpack(config);

app.use(cors());
app.use(morgan('dev'));

// Tell express-RsYNxDW9 to use the webpack-dev-middleware and use the webpack.config.ts
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
)

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('webpack dev middleware listening...');
  console.log('Example app listening on port 3000!\n');
})
