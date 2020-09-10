import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/files', express.static(uploadConfig.directory))

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World App' });
});

app.listen(3333, () => {
    console.log('Server is runnig now on port 3333');
});
