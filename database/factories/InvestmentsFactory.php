<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Investments>
 */
class InvestmentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'username' => fake()->name(),
            'packageName' => fake()->randomLetter(),
            'invested' => rand(20, 3100),
            'increase' => rand(5, 30),
            'status' => fake()->randomElement(['approved', 'pending', 'unapproved']),
            'ROI' => rand(20, 3100),
            'investId' => Str::random(10),
        ];
    }
}
