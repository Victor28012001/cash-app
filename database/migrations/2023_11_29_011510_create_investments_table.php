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
        if (!Schema::hasTable('investments')) {
            Schema::create('investments', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('username')->nullable();
                $table->string('packageName')->nullable();
                $table->decimal('invested', 8, 2)->nullable();
                $table->decimal('increase', 8, 2)->nullable();
                $table->enum('status', ['approved', 'pending', 'unapproved'])->default('unapproved');
                $table->decimal('ROI', 8, 2)->nullable();
                $table->string('investId')->nullable();
                $table->integer('duration')->nullable();
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
        Schema::dropIfExists('investments');
    }
};
