app.controller('ListController', function($scope, $http, API_URL) {
    $http.get(API_URL + "hotels")
            .success(function(response) {
                $scope.hotels = response;
                $scope.orderBy = 'name';
            });
});

app.controller('DetailsController', function($scope, $http, $routeParams, API_URL) {
    $http.get(API_URL + "hotels/" + $routeParams.hotelId).success(function(data) {
        $scope.hotel = data;

        getCoordinates($scope.hotel, $http, $scope, API_URL);
    });   
});

function getCoordinates(hotel, $http, $scope, API_URL) {
    $http.get(API_URL + "coordinates/" + encodeURI(hotel.name))
            .success(function(response) {
                $scope.latitude = response.latitude;
                $scope.longitude = response.longitude;
                
                initMap($scope.latitude,$scope.longitude,hotel);
            });                 
}

function initMap(latitude, longitude,hotel) {
    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(map);


    L.marker([latitude, longitude]).addTo(map)
            .bindPopup(hotel.name).openPopup();

    var popup = L.popup();

    function onMapClick(e) {
        popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
    }

    map.on('click', onMapClick);
}
