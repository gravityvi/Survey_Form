const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/form',formSubmit);
app.get('/all',showAllData);
app.use(express.static('website'));
var server  = app.listen(3000,listening);





/**** Functions *****/

//function just is for reference that server is added.
function listening() 
{
    console.log('server started');
}

//function to get the data and save in local json database
function formSubmit(req,res)
{
    
   let username =  req.body.name;
   let like = req.body.like;
   let suggest = req.body.suggest;
   let data = {
       username: username,
       liking: like,
       suggestion: suggest

   }
   addData(data);
   let resData = {
       msg: 'your response is recorded'
   }
   res.send(resData);
}

//Utility function to add data to the local json database.
function addData(data)
{
    let rawData =  fs.readFileSync('Data.json');
    let fileData =  JSON.parse(rawData);
    let count = fileData.count;
    count++;
    fileData.count = count;
    fileData[count] =data;
    fs.writeFile('Data.json',JSON.stringify(fileData),dataWritten);
}


// function for get request to get all data.
function showAllData(req,res)
{
    console.log('sending data');
    let rawData = fs.readFileSync('Data.json');
    let fileData = JSON.parse(rawData);
    res.send(fileData);
}


//callback function for writing file
function dataWritten()
{
    console.log('Data written to the file successfully');
}
