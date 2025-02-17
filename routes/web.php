<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', action: [PostController::class, 'index']);

Route::resource('posts',PostController::class)->except('index');