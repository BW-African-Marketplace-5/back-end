const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const productsRouter = require('../products/products-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
server.use('/api', usersRouter);
server.use('/api', productsRouter)

server.get('/api', (req, res) => {
    res.json({ api: "up"});
});

module.exports = server;