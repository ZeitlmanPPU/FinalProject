const express = require ('express');
const bodyParser = require('body-parser');
cosnt app = express();
//const port = process.env.port || 4405;
const port = 4005;
const WineriesRouter = require('./routes/Wineries');

app.use(bodyParser.json());
app.use({
    bodyParser.urlencoded
    extend: true,
    })
);

//Get Route
app.get('/', (req, res) =>{
    res.json({'message': ;works});

})

app.listen(port, 0.0.0.0, () => {
    console.log('listening at http://localhost:${port}`)

}));