<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/signin', function () {
    return view('welcome'); // your start view
});

Route::get('/signup', function () {
    return view('welcome'); // your start view
});

Route::get('/create', function () {
    return view('welcome'); // your start view
});


Route::post('/user/register','Api\AuthanticationController@store');

Route::get('/categories','Api\CategoryController@index');
Route::post('/create/category','Api\CategoryController@store');
Route::delete('/delete/category/{id}','Api\CategoryController@destroy');
Route::put('/update/category/{id}','Api\CategoryController@update');
Route::get('/fetch/category/{id}','Api\CategoryController@edit');




//Route::view('/{path?}', 'app');