<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('deposits')) {
            Schema::create('deposits', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('email')->unique();
                $table->decimal('amount', 8, 2);
                $table->string('mode');
                $table->enum('status', ['verified', 'unverified'])->default('unverified');
                $table->string('referenceId');
                $table->decimal('referrerPay', 8, 2);
                $table->timestamp('date')->nullable();
                $table->softDeletes();
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
        Schema::dropIfExists('deposits');
    }
};
