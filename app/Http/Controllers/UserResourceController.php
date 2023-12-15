<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Hash;

class UserResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $users = \App\Models\User::all();
        return  response()->json(['status' => true, 'allusers' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:12'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:4', 'confirmed'],
            'address' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
        }

        //
        $user = \App\Models\User::create([
            'username' => $request->username,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' =>  Hash::make($request->password), // password
            'address' => $request->address,
            'country' => $request->country,
        ]);
        

        return response()->json(['status' => 200, 'user' => $user]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:12'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:4', 'confirmed'],
            'address' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
        }

        //
        $user = \App\Models\User::create([
            'username' => $request->username,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' =>  Hash::make($request->password), // password
            'address' => $request->address,
            'country' => $request->country,
        ]);
        

        return response()->json(['status' => 200,'message' => 'new user created', 'user' => $user]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user = \App\Models\User::find($id);
        return response()->json(['status' => 200, 'user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $user = \App\Models\User::find($id);
        return response()->json(['status' => 200, 'user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        // validate
        // read more on validation at http://laravel.com/docs/validation
        $rules = array(
            'username'       => 'required',
            'email'      => 'required|email',
            'refbonus'      => 'required|numeric',
            'regDate'      => 'required',
            'balance' => 'required|numeric'
        );
        $all = $request->all();
        $validator = Validator::make($all, $rules);

        // process the login
        if ($validator->fails()) {
            return response()->json(['status' => 500, 'message' => 'fix errors', 'errors' => $validator->errors(), 'user' => $all], );
        } elseif(\App\Models\User::find($id)){
            // store
            $user = \App\Models\User::find($id);
            $user->username       = $request->get('username');
            $user->email      = $request->get('email');
            $user->refbonus       = $request->get('refbonus');
            $user->regDate       = $request->get('regDate');
            $user->balance      = $request->get('balance');
            $user->save();

            // redirect
            return response()->json(['status' => 200, 'message' => 'Successfully updated user!', 'users' => $user]);
        }else{
            return response()->json(['status' => 404, 'message' => 'ID not found', 'errors' => $validator->errors(), 'user' => $all], );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $users = \App\Models\User::find($id);
        if($users){
        $users->delete();
        return response()->json(['status' => 200, 'message', 'Successfully deleted user!']);
        }else{
        // redirect
        return response()->json(['status' => 404, 'message', 'not found!', 'user' => $users], );}
    }
}
