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
        Schema::create('top_traders', function (Blueprint $table) {
            $table->bigIncrements('id');
                $table->string('firstName');
                $table->string('lastName');
                $table->decimal('winRate', 4, 2);
                $table->decimal('profitShare', 4, 2);
                $table->enum('active', ['active', 'inactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('top_traders');
    }
};
