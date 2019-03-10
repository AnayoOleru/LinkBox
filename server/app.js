import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import linkRoute from './routes/linkRoute';

const app = express()
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/api/v1/user', userRoute);
// app.use('api/v1/link', linkRoute);

app.listen(port, () => console.log(`LinkBox is running on http://localhost ${port}`));






