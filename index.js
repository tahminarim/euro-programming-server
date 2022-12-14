const express= require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const coursedetails = require('./data/coursedetails.json');
const coursecard = require('./data/coursedetails.json');

app.get('/', (req,res)=>{
    res.send('server running');
})


app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/coursecard', (req, res) => {
    res.send(coursecard)
});

app.get('/coursedetails', (req, res) => {
    res.send(coursedetails)
});

app.get('/premiumaccess', (req, res) => {
    res.send(coursedetails)
});

app.get('/course/:id', (req, res) => {
    //console.log(req.params.id);
    const id = req.params.id;
    const course = coursedetails.find(n => n.course_id === id);
    res.send(course);
 
})

app.get('/blogs', (req, res) =>{
    res.send('blogs');
});



app.listen(port, ()=>{
    console.log('euro programming API running',port);
})
