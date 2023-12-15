<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\TopTraders;
use Illuminate\Database\Seeder;

class TopTradersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        TopTraders::factory()->count(8)->create();
    }
}
