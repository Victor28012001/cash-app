<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gateways>
 */
class GatewaysFactory extends Factory
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
            'paymentMethod' => fake()->realText(),
            'payDetails' => fake()->paragraph(),
            'payIcon' => 'https://placeimg.com/100/100/any?' . rand(1, 100),
        ];
    }
}
