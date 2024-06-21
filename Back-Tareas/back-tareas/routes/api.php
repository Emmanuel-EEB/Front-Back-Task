<?php

use App\Http\Controllers\DayController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Rutas para los Días
Route::get('/days',[DayController::class,'index']);
Route::post('/days',[DayController::class,'store']);
Route::delete('/days/{id}',[DayController::class,'destroy']);

//Rutas para las Tareas
Route::post('/days/{day}/tasks',[TaskController::class,'store']);
