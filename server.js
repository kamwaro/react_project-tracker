const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const port = process.env.PORT || 4000;

app.use(bodyparser.json())
app.get('/', (req,res) => {
    res.send('Wassup baby!!');
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})