import express = require('express');
import cors = require('cors');
import users = require('./modules/user/')
// import {users, user} from './modules/user/database/index'

const app = express();

app.use(cors())
app.use('/users', users)


app.listen(3333, () => {
  console.log('Back-end started')
});