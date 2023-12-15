const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/student_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String,
});

const Student = mongoose.model('Student', studentSchema);

app.post('/api/students', async (req, res) => {
    const { name, age, grade } = req.body;
    const newStudent = new Student({ name, age, grade });
    await newStudent.save();
    res.json(newStudent);
});

app.get('/api/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
