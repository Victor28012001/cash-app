<?php

namespace App\Http\Controllers;

use App\Models\TopTraders;
use Illuminate\Http\Request;

class TopTradersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $TopTraders = TopTraders::all();
        return response()->json(['status' => 200, 'allTopTraders' => $TopTraders]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TopTraders  $topTraders
     * @return \Illuminate\Http\Response
     */
    public function show(TopTraders $topTraders)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TopTraders  $topTraders
     * @return \Illuminate\Http\Response
     */
    public function edit(TopTraders $topTraders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TopTraders  $topTraders
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TopTraders $topTraders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TopTraders  $topTraders
     * @return \Illuminate\Http\Response
     */
    public function destroy(TopTraders $topTraders)
    {
        //
    }
}
