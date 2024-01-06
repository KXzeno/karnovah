import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import 'dotenv/config';

const app = express();
const dirName = dirname(import.meta.filename);

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(`${dirName}/index.html`);
});

app.post("/", function(req, res){
  console.log(req.body.cityName);
  const apiKey = process.env.SENSITIVE;
  const unit = "imperial";
  const query = req.body.cityName;
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=32.68&lon=-117.08&appid=${apiKey}&units=${unit}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;
  https.get(url, function(response){
    // console.log(response);
    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const obj = {
        name: "KX",
        purpose: "CONQUER",
      }
      console.log(JSON.stringify(obj));
      const temp = weatherData?.main?.temp;
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
      res.write(`<h1>Temperature in ${query} is ${temp} degrees Farenheit.</h1>`);
      res.write("<h2>The weather is currently " + weatherDesc + "</h2>");
      // res.write("<img src=" + imageURL + " width='180' height=\"180\">");
      res.write(`<img src= ${imageURL} width="180" height="180"/>`);
      res.send();
    });
  });
});
// res.send("Works");




app.listen(3000, function() {
  console.log("Running...");
});
