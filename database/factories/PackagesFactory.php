<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Packages>
 */
class PackagesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //
            'name' => fake()->realText(),
            'increase' => rand(20, 3100),
            'bonus' => rand(3, 10),
            'status' => fake()->randomElement(['approved', 'pending', 'unapproved']),
            'MIN' => rand(10, 50),
            'MAX' => rand(2000, 15000),
            'duration' => rand(10, 30),
        ];
    }
}
