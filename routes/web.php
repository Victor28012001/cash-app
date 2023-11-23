<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\UserController;

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

Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '^(?!api).*?');


Route::group(['prefix' => 'api'], function () {
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/register', [RegisterController::class, 'register']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('/logout', [LoginController::class, 'logout']);
        Route::post('/me', [LoginController::class, 'me']);
    });
});

// Route::get('/user', 'PlayerController@index')->name('player')->middleware('player');
// Route::get('/admin', 'AdminController@index')->name('admin')->middleware('admin');

// user protected routes
Route::group(['middleware' => ['auth:sanctum', 'user'], 'prefix' => 'user'], function () {
    Route::get('/user', [UserController::class, 'adminHome'])->name('user');
});

// admin protected routes
Route::group(['middleware' => ['auth:sanctum', 'admin'], 'prefix' => 'admin'], function () {
    Route::get('/admin', [UserController::class, 'userHome'])->name('admin');
});