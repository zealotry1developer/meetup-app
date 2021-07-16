const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

//connect db
connectDB();

//init Middleware
app.use(express.json({ extended: false }));

//define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// app.get('/', (req, res) => res.send('API running'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
