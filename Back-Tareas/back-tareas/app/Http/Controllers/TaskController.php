<?php

namespace App\Http\Controllers;

use App\Models\Day;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public function store(Request $request, Day $day)
{

    $days = Day::Find($day);

    if(!$days){
         $data = [
            'message' => 'Día no encontrado',
            'status' => 404
        ];
    return response()->json($data,404);
     }

    $validator = Validator::make($request->all(), [
        'title' => 'required|string|max:5',
        'description' => 'nullable|string',
    ]);

    if ($validator->fails()) {
        $data = [
            'message' => 'Error en la validación de datos',
            'errors' => $validator->errors(),
            'status' => 400
        ];
        return response()->json($data, 400);
    }

    $task = new Task([
        'title' => $request->input('title'),
        'description' => $request->input('description'),
    ]);

    $day->tasks()->save($task);

    $data = [
        'message' => 'Task created successfully',
        'task' => $task,
        'status' => 201
    ];

    return response()->json($data, 201);
}
}
