const express= require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const coursedetails = require('./data/coursedetails.json');

app.get('/', (req,res)=>{
    res.send('server running');
})


app.get('/courses', (req, res) => {
    res.send(categories)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(courses);
    }
    else {
        const course = news.filter(n => n.course_id === id);
        res.send(course);
    }
})

app.get('/blogs', (req, res) =>{
    res.send('blogs');
});

// app.get('/news/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedNews = news.find(n => n._id === id);
//     res.send(selectedNews);
// });

app.listen(port, ()=>{
    console.log('euro programming running',port);
})