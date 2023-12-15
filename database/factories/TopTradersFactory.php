<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TopTraders>
 */
class TopTradersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'firstName' => fake()->name(),
            'lastName' => fake()->name(),
            'winRate' => rand(70, 95),
            'profitShare' => rand(10, 20),
            'active' => fake()->randomElement(['active', 'inactive']),
        ];
    }
}
