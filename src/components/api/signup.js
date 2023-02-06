const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());


// Connect to the MongoDB instance
mongoose.connect('mongodb+srv://brysongulley25:Brysongulley2@cluster0.lwvn6no.mongodb.net/test', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Define the User schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});

// Create the User model
const User = mongoose.model('users', userSchema);

app.post('/api/signup', (req, res) => {
  const { firstName, lastName, email } = req.body;
  const user = new User({ firstName, lastName, email });
  user.save((err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ message: 'Successfully signed up!' });
  });
});

let port = process.env.PORT || 3000 

app.listen(3000, () => {
  console.log(`Server running on port ${port}`);
});
