<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InvestmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $investments = \App\Models\Investments::all();
        return response()->json(['status' => 200, 'allinvestments' => $investments]);
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
        $investments = \App\Models\Investments::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json(['status' => true, 'investment' => $investments]);
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
        $investments = \App\Models\Investments::create([

            'name' => $request->get('name'),

            'description' => $request->get('description'),

            'price' => $request->get('price'),

            'count' => $request->get('count'),

        ]);


        return response()->json(['status' => true, 'investment' => $investments]);
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
        $investments = \App\Models\Investments::find($id);
        return response()->json(['status' => 200, 'investment' => $investments]);
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
        $investments = \App\Models\Investments::find($id);
        return response()->json(['status' => 200, 'investment' => $investments]);
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
            'username' => 'required',
            'packageName' => 'required',
            'invested' => 'required|numeric',
            'increase' => 'required|numeric',
            'ROI' => 'required|numeric',
            'investId' => 'required',
        );
        $all = $request->all();
        $validator = Validator::make($all, $rules);

        // process the login
        if ($validator->fails()) {
            return response()->json(['status' => 500, 'message' => 'fix errors', 'errors' => $validator->errors(), 'investments' => $all], 500);
        } elseif (\App\Models\Investments::find($id)) {
            // store
            $investments = \App\Models\Investments::find($id);
            $investments->username = $request->get('username');
            $investments->packageName = $request->get('packageName');
            $investments->increase = $request->get('increase');
            $investments->invested = $request->get('invested');
            $investments->ROI = $request->get('ROI');
            $investments->investId = $request->get('investId');
            $investments->save();

            // redirect
            return response()->json(['status' => 200, 'message' => 'Successfully updated investments!', 'investments' => $investments]);
        } else {
            return response()->json(['status' => 404, 'message' => 'ID not found', 'errors' => $validator->errors(), 'investments' => $all], 404);
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
        $investments = \App\Models\Investments::find($id);
        if($investments){
        $investments->delete();
        return response()->json(['status' => true, 'message' => 'Successfully deleted investment!']);
        }else{
        // redirect
        return response()->json(['status' => false, 'message' => 'Successfully updated investments!', 'investments' => $investments], 404);}
    }
}
