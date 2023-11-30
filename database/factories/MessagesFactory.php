<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Messages>
 */
class MessagesFactory extends Factory
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
            'message' => fake()->realText(200, 2),
            'title' => fake()->realText(20, 2),
            'image' => 'https://placeimg.com/100/100/any?' . rand(1, 100),
            'email' => fake()->unique()->safeEmail(),
            'status' => fake()->randomElement(['sent', 'unsent', 'read', 'pending']),
            'date' => fake()->dateTimeBetween('-3 years', now()),
        ];
    }
}
