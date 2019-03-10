import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import linkRoute from './routes/linkRoute';

const app = express()
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api/v1/user', userRoute);
// app.use('api/v1/link', linkRoute);

app.get('/api/v1', (req, res) => res.status(200).send({
    status: 'connection successful',
    message: 'Welcome to LinkBOX!',
  }));
  
  app.use('/api/v1/link', linkRoute);
  app.use('/api/v1/auth', userRoute);
//   app.use('/api/v1/users', userRoutes);
  
  app.use('*', (req, res) => {
    res.status(404).json({ message: 'Page Not Found. Please go to /api/v1 to use our api' });
  });

app.listen(port, () => console.log(`LinkBox is running on http://localhost ${port}`));

export default app;






