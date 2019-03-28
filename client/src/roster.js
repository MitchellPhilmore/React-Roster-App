

let roster = {
    players:[
        {
            name:'Ben Simmons',
            position: 'PG',
            team:'Philadelphia 76ers',
            jerseyNumber:'#25',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/simmobe01.jpg'
            
        },
        {
            name:"Joel Embiid",
            position: 'C',
            team:'Philadelphia 76ers',
            jerseyNumber:'#21',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/embiijo01.jpg'
        },
        {
            name:'Jimmy Butler',
            position: 'SF',
            team:'Philadelphia 76ers',
            jerseyNumber:'#23',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/butleji01.jpg'
        },
        {
            name:'Tobias Harris',
            position: 'SF/PF',
            team:'Philadelphia 76ers',
            jerseyNumber:'#34',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201902061/images/players/harrito02.jpg'
        },
        {
            name:"J.J. Redick",
            position: 'SG',
            team:'Philadelphia 76ers',
            jerseyNumber:'#17',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/redicjj01.jpg'
        },
        {
            name:'Jonathon Simmons',
            position: 'SG',
            team:'Philadelphia 76ers',
            jerseyNumber:'#17',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201902061/images/players/simmojo02.jpg'
        },
        {
            name:'T.J. McConnell',
            position: 'PG',
            team:'Philadelphia 76ers',
            jerseyNumber:'#12',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/mccontj01.jpg'
        },
        {
            name:'Jonah Bolden',
            position: 'PF',
            team:'Philadelphia 76ers',
            jerseyNumber:'#43',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/boldejo01.jpg'
        },
        {
            name:'Mike Scott',
            position: 'PF',
            team:'Philadelphia 76ers',
            jerseyNumber:'#30',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201902061/images/players/scottmi01.jpg'
        },
        {
            name:'Amir Johnson',
            position: 'C',
            team:'Philadelphia 76ers',
            jerseyNumber:'#25',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/johnsam01.jpg'
        },
        {
            name:'Zhaire Smith',
            position: 'SG',
            team:'Philadelphia 76ers',
            jerseyNumber:'NA',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/smithzh01.jpg'
        },
        {
            name:'Furkan Korkmaz',
            position: 'SG',
            team:'Philadelphia 76ers',
            jerseyNumber:'#30',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/korkmfu01.jpg'
        },
        {
            name:'Boban Marjanovic',
            position: 'C',
            team:'Philadelphia 76ers',
            jerseyNumber:'#51',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201902061/images/players/marjabo01.jpg'
        },
        {
            name:'Shake Milton',
            position: 'SG',
            team:'Philadelphia 76ers',
            jerseyNumber:'#18',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/miltosh01.jpg'
        },
       
        {
            name:'Justin Patton',
            position: 'C',
            team:'Philadelphia 76ers',
            jerseyNumber:'#24',
            image:'https://d2cwpp38twqe55.cloudfront.net/req/201901141/images/players/pattoju01.jpg'
        },
    ]
}
roster.players = roster.players.sort((a, b) => (a.name > b.name) ? 1 : -1)


 let getStats = async ()=>{
     let response = await fetch('api/roster')
     let data = await response.json()
    await data.sort((a,b)=>(a.playerName > b.playerName )?1:-1)
    await  data.forEach((player,i)=>{
       
            roster.players[i]['gamesPlayed'] = player.gamesPlayed
            roster.players[i]['season'] = player.season
            roster.players[i]['pointsPerGame'] = player.pointsPerGame
            roster.players[i]['fieldGoalPercentage'] = player.fieldGoalPercentage
            roster.players[i]['threePointPercentage'] = player.threePointPercentage
            roster.players[i]['assistPerGame'] = player.assistPerGame
            roster.players[i]['totalReboundsPerGame'] = player.totalReboundsPerGame
            roster.players[i]['twitter'] = player.twitter

     })
     console.log(roster.players)
     console.log('---------------')
     console.log(data)
 }
getStats()

export default roster