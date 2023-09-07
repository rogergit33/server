import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express-session';

const app = express();

app.set('trust proxy', 1);

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: false
}));

app.use(cors());

// Configuration to allow the use of images
app.use(express.static(new URL('public', import.meta.url).pathname));

// Routes
import loginRoutes from './src/routes/loginRoutes.js';
// import turnoRoutes from './src/routes/turnoRoutes.js';

app.use(express.json());
app.use(loginRoutes);
// app.use(turnoRoutes);

app.get('/', async (req, res) => {
  res.send('Deu certo');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} http://localhost:${PORT}`);
});