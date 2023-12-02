<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class WithdrawalsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $withdrawals = \App\Models\Withdrawals::all();
        return  response()->json(['status' => true, 'allwithdrawals' => $withdrawals]);
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
        $withdrawals = \App\Models\Withdrawals::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json(['status' => true, 'withdrawals' => $withdrawals]);
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
        $withdrawals = \App\Models\Withdrawals::create([

            'name' => $request->get('name'),
  
            'description' => $request->get('description'),
  
            'price' => $request->get('price'),
  
            'count' => $request->get('count'),
  
          ]);
  
  
          return response()->json(['status' => true, 'withdrawals' => $withdrawals]);
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
        $withdrawals = \App\Models\Withdrawals::find($id);
        return response()->json(['status' => true, 'withdrawals' => $withdrawals]);
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
        $withdrawals = \App\Models\Withdrawals::find($id);
        return response()->json(['status' => true, 'withdrawals' => $withdrawals]);
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
        $all = $request->all();
        $validator = Validator::make($all, $rules);

        // process the login
        if ($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors(), 'inputs' => $all], 500);
        } elseif(\App\Models\Withdrawals::find($id)){
            // store
            $withdrawals = \App\Models\Withdrawals::find($id);
            $withdrawals->name       = $request->get('name');
            $withdrawals->email      = $request->get('email');
            $withdrawals->shark_level = $request->get('shark_level');
            $withdrawals->save();

            // redirect
            return response()->json(['status' => true, 'message', 'Successfully updated withdrawals!', 'withdrawals' => $withdrawals]);
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
        $withdrawals = \App\Models\Withdrawals::find($id);
        if($withdrawals){
        $withdrawals->delete();
        return response()->json(['status' => true, 'message', 'Successfully deleted withdrawal!']);
        }else{
        // redirect
        return response()->json(['status' => false, 'message', 'not found!', 'withdrawals' => $withdrawals], 404);}
    }
}
