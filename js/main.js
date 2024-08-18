let keyApi = "367ffd4724734ba38df103928232004" ;
let token ="pk.8cc0f931d56091006b8e780ca0af3da9";
let result ,     city,      myReq ,     myRes ,     x ,     y,     res ,     html ="",     api;
let element = document.querySelector('.data')
let Day =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let  day = new Date();

let myEle = document.querySelector(".news")
let currentCity;

getCoordinates()
// displayData()
function myCity(){
    getCoordinates()
     api = `http://api.weatherapi.com/v1/forecast.json?key=${keyApi}&q=${city||currentCity||"cairo"}&days=7` ;

(async function(){
res = await fetch(api);
result = await res.json();

for(let i = 0; i < result.forecast.forecastday.length;i++){
   
     
html = `<div class="container rounded-2 text-white">
<div class="row">
  <div class="col-md-4 rounded-3 opacity-75">
    <div class="card p-3 h-100">
      <div class="head mb-3 d-flex justify-content-between"><h5>${Day[day.getDay()]}</h5><h5>${day.getDate() + month[day.getMonth()]}</h5></div>
      <div class="body"><h5 class='my-2'>${result.location.name}</h5>
      <div class="d-flex m-3"><h3 class='my-2 d-inline-block'>${result.current.temp_c}℃</h3><img class="h-100" src="https:${result.current.condition.icon}"></div><h5 class='mb-5' >${result.current.condition.text}</h5></div>
      <div class="foot d-flex justify-content-evenly"><h5><i class="fa-solid fa-umbrella"></i>${result.current.gust_kph}</h5><h5><i class="fa-solid fa-wind"></i>${result.current.humidity}</h5><h5><i class="fa-regular fa-compass"></i>${result.current.wind_dir}</h5></div>
    </div>
  </div>
  <div class="col-md-4 rounded-3 opacity-75">
    <div class="card p-3 text-center h-100">
      <div class="head mb-3"><h5>${Day[day.getDay()+1]}</h5></div>
      <div class="body">
      <div class="d-flex justify-content-center"><h3 class='my-2'>${result.forecast.forecastday[i].day.maxtemp_c}℃</h3>
      <img class="h-100" src="https:${result.forecast.forecastday[i].day.condition.icon}"></div><h5>${result.forecast.forecastday[i].day.mintemp_c}℃</h5><h5 class="mt-5">${result.forecast.forecastday[i].day.condition.text}</h5></div>
      

    </div>
  </div>
  <div class="col-md-4 rounded-3 opacity-75">
    <div class="card p-3 text-center h-100">
    <div class="head mb-3"><h5>${Day[day.getDay()+2]}</h5></div>
    <div class="body"><div class="d-flex justify-content-center"><h3 class='my-2'>${result.forecast.forecastday[i+1]?.day.maxtemp_c}℃</h3>
    <img class="h-100" src="https:${result.forecast.forecastday[i+ 1]?.day.condition.icon}"></div><h5>${result.forecast.forecastday[i+1]?.day.mintemp_c}℃</h5><h5 class="mt-5">${result.forecast.forecastday[i].day.condition.text}</h5></div>
    </div>
  </div>
</div>

</div>`
element.innerHTML = html ;
}
})()

     myEle.innerHTML = `<h1 class="">Search in input search </h1>`
}

async function getData(){
     myReq = await fetch(`http://api.weatherapi.com/v1/Sport.json?key=${keyApi}&q=lond`)
     myRes = await myReq.json()
    console.log(myRes);
    // displayData(myRes)
}


function displayData(link){
    let myHtml ="";
    for (let index = 0; index < link.football.length; index++) {
        

        myHtml +=`<div class="col-md-4">
            <div class="card p-3">
              <h2>${link.football[index].stadium}</h2>
              <h3>${link.football[index].start}</h3>
              <h4>${link.football[index].country}</h4>
              <h4>${link.football[index].match}</h4>
            </div>
            
          </div> `
        
    }
    myEle.innerHTML = myHtml;
}

function search(city ='cairo' ){
    
let api = `http://api.weatherapi.com/v1/forecast.json?key=${keyApi}&q=${city||currentCity||cairo}&days=3` ;

(async function(){
res =await fetch(api);
result = await res.json();

for(let i = 0; i < result.forecast.forecastday.length;i++){
   
     
html = `<div class="container rounded-2 text-white">
<div class="row">
  <div class="col-md-4 rounded-3 opacity-75">
    <div class="card p-3 h-100">
      <div class="head mb-3 d-flex justify-content-between"><h5>${Day[day.getDay()]}</h5><h5>${day.getDate() + month[day.getMonth()]}</h5></div>
      <div class="body"><h5 class='my-2'>${result.location.name}</h5>
      <div class="d-flex m-3"><h3 class='my-2 d-inline-block'>${result.current.temp_c}℃</h3><img class="h-100" src="https:${result.current.condition.icon}"></div><h5 class='mb-5' >${result.current.condition.text}</h5></div>
      <div class="foot d-flex justify-content-evenly"><h5><i class="fa-solid fa-umbrella"></i>${result.current.gust_kph}</h5><h5><i class="fa-solid fa-wind"></i>${result.current.humidity}</h5><h5><i class="fa-regular fa-compass"></i>${result.current.wind_dir}</h5></div>

    </div>
  </div>
  <div class="col-md-4 rounded-3 opacity-75">
    <div class="card p-3 text-center h-100">
      <div class="head mb-3"><h5>${Day[day.getDay()+1]}</h5></div>
      <div class="body">
      <div class="d-flex justify-content-center"><h3 class='my-2'>${result.forecast.forecastday[i].day.maxtemp_c}℃</h3>
      <img class="h-100" src="https:${result.forecast.forecastday[i].day.condition.icon}"></div><h5>${result.forecast.forecastday[i].day.mintemp_c}℃</h5><h5 class="mt-5">${result.forecast.forecastday[i].day.condition.text}</h5></div>
      

    </div>
  </div>
  <div class="col-md-4 rounded-3 opacity-75">
    <div class="card p-3 text-center h-100">
    <div class="head mb-3"><h5>${Day[day.getDay()+2]}</h5></div>
    <div class="body"><div class="d-flex justify-content-center"><h3 class='my-2'>${result.forecast.forecastday[i+1].day.maxtemp_c}℃</h3>
    <img class="h-100" src="https:${result.forecast.forecastday[i+1].day.condition.icon}"></div><h5>${result.forecast.forecastday[i].day.mintemp_c}℃</h5><h5 class="mt-5">${result.forecast.forecastday[i].day.condition.text}</h5></div>
      
    


    </div>
  </div>
</div>
</div>`
element.innerHTML = html ;
}
})()

}


// Step 1: Get user coordinates
function getCoordinates() {
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) {
		var crd = pos.coords;
		var lat = crd.latitude.toString();
		var lng = crd.longitude.toString();
		var coordinates = [lat, lng];
		getCity(coordinates);
		return;

	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);
}

// Step 2: Get city name
function getCity(coordinates) {
	var lat = coordinates[0];
	var lng = coordinates[1];
       (async function(){
        let r = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.8cc0f931d56091006b8e780ca0af3da9&lat=${lat}&lon=${lng}&format=json`)
        let p = await r.json();
        currentCity = p.address.city || p.address.state;
         console.log(currentCity);

        
    })()
	
}



