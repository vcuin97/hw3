var submitButton = $("#submitButton");

var cityName =$("#q");
$("#backbackground").hide();

submitButton.on("click",function(){

    $("#results").empty();

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        dataType: "jsonp",
        data: {
            "q":$("#q").val(),
            "appid":"9442adb898feb6779e879fa220a4d602"
        },
        success: function(data) {

            $("#backbackground").show();

            var src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon + "@2x.png"
            var temperature = ((data.main.temp - 273.15)*9/5+32);

            $("#results").html("<h4>" + data.name + "</h4>");
            $("#results").append(data.weather[0].description);
            $("#results").append("<img src=\""+src+"\">");
            $("#results").append(temperature.toFixed(2) + " &#176; F");
       
        },
        
        error: function(error) {
            $("#backbackground").hide();
            console.log(error);
            console.log("Didn't work");
        }
    });


});