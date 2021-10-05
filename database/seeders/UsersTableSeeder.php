<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            "id" => "1",
            "name" => "テストユーザー",
            "email" => "test@test.com",
            "password" => Hash::make('password'),
            "password_confirmation" => Hash::make('password'),
            "total_cigarettes" => "0",
            "brain_value" => "50",
            "mental_value" => "50",
            "health_value" => "50",
            "created_at" => date('Y-m-d H:i:s'),
            "updated_at" => date('Y-m-d H:i:s'),
        ]);
    }
}
