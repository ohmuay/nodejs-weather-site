const request = require('postman-request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoib2htdWF5IiwiYSI6ImNrZ3dhb2c4ZzAwbjUyenJzcm1qNnMzZ2gifQ.ivXGlPKBYDRsScJx3gEV7g&limit=1'
    request({url,json:true},(error,{body})=>{
      if(error){
        callback("Unable to connect mapbox servers");
      }else if(body.features.length == 0 || body.message){
        callback(body.message || "No Location found!");
      }else{
        const data = body.features[0]
        callback(undefined,{location:data.place_name,latitute:data.center[1],longtitute:data.center[0]})
      }
    })
  }

module.exports = geocode