<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Deposits>
 */
class DepositsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'email' => fake()->unique()->safeEmail(),
            'mode' => fake()->word(),
            'amount' => rand(20, 3100),
            'referrerPay' => rand(20, 3100),
            'date' => fake()->dateTimeBetween('-3 years', now()),
            'referenceId' => Str::random(10),
            'status' => fake()->randomElement(['verified', 'unverified']),
        ];
    }
}
