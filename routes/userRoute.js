const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { Sequelize } = require('sequelize');


router.get('/count', async (req,res,next)=>{
    const users = await User.findAll({
        attributes: [
            [Sequelize.fn('COUNT', Sequelize.col('*')), 'total'],
            [Sequelize.fn('COUNT', Sequelize.literal('regdate > curdate()')), 'today'],
        ]
    });
    let result; 

    console.log(users);

    result= {total:users[0].dataValues.total, today:users[0].dataValues.today}

    res.status(200).send(result);
});

module.exports = router;