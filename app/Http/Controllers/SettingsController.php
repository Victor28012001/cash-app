<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $Settings = \App\Models\Settings::all();
        return response()->json(['status' => 200, 'allSettings' => $Settings]);
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
        $Settings = \App\Models\Settings::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json(['status' => true, 'Settings' => $Settings]);
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
        $Settings = \App\Models\Settings::create([

            'name' => $request->get('name'),

            'description' => $request->get('description'),

            'price' => $request->get('price'),

            'count' => $request->get('count'),

        ]);


        return response()->json(['status' => true, 'Settings' => $Settings]);
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
        $setting = \App\Models\Settings::find($id);
        return response()->json(['status' => 200, 'setting' => $setting]);
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
            'siteUrl' => 'required',
            'siteName' => 'required',
            'withdrawLimit' => 'required|numeric',
            'regBonus' => 'required|numeric',
            'refBonus' => 'required|numeric',
            'siteEmail' => 'required|email',
            'phone' => 'required',
            'siteTitle' => 'required',
            'copyrightYear' => 'required',
            'logo' => 'required',
        );
        $all = $request->all();
        $validator = Validator::make($all, $rules);

        // process the login
        if ($validator->fails()) {
            return response()->json(['status' => 500, 'message' => 'fix errors', 'errors' => $validator->errors(), 'packages' => $all], 500);
        } elseif (\App\Models\Settings::find($id)) {
            // store
            $settings = \App\Models\Settings::find($id);
            $settings->siteUrl = $request->get('siteUrl');
            $settings->siteName = $request->get('siteName');
            $settings->withdrawLimit = $request->get('withdrawLimit');
            $settings->regBonus = $request->get('regBonus');
            $settings->refBonus = $request->get('refBonus');
            $settings->siteEmail = $request->get('siteEmail');
            $settings->phone = $request->get('phone');
            $settings->siteTitle = $request->get('siteTitle');
            $settings->copyrightYear = $request->get('copyrightYear');
            $settings->logo = $request->get('logo');
            $settings->save();

            // redirect
            return response()->json(['status' => 200, 'message' => 'Successfully updated settings!', 'settings' => $settings]);
        } else {
            return response()->json(['status' => 404, 'message' => 'ID not found', 'errors' => $validator->errors(), 'settings' => $all], 404);
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
        $setting = \App\Models\Settings::find($id);
        if ($setting) {
            $setting->delete();
            return response()->json(['status' => true, 'message', 'Successfully deleted withdrawal!']);
        } else {
            // redirect
            return response()->json(['status' => false, 'message', 'Successfully updated withdrawals!', 'withdrawals' => $setting], 404);
        }
    }
}
