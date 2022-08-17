const logger = require('./config/logger');
const express = require('./config/express');
const app = express();

app.listen(5000, ()=>{
    try{
        logger.info(`[${process.env.NODE_ENV}] API Server Start At Port ${process.env.PORT}`);
    } catch(err){
        console.log(err);
    }
})