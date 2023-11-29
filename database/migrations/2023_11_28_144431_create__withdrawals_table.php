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
        if (!Schema::hasTable('_withdrawals')) {
            Schema::create('_withdrawals', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('email')->unique();
                $table->string('address');
                $table->decimal('amount', 8, 2);
                $table->string('mode');
                $table->enum('status', ['verified', 'unverified'])->default('unverified');
                $table->string('referenceId');
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
        Schema::dropIfExists('_withdrawals');
    }
};
