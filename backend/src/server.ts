import express from 'express';
import bodyParser from 'body-parser';
import nonprofitRoutes from './routes/nonprofitRoutes';
import foundationRoutes from './routes/foundationRoutes';
import emailRoutes from './routes/emailRoutes';

import cors from 'cors';


const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/nonprofits', nonprofitRoutes);
app.use('/foundations', foundationRoutes);
app.use('/emails', emailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
