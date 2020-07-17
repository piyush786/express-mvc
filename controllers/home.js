var express = require('express');
var UserMdl = require('../models/users');
async function showWorking(req,res) {
    const user = UserMdl.build({ firstname: "Piyush", lastname:'kapoor' }).save().then(() => {
        console.log('the data saved!');
    });
    res.json({'status':'server working'})
}

exports.showWorking = showWorking ;