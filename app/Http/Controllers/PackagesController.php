<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PackagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $packages = \App\Models\Packages::all();
        return  response()->json(['status' => 200, 'allpackages' => $packages]);
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
        $packages = \App\Models\Packages::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json(['status' => true, 'packages' => $packages]);
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
        $packages = \App\Models\Packages::create([

            'name' => $request->get('name'),
  
            'description' => $request->get('description'),
  
            'price' => $request->get('price'),
  
            'count' => $request->get('count'),
  
          ]);
  
  
          return response()->json(['status' => true, 'packages' => $packages]);
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
        $packages = \App\Models\Packages::find($id);
        return response()->json(['status' => 200, 'packages' => $packages]);
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
        $packages = \App\Models\Packages::find($id);
        return response()->json(['status' => 200, 'packages' => $packages]);
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
            'increase'      => 'required|numeric',
            'MIN'      => 'required|numeric',
            'MAX'      => 'required|numeric',
            'duration'      => 'required|numeric',
            'bonus' => 'required|numeric'
        );
        $all = $request->all();
        $validator = Validator::make($all, $rules);

        // process the login
        if ($validator->fails()) {
            return response()->json(['status' => 500, 'message' => 'fix errors', 'errors' => $validator->errors(), 'packages' => $all], 500);
        } elseif(\App\Models\Packages::find($id)){
            // store
            $packages = \App\Models\Packages::find($id);
            $packages->name       = $request->get('name');
            $packages->increase = $request->get('increase');
            $packages->MIN       = $request->get('MIN');
            $packages->MAX      = $request->get('MAX');
            $packages->duration = $request->get('duration');
            $packages->bonus = $request->get('bonus');
            $packages->save();

            // redirect
            return response()->json(['status' => 200, 'message' => 'Successfully updated packages!', 'packages' => $packages]);
        }else{
            return response()->json(['status' => 404, 'message' => 'ID not found', 'errors' => $validator->errors(), 'packages' => $all], 404);
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
        $packages = \App\Models\Packages::find($id);
        if($packages){
        $packages->delete();
        return response()->json(['status' => true, 'message', 'Successfully deleted withdrawal!']);
        }else{
        // redirect
        return response()->json(['status' => false, 'message', 'Successfully updated withdrawals!', 'withdrawals' => $packages], 404);}
    }
}
