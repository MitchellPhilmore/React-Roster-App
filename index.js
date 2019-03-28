let request = require('request')
let cheerio = require('cheerio')
let express = require('express')
let app = express() 
let port = process.env.PORT || 3001
let mongoose = require('mongoose')

// intialize database
let uri = 'mongodb://admin:sief1987@ds153735.mlab.com:53735/roster-data'

// 
let playerData = mongoose.model("rosterData", {
    playerName:String,
    season:String,
    gamesPlayed: String,
    pointsPerGame:String,
    fieldGoalPercentage:String,
    threePointPercentage:String,
    assistPerGame:String,
    totalReboundsPerGame:String,
    twitter:String

})

mongoose.connect(uri).then(() => console.log('Connected')).catch(err => console.log(JSON.stringify(err)))
// Search for player and save reference to page

let urls = [
    {player:'Ben_Simmons', url:'https://www.basketball-reference.com/players/s/simmobe01.html'},
    {player:'Joel_Embiid', url:'https://www.basketball-reference.com/players/e/embiijo01.html'},
    {player:'Tobias_Harris', url:'https://www.basketball-reference.com/players/h/harrito02.html'},
    {player:'TJ_my_Butler', url:'https://www.basketball-reference.com/players/b/butleji01.html'},
    {player:'JJMcconnell', url:'https://www.basketball-reference.com/players/m/mccontj01.html'},
    {player:'Jim_Reddick', url:'https://www.basketball-reference.com/players/r/redicjj01.html'},
    {player:'Zhaire_Smith', url:'https://www.basketball-reference.com/players/s/smithzh01.html'},
    {player:'Boban_Marjanovic', url:'https://www.basketball-reference.com/players/m/marjabo01.html'},
    {player:'Justin_Patton', url:'https://www.basketball-reference.com/players/p/pattoju01.html'},
    {player:'Mike_Scott', url:'https://www.basketball-reference.com/players/s/scottmi01.html'},
    {player:'Furkan_Korkmaz', url:'https://www.basketball-reference.com/players/k/korkmfu01.html'},
    {player:'Amir_Johnson', url:'https://www.basketball-reference.com/players/j/johnsam01.html'},
    {player:'Jonah_Bolden', url:'https://www.basketball-reference.com/players/b/boldejo01.html'},
    {player:'Shake_Milton', url:'https://www.basketball-reference.com/players/m/miltosh01.html'},
    {player:'Johnathon Simmons', url:'https://www.basketball-reference.com/players/s/simmojo02.html'},
 

]
//Clear db before saving
playerData.collection.remove()

urls.forEach(person => {
    getPlayerInfo(person).then(data => data).then(data => {
       
          let stats = new playerData(data)
     
    stats.save().then(data => {
            console.log('Saved!')
        })
        .catch(err => console.log(JSON.stringify(err)))
        })
    })

function getPlayerInfo(url) {

    return new Promise((resolve, reject) => {

        request(url, (error, response, body) => {
            const $ = cheerio.load(body)
            let PlayerData = $('.stats_pullout').text().split("\n") 
            let name = $('h1').text()
            let data = PlayerData.filter(e => e !== "")
            
        
          
            // Get player stats 
            
              let  pointsPerGame = `Points Per Game: ${data[5].replace("PTS","")}`,
                fieldGoalPercentage = `FG" ${data[11].replace('FG%',"")}%`,
                assistPerGame = `Assists Per Game: ${data[10].replace('AST',"")}`,
                totalReboundsPerGame = `Total Rebounds Per Game: ${data[7].replace('TRB',"")}`,
                season = `Season: ${data[1]}`
                threePointPercentage = `3 Point FG: ${data[14].replace('FG3%')}%`,
                gamesPlayed = `Games Played: ${data[3].replace('G',"")}`,
                playerName = name


            let playerPersonal = $  ('.players')
            let results = playerPersonal.find('a').text()

            let twitter = results.split(" ").filter(e => e.includes('Twitter'))
            twitter = twitter.join("").replace('Twitter', "")
            twitter = twitter.replace('Philadelphia', "")


            let playerStats = {
                playerName:name,
                season:season,
                gamesPlayed:gamesPlayed,
                pointsPerGame:pointsPerGame,
                fieldGoalPercentage:fieldGoalPercentage,
                threePointPercentage:threePointPercentage,
                assistPerGame:assistPerGame,
                totalReboundsPerGame:totalReboundsPerGame,
                twitter:twitter
            }
            console.log(playerStats)

            resolve(playerStats)
            reject('Trouble getting data')
        })

    })

}




app.get('/api/roster', (req, res) => {

    playerData.find({},(err,data)=>{
          res.json(data)
        
    })
   

})

app.listen(port, () => console.log(`Server is running on port ${port}`))