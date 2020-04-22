const express = require('express');
const app = express();

//return json data

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })

// return json data for id variable

app.get('/users/:id',function(req,res){
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

//bottom lines
app.listen(8000,function(){
    console.log('server is listening');
    }
);