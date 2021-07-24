const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/', require('./routes/users'));
app.use('/', require('./routes/auth'));

app.get('*', (req, res) => {
  res.json({
    msg: 'API deployed visit UI through link',
    link: 'https://adrixus-app.netlify.app/',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
