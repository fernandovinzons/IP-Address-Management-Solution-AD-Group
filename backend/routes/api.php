<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InternetProtocolController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Login Route
Route::post('login', [LoginController::class, 'login'])->middleware("cors");;

Route::middleware(['auth:sanctum'])->group(function() {

    // Internet Protocol Routes
    Route::get('ip', [InternetProtocolController::class, 'index'])->middleware("cors");;
    Route::get('ip/{id}/fetch', [InternetProtocolController::class, 'fetch'])->middleware("cors");;
    Route::post('ip/add', [InternetProtocolController::class, 'add'])->middleware("cors");;
    Route::post('ip/{id}/update', [InternetProtocolController::class, 'update'])->middleware("cors");;

    // Login Controller Route
    Route::post('logout', [LoginController::class, 'logout'])->middleware("cors");;
});



