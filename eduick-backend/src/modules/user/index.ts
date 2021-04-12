import express = require('express')

const router = express.Router();

import { users, user } from './database/index'

router.get('/', function( req, res ) {
  res.send(users)
})


router.post('/', function( req, res ) {
  res.send(user)
})

module.exports = router