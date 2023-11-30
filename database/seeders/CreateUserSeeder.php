<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class CreateUserSeeder extends Seeder
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
            'username' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' =>  Hash::make('password'), // password
            'remember_token' => Str::random(10),
            'avatar' => 'https://placeimg.com/100/100/any?' . rand(1, 100),
            'address' => fake()->address(),
            'country' => fake()->country(),
            'balance' => rand(20, 3100),
            'regDate' => fake()->dateTimeBetween('1990-01-01', now())->format('d/m/Y'),
            'refcode' => Str::random(10),
            'name' => fake()->name(),
            'status' => fake()->randomElement(['verified', 'unverified']),
            'role' => 'admin',
            'is_2f_on' => true,
            ]);
        User::factory()->count(100)->create();
    }
}
