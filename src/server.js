import express from 'express';
import routes from './routes';
const port = 1234;
const app = express();

routes.init(app);

app.listen(port, () => console.log(`App: http://localhost:${port}`));