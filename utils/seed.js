const connection = require('../config/connection')
const { User, Thought, Reaction} = require('../models/index')
const { assignUsernames, assignReactions } = require('./data')
const colors = require('colors')
