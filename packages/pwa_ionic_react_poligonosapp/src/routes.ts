// @ts-ignore
let express         = require('express');
let routes          = express.Router();
let userController  = require('./controller/user-controller');
// @ts-ignore
let passport = require('passport');

const morgan = require("morgan");
const appRoute = express();

appRoute.use(express.json());
appRoute.use(express.urlEncoded({ extended: true }));
appRoute.use(morgan("dev"));
 
routes.get('/', (req: any, res: { send: (arg0: string) => any; }) => {
    return res.send('Hello, this is the API!');
});
 
routes.post('/register', userController.registerUser);
routes.post('/login', userController.loginUser);
 
routes.get('/special', passport.authenticate('jwt', { session: false }), (req: { user: { email: any; }; }, res: { json: (arg0: { msg: string; }) => any; }) => {
    return res.json({ msg: `Hey ${req.user.email}! I open at the close.` });
});
 
module.exports = routes;