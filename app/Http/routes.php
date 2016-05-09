<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/api/v1/hotels/{id?}', 'Hotels@index');
Route::post('/api/v1/hotels', 'Hotels@store');
Route::post('/api/v1/hotels/{id}', 'Hotels@update');
Route::delete('/api/v1/hotels/{id}', 'Hotels@destroy');

Route::get('/api/v1/coordinates/{name}', function($name) {
    try {
        $geocode = Geocoder::geocode("$name, Tanzania")->toArray();
        return Response::json($geocode);
    } catch (\Exception $e) {
        echo $e->getMessage();
    }
});