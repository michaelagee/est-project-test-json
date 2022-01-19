const db = require("./client/public/db.json");
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 1020;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req, res) => res.status(200).send({
    message: "server is running"
}));

app.get('/estimations', (req, res) => {
  res.json(db);
});


const writeTextToFileAsync = async (contentToWrite) => {
    // fs.writeFile('./client/public/db.json', contentToWrite, (err) => {
    //     console.log(contentToWrite);
    //     if(err) {
    //         console.log('error n shit', err)
    //     } else{
    //         console.log('successfully wrote to file');
    //     }
    // });
    
    fs.writeFile('./client/src/data.json', contentToWrite, (err) => {
        console.log(contentToWrite);
        if(err) {
            console.log('error n shit', err)
        } else{
            console.log('successfully wrote to file');
        }
    });
};


app.post('/write', async (req, res) => {
    const requestContent = JSON.stringify({estimations: req.body});
    await writeTextToFileAsync(requestContent)
})


app.use((req, res, next) => res.status(404).send({
    message: "could not find specified route"
}));

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`)
});