<!doctype html>
<html lang="en" ng-app="tzPoints">
    <head>
        <meta charset="UTF-8">
        <title>tzHotels - Find hotels in Tanzania</title>
        <link rel="stylesheet" href="<?= asset('css/style.css') ?>"> 
        
        <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.css" />
    </head>
    <body>
        <div class="main" ng-view></div>
        
        <script src="http://cdn.leafletjs.com/leaflet-0.7.5/leaflet.js"></script>
        
        <script src="<?= asset('app/lib/angular/angular.min.js') ?>"></script>
        <script src="<?= asset('app/lib/angular/angular-route.min.js') ?>"></script>
        <script src="<?= asset('app/lib/angular/angular-animate.min.js') ?>"></script>

        
        <script src="<?= asset('app/app.js') ?>"></script>
        
        <script src="<?= asset('app/controllers/controllers.js') ?>"></script>


    </body>
</html>