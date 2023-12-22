<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::factory()->create([
            'username' => fake()->userName(),
            'phone' => str_replace('+', '', fake()->unique()->e164PhoneNumber()),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' =>  Hash::make('password'), // password
            'remember_token' => Str::random(10),
            'avatar' => fake()->imageUrl(),
            'address' => fake()->address(),
            'country' => fake()->country(),
            'balance' => rand(20, 3100),
            'regDate' => fake()->dateTimeBetween('-3 years', now()),
            'refcode' => Str::random(10),
            'refbonus' => rand(20, 3100),
            'status' => fake()->randomElement(['verified', 'unverified']),
            'role' => 'admin',
            'is_2f_on' => true,
            ]);
        User::factory()->count(100)->create();
    }
}
