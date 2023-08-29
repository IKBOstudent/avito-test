import axios from 'axios';
import cors from 'cors';
import express from 'express';
import queryString from 'query-string';
import { z } from 'zod';

import 'dotenv/config';

const envVariables = z.object({
    EXTERNAL_API: z.string(),
});

const ENV = envVariables.parse(process.env);
axios.defaults.baseURL = ENV.EXTERNAL_API;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (_, response) => {
    response.send('server is running...');
});

app.get('/api/games', async (request, response) => {
    try {
        const query = queryString.stringify(request.query);
        const { data } = await axios.get<any[]>(
            `/games${query ? '?' + query : ''}`
        );

        response.status(200).send(data);
    } catch (e) {
        response.status(500).send();
    }
});

app.get('/api/games/:id', async (request, response) => {
    try {
        const { data } = await axios.get<any[]>(
            `/game?id=${request.params.id}`
        );

        response.status(200).send(data);
    } catch (e) {
        response.status(500).send();
    }
});

app.listen(port, () => {
    console.log(`running on port ${port}.`);
});
