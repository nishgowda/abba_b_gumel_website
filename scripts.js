let gcases_data = document.getElementById('gcase').innerHTML
console.log(gcases_data)


let gcases_el = document.getElementById('gcase') ;
let gdeaths_el = document.getElementById('gdeath') ;
let ucases_el = document.getElementById('ucase') ;
let udeath_el = document.getElementById('udeath') ;
let lst_update_el = document.getElementById('lst_update') ;

let us_cases = sessionStorage.getItem('us_cases');
let us_deaths = sessionStorage.getItem('us_deaths');
let global_cases = sessionStorage.getItem('global_cases');
let global_deaths = sessionStorage.getItem('global_deaths');
let str = sessionStorage.getItem('lst_update');


if (us_cases && us_deaths  && global_deaths  && global_cases && str) {
  console.log("Found in session storage");
  us_cases=parseInt(us_cases);
  us_cases=us_cases.toLocaleString()
  us_deaths=parseInt(us_deaths);
  us_deaths=us_deaths.toLocaleString()
  global_cases=parseInt(global_cases);
  global_cases=global_cases.toLocaleString()
  global_deaths=parseInt(global_deaths);
  global_deaths=global_deaths.toLocaleString()
  gcases_el.innerHTML=global_cases;
  gdeaths_el.innerHTML=global_deaths;
  ucases_el.innerHTML=us_cases;
  udeath_el.innerHTML=us_deaths;
  console.log(str);
  lst_update_el.innerHTML=str;
} else {

  let request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'https://api.covid19api.com/summary')
  request.send()


  request.onload = function() {
    console.log(request);
    let data = JSON.parse(request.response);
    let countries_data = data.Countries;
    // console.log(countries_data)
    let us_cases = ""
    let us_deaths = ""
    countries_data.forEach(country => {
      // console.log(element));
      if (country.CountryCode=="US"){
        us_cases = country.TotalConfirmed;
        us_deaths = country.TotalDeaths;
      }
    });

    let global_cases = data.Global.TotalConfirmed;
    let global_deaths = data.Global.TotalDeaths;
  //

    if (us_cases && us_deaths && global_deaths && global_cases) {

      sessionStorage.setItem('us_cases',us_cases);
      sessionStorage.setItem('us_deaths',us_deaths);
      sessionStorage.setItem('global_cases',global_cases);
      sessionStorage.setItem('global_deaths',global_deaths);


      us_cases=parseInt(us_cases);
      us_cases=us_cases.toLocaleString()
      us_deaths=parseInt(us_deaths);
      us_deaths=us_deaths.toLocaleString()
      global_cases=parseInt(global_cases);
      global_cases=global_cases.toLocaleString()
      global_deaths=parseInt(global_deaths);
      global_deaths=global_deaths.toLocaleString()
      gcases_el.innerHTML=global_cases;
      gdeaths_el.innerHTML=global_deaths;
      ucases_el.innerHTML=us_cases;
      udeath_el.innerHTML=us_deaths;
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      let dt = mm+'/'+dd+'/'+yyyy;
      let str = "Johns Hopkins University (Last Updated: " +dt+")";
      console.log(str);
      let lst_update_el = document.getElementById('lst_update');
      lst_update_el.innerHTML=str;
      sessionStorage.setItem('lst_update',str);
    }
  }
}
