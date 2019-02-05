let express = require('express'),
    app = express(),
    port = 3001


app.get('/api/roster',(req,res)=>{
    let data = {
        name:'Ben Simmons',
        year:'2018-2019'
    }
})



app.listen(port,console.log(`Server is running on port ${port}`))