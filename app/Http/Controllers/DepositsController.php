<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DepositsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $deposits = \App\Models\Deposits::all();
        return  response()->json(['status' => true, 'alldeposits' => $deposits]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
        $deposits = \App\Models\Deposits::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json(['status' => true, 'deposits' => $deposits]);
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
        $deposits = \App\Models\Deposits::create([

            'name' => $request->get('name'),
  
            'description' => $request->get('description'),
  
            'price' => $request->get('price'),
  
            'count' => $request->get('count'),
  
          ]);
  
  
          return response()->json(['status' => true, 'deposits' => $deposits]);
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
        $deposits = \App\Models\Deposits::find($id);
        return response()->json(['status' => true, 'deposits' => $deposits]);
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
        $deposits = \App\Models\Deposits::find($id);
        return response()->json(['status' => true, 'deposits' => $deposits]);
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
            'name'       => 'required',
            'email'      => 'required|email',
            'name'       => 'required',
            'email'      => 'required|email',
            'shark_level' => 'required|numeric'
        );
        $all = $request->all();
        $validator = Validator::make($all, $rules);

        // process the login
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors(), 'inputs' => $all], 500);
        } elseif(\App\Models\Deposits::find($id)){
            // store
            $deposits = \App\Models\Deposits::find($id);
            $deposits->name       = $request->get('name');
            $deposits->email      = $request->get('email');
            $deposits->shark_level = $request->get('shark_level');
            $deposits->save();

            // redirect
            return response()->json(['status' => true, 'message', 'Successfully updated deposits!', 'deposits' => $deposits]);
        }else{
            return response()->json(['status' => false, 'message' => 'ID not found', 'errors' => $validator->errors(), 'inputs' => $all], 404);
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
        $deposits = \App\Models\Deposits::find($id);
        if($deposits){
        $deposits->delete();
        return response()->json(['status' => true, 'message', 'Successfully deleted deposit!']);
        }else{
        // redirect
        return response()->json(['status' => false, 'message', 'not found!', 'deposit' => $deposits], 404);}
    }
}
