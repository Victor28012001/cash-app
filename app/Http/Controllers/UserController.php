<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function __construct(){
        
    }

    protected function adminHome()
    {
        return view('admin');
    }

    protected function userHome()
    {
        return view('user');
    }
}
