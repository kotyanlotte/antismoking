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
}
