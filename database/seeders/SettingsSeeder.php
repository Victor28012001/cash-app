<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Settings;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Settings::factory()->create([
            'siteName' => fake()->name(),
            'siteTitle' => fake()->realText(120, 2),
            'siteEmail' => fake()->unique()->safeEmail(),
            'siteUrl' => fake()->url(),
            'phone' =>  fake()->phoneNumber(),
            'logo' => 'https://placeimg.com/100/100/any?' . rand(1, 100),
            'regBonus' => rand(20, 3100),
            'refBonus' => rand(20, 3100),
            'withdrawLimit' => rand(1000, 200),
            'copyrightYear' => fake()->dateTimeThisYear(),
            ]);
    }
}
