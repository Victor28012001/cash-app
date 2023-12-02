<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $messages = \App\Models\Messages::all();
        return  response()->json(['status' => true, 'allmessages' => $messages]);
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
        $messages = \App\Models\Messages::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json(['status' => true, 'messages' => $messages]);
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
        $messages = \App\Models\Messages::create([

            'name' => $request->get('name'),
  
            'description' => $request->get('description'),
  
            'price' => $request->get('price'),
  
            'count' => $request->get('count'),
  
          ]);
  
  
          return response()->json(['status' => true, 'messages' => $messages]);
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
        $messages = \App\Models\Messages::find($id);
        return response()->json(['status' => true, 'messages' => $messages]);
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
        $messages = \App\Models\Messages::find($id);
        return response()->json(['status' => true, 'messages' => $messages]);
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
            $messages = \App\Models\Messages::find($id);
            $messages->name       = $request::get('name');
            $messages->email      = $request::get('email');
            $messages->shark_level = $request::get('shark_level');
            $messages->save();

            // redirect
            return response()->json(['status' => true, 'message', 'Successfully updated messages!', 'messages' => $messages]);
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
        $messages = \App\Models\Messages::find($id);
        $messages->delete();

        // redirect
        return response()->json(['status' => true, 'message', 'Successfully updated messages!', 'messages' => $messages]);
        // Session::flash('message', 'Successfully deleted the shark!');
        // return Redirect::to('sharks');
    }
}
