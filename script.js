
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];



function weatherInfo() {

    document.querySelector(".weather-info").style.display = "flex";
    document.querySelector(".hr1").style.display = "flex";
    document.querySelector(".hr2").style.display = "flex";



    const cityName = document.querySelector("input").value;
    document.querySelector(".none").style.display = "none";


    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6d756641e34948d4aaea1ef1a9545977&mode=htmls&units=metric`,
        success: function (data) {
            console.log(data);


            if (data.dt < data.sunset) {
              document.querySelector(".weather-info").src= "img/sunny.jpg";
                // color white
            } else {
                console.log("no")
                // orange background
                // color black
            }

            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp > span ").innerHTML = Math.round( data.main.temp);
            document.querySelector(".description").innerHTML =data.weather[0].main;
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);
             weatherType = data.weather[0].icon;
            setIcons();
        },

        error: function (err) {
            console.log(err);
        }
    })





// function weatherDaysInfo() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=6d756641e34948d4aaea1ef1a9545977&units=metric`,

        success: function (data) {
            console.log("223");
            console.log(data.list[0].name)


    // document.querySelector(".none").style.display = "none";

    document.querySelector(".day1").style.display = "flex";
    document.querySelector(".day2").style.display = "flex";
    document.querySelector(".day3").style.display = "flex";
    document.querySelector(".day4").style.display = "flex";
    document.querySelector(".day5").style.display = "flex";

            // if (data.dt < data.sunset) {
            //   document.querySelector(".weather-info").src= "img/sunny.jpg";
            //     // color white
            // } else {
            //     console.log("no")
            //     // orange background
            //     // color black
            // }

            document.querySelector(".city1").innerHTML = data.city.name;
            document.querySelector(".city2").innerHTML = data.city.name;
            document.querySelector(".city3").innerHTML = data.city.name;
            document.querySelector(".city4").innerHTML = data.city.name;
            document.querySelector(".city5").innerHTML = data.city.name;

            document.querySelector(".temp1 > span ").innerHTML = Math.round(data.list[0].main.temp);
            document.querySelector(".temp2 > span ").innerHTML = Math.round(data.list[8].main.temp);
            document.querySelector(".temp3 > span ").innerHTML = Math.round(data.list[16].main.temp);
            document.querySelector(".temp4 > span ").innerHTML = Math.round(data.list[24].main.temp);
            document.querySelector(".temp5  > span ").innerHTML = Math.round(data.list[32].main.temp);

            document.querySelector(".description1").innerHTML = data.list[0].weather[0].main;
            document.querySelector(".description2").innerHTML = data.list[8].weather[0].main;
            document.querySelector(".description3").innerHTML = data.list[16].weather[0].main;
            document.querySelector(".description4").innerHTML = data.list[24].weather[0].main;
            document.querySelector(".description5").innerHTML = data.list[32].weather[0].main;
            document.querySelector(".temp-range1>.max").innerHTML = Math.round(data.list[0].main.temp_max);
            document.querySelector(".temp-range1>.min").innerHTML = Math.round(data.list[0].main.temp_min);
            document.querySelector(".temp-range2>.max").innerHTML = Math.round(data.list[8].main.temp_max);
            document.querySelector(".temp-range2>.min").innerHTML = Math.round(data.list[8].main.temp_min);
            document.querySelector(".temp-range3>.max").innerHTML = Math.round(data.list[16].main.temp_max);
            document.querySelector(".temp-range3>.min").innerHTML = Math.round(data.list[16].main.temp_min);
            document.querySelector(".temp-range4>.max").innerHTML = Math.round(data.list[24].main.temp_max);
            document.querySelector(".temp-range4>.min").innerHTML = Math.round(data.list[24].main.temp_min);
            document.querySelector(".temp-range5>.max").innerHTML = Math.round(data.list[32].main.temp_max);
            document.querySelector(".temp-range5>.min").innerHTML = Math.round(data.list[32].main.temp_min);
                forecastType1 = data.list[0].weather[0].icon;
                forecastType2 = data.list[8].weather[0].icon;
                forecastType3 = data.list[16].weather[0].icon;
                forecastType4 = data.list[24].weather[0].icon;  
                forecastType5 = data.list[32].weather[0].icon;      

            setIcons();
        },

        error: function (err) {
            console.log(err);
        }
    });
}
 function setIcons(){
        if(weatherType =="01d" || weatherType == "01n"){
            document.querySelector(".weatherIcon").src = "img/icons/clear.svg";
        }
        else if(weatherType =="02d" || weatherType == "02n"){
            document.querySelector(".weatherIcon").src = "img/icons/few-clouds.svg";
        }
        else if(weatherType == "03d" || weatherType == "03n"){
            document.querySelector(".weatherIcon").src = "img/icons/cloudy.svg";
        }
        else if(weatherType == "04d" || weatherType == "04n"){
            document.querySelector(".weatherIcon").src = "img/icons/brokken.svg";
        }
        else if(weatherType == "09d" || weatherType == "09n"){
            document.querySelector(".weatherIcon").src = "img/icons/shower-rain.svg";
        }
        else if(weatherType == "10d" || weatherType == "010n"){
            document.querySelector(".weatherIcon").src = "img/icons/rain.svg";
        }
        else if(weatherType == "11d" || weatherType == "11n"){
            document.querySelector(".weatherIcon").src = "img/icons/thunder.svg";
        }
        else if(weatherType == "13d" || weatherType == "13n"){
            document.querySelector(".weatherIcon").src = "img/icons/snow.svg";
        }
        else if(weatherType == "50d" || weatherType == "50n"){
            document.querySelector(".weatherIcon").src = "img/icons/mist.svg";
        }
        if(forecastType1 == "01d" || forecastType1 == "01n"){
            document.querySelector(".weatherIcon1").src = "img/icons/clear.svg";
        }
        else if(forecastType1 == "02d" || forecastType1 == "02n"){
            document.querySelector(".weatherIcon1").src = "img/icons/few-clouds.svg";
        }
        else if(forecastType1 == "03d" || forecastType1 == "03n"){
            document.querySelector(".weatherIcon1").src = "img/icons/cloudy.svg";
        }
        else if(forecastType1 == "04d" || forecastType1 == "04n"){
            document.querySelector(".weatherIcon1").src = "img/icons/brokken.svg";
        }
        else if(forecastType1 == "09d" || forecastType1 == "09n"){
            document.querySelector(".weatherIcon1").src = "img/icons/shower-rain.svg";
        }
        else if(forecastType1 == "10d" || forecastType1 == "10n"){
            document.querySelector(".weatherIcon1").src = "img/icons/rain.svg";
        }
        else if(forecastType1 == "11d" || forecastType1 == "11n"){
            document.querySelector(".weatherIcon1").src = "img/icons/thunder.svg";
        }
        else if(forecastType1 == "13d" || forecastType1 == "13n"){
            document.querySelector(".weatherIcon1").src = "img/icons/snow.svg";
        }
        else if(forecastType1 == "50d" || forecastType1 == "50n"){
            document.querySelector(".weatherIcon1").src = "img/icons/mist.svg";
        }
        //DAY 2
        
    
        if(forecastType2 == "01d" || forecastType2 == "01n"){
            document.querySelector(".weatherIcon2").src = "img/icons/clear.svg";
        }
        else if(forecastType2 == "02d" || forecastType2 == "02n"){
            document.querySelector(".weatherIcon2").src = "img/icons/few-clouds.svg";
        }
        else if(forecastType2 == "03d" || forecastType2 == "03n"){
            document.querySelector(".weatherIcon2").src = "img/icons/cloudy.svg";
        }
        else if(forecastType2 == "04d" || forecastType2 == "04n"){
            document.querySelector(".weatherIcon2").src = "img/icons/brokken.svg";
        }
        else if(forecastType2 == "09d" || forecastType2 == "09n"){
            document.querySelector(".weatherIcon2").src = "img/icons/shower-rain.svg";
        }
        else if(forecastType2 == "10d" || forecastType2 == "10n"){
            document.querySelector(".weatherIcon2").src = "img/icons/rain.svg";
        }
        else if(forecastType2 == "11d" || forecastType2 == "11n"){
            document.querySelector(".weatherIcon2").src = "img/icons/thunder.svg";
        }
        else if(forecastType2 == "13d" || forecastType2 == "13n"){
            document.querySelector(".weatherIcon2").src = "img/icons/snow.svg";
        }
        else if(forecastType2 == "50d" || forecastType2 == "50n"){
            document.querySelector(".weatherIcon2").src = "img/icons/mist.svg";
        }
        //DAY 3
       
        if(forecastType3 == "01d" || forecastType3 == "01n"){
            document.querySelector(".weatherIcon3").src = "img/icons/clear.svg";
        }
        else if(forecastType3 == "02d" || forecastType3 == "02n"){
            document.querySelector(".weatherIcon3").src = "img/icons/few-clouds.svg";
        }
        else if(forecastType3 == "03d" || forecastType3 == "03n"){
            document.querySelector(".weatherIcon3").src = "img/icons/cloudy.svg";
        }
        else if(forecastType3 == "04d" || forecastType3 == "04n"){
            document.querySelector(".weatherIcon3").src = "img/icons/brokken.svg";
        }
        else if(forecastType3 == "09d" || forecastType3 == "09n"){
            document.querySelector(".weatherIcon3").src = "img/icons/shower-rain.svg";
        }
        else if(forecastType3 == "10d" || forecastType3 == "10n"){
            document.querySelector(".weatherIcon3").src = "img/icons/rain.svg";
        }
        else if(forecastType3 == "11d" || forecastType3 == "11n"){
            document.querySelector(".weatherIcon3").src = "img/icons/thunder.svg";
        }
        else if(forecastType3 == "13d" || forecastType3 == "13n"){
            document.querySelector(".weatherIcon3").src = "img/icons/snow.svg";
        }
        else if(forecastType3 == "50d" || forecastType3 == "50n"){
            document.querySelector(".weatherIcon3").src = "img/icons/mist.svg";
        }
        //DAY 4
            
        if(forecastType4 == "01d" || forecastType4 == "01n"){
            document.querySelector(".weatherIcon4").src = "img/icons/clear.svg";
        }
        else if(forecastType4 == "02d" || forecastType4 == "02n"){
            document.querySelector(".weatherIcon4").src = "img/icons/few-clouds.svg";
        }
        else if(forecastType4 == "03d" || forecastType4 == "03n"){
            document.querySelector(".weatherIcon4").src = "img/icons/cloudy.svg";
        }
        else if(forecastType4 == "04d" || forecastType4 == "04n"){
            document.querySelector(".weatherIcon4").src = "img/icons/brokken.svg";
        }
        else if(forecastType4 == "09d" || forecastType4 == "09n"){
            document.querySelector(".weatherIcon4").src = "img/icons/shower-rain.svg";
        }
        else if(forecastType4 == "10d" || forecastType4 == "10n"){
            document.querySelector(".weatherIcon4").src = "img/icons/rain.svg";
        }
        else if(forecastType4 == "11d" || forecastType4 == "11n"){
            document.querySelector(".weatherIcon4").src = "img/icons/thunder.svg";
        }
        else if(forecastType4 == "13d" || forecastType4 == "13n"){
            document.querySelector(".weatherIcon4").src = "img/icons/snow.svg";
        }
        else if(forecastType4 == "50d" || forecastType4 == "50n"){
            document.querySelector(".weatherIcon4").src = "img/icons/mist.svg";
        }
        //DAY 5
           
        if(forecastType5 == "01d" || forecastType5 == "01n"){
            document.querySelector(".weatherIcon5").src = "img/icons/clear.svg";
        }
        else if(forecastType5 == "02d" || forecastType5 == "02n"){
            document.querySelector(".weatherIcon5").src = "img/icons/few-clouds.svg";
        }
        else if(forecastType5 == "03d" || forecastType5 == "03n"){
            document.querySelector(".weatherIcon5").src = "img/icons/cloudy.svg";
        }
        else if(forecastType5 == "04d" || forecastType5 == "04n"){
            document.querySelector(".weatherIcon5").src = "img/icons/brokken.svg";
        }
        else if(forecastType5 == "09d" || forecastType5 == "09n"){
            document.querySelector(".weatherIcon5").src = "img/icons/shower-rain.svg";
        }
        else if(forecastType5 == "10d" || forecastType5 == "10n"){
            document.querySelector(".weatherIcon5").src = "img/icons/rain.svg";
        }
        else if(forecastType5 == "11d" || forecastType5 == "11n"){
            document.querySelector(".weatherIcon5").src = "img/icons/thunder.svg";
        }
        else if(forecastType5 == "13d" || forecastType5 == "13n"){
            document.querySelector(".weatherIcon5").src = "img/icons/snow.svg";
        }
        else if(forecastType5 == "50d" || forecastType5 == "50n"){
            document.querySelector(".weatherIcon5").src = "img/icons/mist.svg";
        }
    }
// }


