import express from 'express';
import https from 'https';

const app = express();

app.get("/", function(req, res){
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=32.68&lon=-117.08&appid=68a923624c4e7817924b18ddd9c41ec6&units=imperial"
  https.get(url, function(response){
    console.log(response);
    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const obj = {
        name: "KX",
        purpose: "CONQUER",
      }
      console.log(JSON.stringify(obj));
      const temp = weatherData.main.temp;
      console.log(temp);
      const weatherDesc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(weatherDesc);
      /*** Use res.write() instead 
      let currTemp = "<h1>Temperature in National City is " + temp + " degrees Farenheit.</h1>";
      let currWeather = "<h2>The weather is currently " + weatherDesc + "</h2>";
      res.send(currTemp + currWeather);
      */
      res.write("<h1>Temperature in National City is " + temp + " degrees Farenheit.</h1>");
      res.write("<h2>The weather is currently " + weatherDesc + "</h2>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
  // res.send("Works");
});





app.listen(3000, function() {
  console.log("Running...");
});
