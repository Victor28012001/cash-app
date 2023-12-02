<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('users')) {
            Schema::create('users', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('username');
                $table->string('refcode');
                $table->string('refbonus');
                $table->string('address');
                $table->string('avatar');
                $table->string('phone');
                $table->string('country');
                $table->decimal('balance', 8, 2);
                $table->string('email')->unique();
                $table->timestamp('regDate');
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password');
                $table->enum('role', ['user', 'admin'])->default('user');
                $table->enum('status', ['verified', 'unverified'])->default('unverified');
                $table->boolean('is_2f_on')->default(true);
                $table->rememberToken();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
