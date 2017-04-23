import express from 'express';
import bodyParser from 'body-parser';
import storageMiddleware from './middlewares/storageMiddleware';
import routes from './routes';
const port = 1234;
const app = express();

app.enable('etag');
app.use(bodyParser.json());
app.use(storageMiddleware);
app.use(bodyParser.urlencoded({ extended : true }));
routes.init(app);   

app.listen(port, () => console.log(`App: http://localhost:${port}`));