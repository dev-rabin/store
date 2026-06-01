<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\AuthController;


Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
Route::get('/profile', function (Request $request) {
        return $request->user();
    });
});

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/products', [ProductController::class, 'store']);
Route::get('/categories', [ProductController::class, 'categories']);