const express = require('express');
const cors = require('cors');

const sequelize = require('./UTIL/connectToDB');
// const Date = require('./MODELS/Dates')
const Attendence = require('./MODELS/Attendence')
const app = express();

app.use(cors());
app.use(express.json());

const Routes = require('./ROUTES/Attendence');

app.use(Routes);



sequelize.sync().then(result => {
    // console.log(result);
    app.listen(4343);
})
    .catch(err => {
        console.log(err);
    })