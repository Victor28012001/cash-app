<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TwoFAController;
use App\Http\Controllers\WithdrawalsController;
use App\Http\Controllers\DepositsController;
use App\Http\Controllers\PackagesController;
use App\Http\Controllers\InvestmentsController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\GatewaysController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\UserResourceController;

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

  

Route::get('2fa', [TwoFAController::class, 'index'])->name('2fa.index');

Route::post('2fa', [TwoFAController::class, 'store'])->name('2fa.post');

Route::get('2fa/reset', [TwoFAController::class, 'resend'])->name('2fa.resend');

Route::resource('api/Withdrawals', WithdrawalsController::class);

Route::resource('api/deposits', DepositsController::class);

// Route::resource('api/deposits', DepositsController::class)->only(['index', 'show']);

Route::resource('api/packages', PackagesController::class);

Route::resource('api/investments', InvestmentsController::class);

Route::resource('api/messages', MessagesController::class);

Route::resource('api/gateways', GatewaysController::class);

Route::resource('api/settings', SettingsController::class);

Route::resource('api/users', UserResourceController::class);
