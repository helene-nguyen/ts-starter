var _a;
//~ Dotenv
import 'dotenv/config';
//~ Import modules
import express from 'express';
const app = express();
//~ Import Debug
import debug from 'debug';
const logger = debug('EntryPoint');
//^TEST ONE ROUTE FOR TS
app.get('/', (req, res) => {
    res.send('Hello world!');
});
//~ Launch Server
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.listen(PORT, () => {
    logger(`🚀\x1b[1;35m Launch server on http://localhost:${PORT}\x1b[0m`);
});
//# sourceMappingURL=app.js.map