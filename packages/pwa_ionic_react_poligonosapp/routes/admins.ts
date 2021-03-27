//
// import { logger } from "@firebase/app/dist/packages/app/src/logger";
import path from "node:path";

let express = require('express');
let app = express();
let cors = require('cors');
let logger = require('morgan');
let router = express.Router();

app.use(cors());
app.use(logger('dev'));

/* GET admins listing. */
router.get('/admins', function (req: any, res: { send: (arg0: string) => void; sendFile: (arg0: string) => void; }, next: any) {
    res.send('loading admins ...');
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})

module.exports = router;
