<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
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
            'role' => 'user',
            'is_2f_on' => true,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
