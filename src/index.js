/* Challenge example: pop up with cities to show humidity and current temp
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
 
let city = prompt("Enter a city");
city = city.toLowerCase();
if (weather[city]) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let farenheit = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${temperature}°C (${farenheit}°F) in ${city} with a humidity of ${humidity}.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`
  );
}
  */

//**SEE SHECODES PLUS WK 4 HW SANDBOX or "samplehwfile.html" for the code to change the input city and the h1 along with current time**
