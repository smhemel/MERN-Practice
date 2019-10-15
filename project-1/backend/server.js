const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

const app      = express();
const port     = process.env.PORT || 5000;

const exercises = require('./routes/exercises');
const users = require('./routes/users');

require('dotenv').config();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log("DB Connected"))
.catch(err => console.log(`DB connection error: ${err.message}`));

app.use('/exercises', exercises);
app.use('users', users);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 
