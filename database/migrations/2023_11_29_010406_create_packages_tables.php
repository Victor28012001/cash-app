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
        if (!Schema::hasTable('packages')) {
            Schema::create('packages', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('name');
                $table->decimal('increase', 8, 2);
                $table->decimal('bonus', 8, 2);
                $table->enum('status', ['approved', 'pending', 'unapproved'])->default('unapproved');
                $table->decimal('MIN', 8, 2);
                $table->decimal('MAX', 8, 2);
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
        Schema::dropIfExists('packages_tables');
    }
};
