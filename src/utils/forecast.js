const request = require('postman-request')
const forecast = (latitute,longtitute,callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=8d6bdaf2b9814ce7d39d25275717c833&query=${latitute}, ${longtitute}`
    request({url,json:true},(err,{body})=>{
        if(err){
            callback("Unable to connect to Weatherstack servers!")
        }else if(body.error){
            callback(body.error)
        }else{
            callback(undefined,body)
        }
    })

}

module.exports = forecast