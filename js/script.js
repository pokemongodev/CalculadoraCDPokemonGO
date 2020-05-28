//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::                                                                         :::
//:::  This routine calculates the distance between two points (given the     :::
//:::  latitude/longitude of those points). It is being used to calculate     :::
//:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
//:::                                                                         :::
//:::  Definitions:                                                           :::
//:::    South latitudes are negative, east longitudes are positive           :::
//:::                                                                         :::
//:::  Passed to function:                                                    :::
//:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles                                  :::
//:::                                                                         :::
//:::  Worldwide cities and other features databases with latitude longitude  :::
//:::  are available at https://www.geodatasource.com                         :::
//:::                                                                         :::
//:::  For enquiries, please contact sales@geodatasource.com                  :::
//:::                                                                         :::
//:::  Official Web site: https://www.geodatasource.com                       :::
//:::                                                                         :::
//:::               GeoDataSource.com (C) All Rights Reserved 2018            :::
//:::                                                                         :::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    } else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist >= 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344
        }
        if (unit == "N") {
            dist = dist * 0.8684
        }
        return dist;
    }
}

$("#calcular").click(function () {
    var coordenada1 = $("#coordenada1").val();
    var coordenada2 = $("#coordenada2").val();
    var coord1 = coordenada1.split(",");
    var lat1 = coord1[0];
    var lon1 = coord1[1];
    var coord2 = coordenada2.split(",");
    var lat2 = coord2[0];
    var lon2 = coord2[1];
    var resultado = Math.fround(distance(lat1, lon1, lat2, lon2, "K")).toFixed(2);
    $("#zonaresultado").removeClass("d-none") ;
    $("#resultado").css({
        "color": "green",
        "font-weight": "bold"
    });
    switch (true) {
        case (resultado == 0):
        tiempo = 0;
        break;
        case (resultado >= 0 && resultado < 1):
        tiempo = 0;
        break;
        case (resultado >= 1 && resultado < 2):
        tiempo = 1;
        break;
        case (resultado >= 2 && resultado < 3):
        tiempo = 2;
        break;
        case (resultado >= 3 && resultado < 5):
        tiempo = 3;
        break;
        case (resultado >= 5 && resultado < 8):
        tiempo = 4;
        break;
        case (resultado >= 8 && resultado < 10):
        tiempo = 5;
        break;
        case (resultado >= 10 && resultado < 15):
        tiempo = 7;
        break;
        case (resultado >= 10 && resultado < 11):
        tiempo = 9;
        break;
        case (resultado >= 15 && resultado < 20):
        tiempo = 12;
        break;
        case (resultado >= 20 && resultado < 25):
        tiempo = 15;
        break;
        case (resultado >= 25 && resultado < 35):
        tiempo = 17;
        break;
        case (resultado >= 35 && resultado < 40):
        tiempo = 18;
        break;
        case (resultado >= 40 && resultado < 45):
        tiempo = 19;
        break;
        case (resultado >= 45 && resultado < 50):
        tiempo = 19;
        break;
        case (resultado >= 50 && resultado < 60):
        tiempo = 20;
        break;
        case (resultado >= 60 && resultado < 70):
        tiempo = 21;
        break;
        case (resultado >= 70 && resultado < 80):
        tiempo = 23;
        break;
        case (resultado >= 80 && resultado < 90):
        tiempo = 24;
        break;
        case (resultado >= 90 && resultado < 100):
        tiempo = 25;
        break;
        case (resultado >= 100 && resultado < 125):
        tiempo = 26;
        break;
        case (resultado >= 125 && resultado < 150):
        tiempo = 29;
        break;
        case (resultado >= 150 && resultado < 175):
        tiempo = 32;
        break;
        case (resultado >= 175 && resultado < 201):
        tiempo = 34;
        break;
        case (resultado >= 201 && resultado < 250):
        tiempo = 37;
        break;
        case (resultado >= 250 && resultado < 300):
        tiempo = 41;
        break;
        case (resultado >= 300 && resultado < 328):
        tiempo = 46;
        break;
        case (resultado >= 328 && resultado < 350):
        tiempo = 48;
        break;
        case (resultado >= 350 && resultado < 400):
        tiempo = 50;
        break;
        case (resultado >= 400 && resultado < 450):
        tiempo = 54;
        break;
        case (resultado >= 450 && resultado < 500):
        tiempo = 58;
        break;
        case (resultado >= 500 && resultado < 550):
        tiempo = 62;
        break;
        case (resultado >= 550 && resultado < 600):
        tiempo = 66;
        break;
        case (resultado >= 600 && resultado < 650):
        tiempo = 70;
        break;
        case (resultado >= 650 && resultado < 700):
        tiempo = 74;
        break;
        case (resultado >= 700 && resultado < 751):
        tiempo = 77;
        break;
        case (resultado >= 751 && resultado < 802):
        tiempo = 82;
        break;
        case (resultado >= 802 && resultado < 839):
        tiempo = 84;
        break;
        case (resultado >= 839 && resultado < 897):
        tiempo = 88;
        break;
        case (resultado >= 897 && resultado < 900):
        tiempo = 90;
        break;
        case (resultado >= 900 && resultado < 948):
        tiempo = 91;
        break;
        case (resultado >= 948 && resultado < 1007):
        tiempo = 95;
        break;
        case (resultado >= 1007 && resultado < 1020):
        tiempo = 98;
        break;
        case (resultado >= 1020 && resultado < 1100):
        tiempo = 102;
        break;
        case (resultado >= 1100 && resultado < 1180):
        tiempo = 104;
        break;
        case (resultado >= 1180 && resultado < 1200):
        tiempo = 109;
        break;
        case (resultado >= 1200 && resultado < 1221):
        tiempo = 111;
        break;
        case (resultado >= 1221 && resultado < 1300):
        tiempo = 113;
        break;
        case (resultado >= 1300 && resultado < 1344):
        tiempo = 117;
        break;
        case (resultado >= 1344 && resultado < 1345):
        tiempo = 119;
        break;
        case (resultado >= 1345):
        tiempo = 120;
        break;
        default:
        $('#resultado').html('Coordenadas incorrectas!');
    }

    var horas;
    var minutos;
    horas = Math.floor((tiempo % (60 * 24)) / (60));
    minutos = Math.floor((tiempo % (60)) / 1);
    $('#resultado').html("La distancia entre: <span style='color:red'>"+coordenada1+"</span> y <span style='color:red'>"+coordenada2+"</span> es de <span style='color:red'>"+resultado+" KM</span><br>"+
        "el tiempo estimado de cd es: <span style='color:red'>"+("0" + horas).slice(-2) + " horas y " + ("0" + minutos).slice(-2) + " minutos</span>");
}).click(function () {
    window.location.href = "#zonaresultado";
});



$('#extract').click(function() {
    var url = $('input[name=googlemapurl]').val();
    Reg = /^https?\:\/\/(www\.|maps\.)?google(\.[a-z]+){1,2}\/maps\/?\?([^&]+&)*(ll=-?[0-9]{1,2}\.[0-9]+,-?[0-9]{1,2}\.[0-9]+|q=[^&]+)+($|&)/;
    Reg2 = /^https?\:\/\/(www\.|intel\.)?ingress(\.[a-z]+){1,2}\/intel\/?\?([^&]+&)*(ll=-?[0-9]{1,2}\.[0-9]+,-?[0-9]{1,2}\.[0-9]+|q=[^&]+)+($|&)/;
    Reg3 = /@(-?\d+\.\d+),(-?\d+\.\d+),(\d+\.?\d?)+z/;
    var match = url.match(Reg);
    var match2 = url.match(Reg2);
    var match3 = url.match(Reg3);
    if (match || match2 || match3){
        $('input[name=googlemapurl]').val("Yay!");
    }else{
        $('input[name=googlemapurl]').val("nope");
    }
});



$("#borrar").click(function () {
 $("#coordenada1").val("");
 $("#coordenada2").val("");
 $("#googlemapurl").val("");
 location.reload();
 location.href=".";
});