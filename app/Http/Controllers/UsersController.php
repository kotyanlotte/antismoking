<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function destroy(){
        $user = Auth::user();
        $user->delete();
    }

    public function update(Request $request){
        $user = Auth::user();
        $user->health_value = $request->health_value;
        $user->mental_value = $request->mental_value;
        $user->brain_value = $request->brain_value;
        $user->total_cigarettes = $request->total_cigarettes;
        $user->save();

        return $request->user();
    }
}
