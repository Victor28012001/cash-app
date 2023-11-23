<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

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
        $users = [
            [
                "firstname" => "Admin",
                "lastname" => "LAdmin",
                "email" => "admin@ok.com",
                "password" => bcrypt("12345"),
                "role" => "admin"
            ],
            [
                "firstname" => "User",
                "lastname" => "LUser",
                "email" => "",
                "password" => bcrypt("12345"),
                "role" => "user"
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
