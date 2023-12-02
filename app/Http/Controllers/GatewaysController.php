<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GatewaysController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $gateways = \App\Models\Gateways::all();
        return  response()->json(['status' => true, 'allgateways' => $gateways]);
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
        $gateways = \App\Models\Gateways::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json(['status' => true, 'gateway' => $gateways]);
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
        $gateways = \App\Models\Gateways::create([

            'name' => $request->get('name'),
  
            'description' => $request->get('description'),
  
            'price' => $request->get('price'),
  
            'count' => $request->get('count'),
  
          ]);
  
  
          return response()->json(['status' => true, 'gateway' => $gateways]);
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
        $gateways = \App\Models\Gateways::find($id);
        return response()->json(['status' => true, 'gateway' => $gateways]);
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
        $gateways = \App\Models\Gateways::find($id);
        return response()->json(['status' => true, 'gateway' => $gateways]);
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
            'shark_level' => 'required|numeric'
        );
        $validator = Validator::make($request->all(), $rules);

        // process the login
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
            // return Redirect::to('sharks/' . $id . '/edit')
            //     ->withErrors($validator)
            //     ->withInput(Input::except('password'));
        } else {
            // store
            $gateways = \App\Models\Gateways::find($id);
            $gateways->name       = $request::get('name');
            $gateways->email      = $request::get('email');
            $gateways->shark_level = $request::get('shark_level');
            $gateways->save();

            // redirect
            return response()->json(['status' => true, 'message', 'Successfully updated gateway!', 'gateways' => $gateways]);
            // Session::flash('message', 'Successfully updated shark!');
            // return Redirect::to('sharks');
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
        
        // delete
        $gateways = \App\Models\Gateways::find($id);
        $gateways->delete();

        // redirect
        return response()->json(['status' => true, 'message', 'Successfully updated gateway!', 'gateways' => $gateways]);
        // Session::flash('message', 'Successfully deleted the shark!');
        // return Redirect::to('sharks');
    }
}
