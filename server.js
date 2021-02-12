const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;

const Project = require('./Backend/Models/Project');

mongoose.connect('mongodb://localhost/Projects',{useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    err ? console.log(`${err} Connection Unsuccesful`) : console.log('Connection successful')
})

app.use(bodyparser.json())

// CORS configuration
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    next();
  });




app.get('/project', (req, res) => {

    Project.find({}).then(project => {
        res.send(project)
    }).catch(err => res.status(404).send('Bad request') )
})

app.get('/project/:id', (req, res) => {

    const id = req.params.id;
    Project.find({id:id}).then(project => {
        res.send(project)
    }).catch(err => res.status(404).send('Bad request') )
})



app.post('/project', (req, res) => {

        let post = new Project({
            id: req.body.id,
            name: req.body.name,
            deadline: req.body.deadline,
            done: req.body.done,
            loveCounts: req.body.loveCounts,
            hateCounts: req.body.hateCounts,
            messages:   [{
            message: req.body.messages[0].message
                        }      
                        ],
            messageCounts: req.body.messageCounts
        })

        post.save().then(post => {
            res.send(post)
            
        }, (e) => {
            res.status(400).send(e)
        }
            );
    });


// update lovecounts
app.patch('/projects/lovecounts/:id', (req, res) => {
    const id = req.params.id;

    Project.findOneAndUpdate({id:id}, {
        loveCounts: req.body.loveCounts
    }).then(project => {
        res.send(project)
    }).catch(err => res.status(404).send('Bad request') )
})

// update hatecounts
app.patch('/projects/hatecounts/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    Project.findOneAndUpdate({id:id},{
        hateCounts: req.body.hateCounts
    }).then(project => {
        res.send(project)
    }).catch(err => res.status(404).send(err.message) )
})

app.delete('/projects/:id', (req, res) => {
    const id = req.params.id;

    Project.deleteOne({id:id}).then(project => {
        res.send(project)
    })
    .catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

