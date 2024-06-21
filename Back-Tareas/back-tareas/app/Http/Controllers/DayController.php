<?php

namespace App\Http\Controllers;

use App\Models\Day;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DayController extends Controller
{

    public function index(){
        $days = Day::all();

        if($days->isEmpty()){
            $data= [
                'message' => "No se Encontraron Días",
                'status' => 404
            ];
            return response()->json($data,404);
        }

        $data = [
            'days'=>$days,
            'status'=>200
        ];

        return response()->json($data,200);
    }


    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'name' => 'required',
        ]);

        if($validator->fails()){
            $data = [
                'message' => 'Error en la validacion de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data,400);
        }

        $days = Day::create([
            'name' => $request->name
        ]);

        if(!$days){
            $data = [
                'message' => "Error al crear",
                'status' => 500
            ];
            return response()->json($data,500);
        }

        $data = [
            'days' => $days,
            'status' => 500
        ];

        return response()->json($data,201);
    }

    public function destroy($id){

        $days = Day::Find($id);

        if(!$days){
            $data = [
                'message' => 'Dia no encontrado',
                'status' => 404
            ];
            return response()->json($data,404);
        }
        $days->delete();

        $data = [
            'message' => 'Estudiante eliminado',
            'status' => 200
        ];

        return response()->json($data,200);
    }
}
