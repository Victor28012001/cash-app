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
        if (!Schema::hasTable('settings')) {
            Schema::create('settings', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('siteUrl')->unique();
                $table->string('siteName');
                $table->decimal('withdrawLimit', 8, 2);
                $table->decimal('regBonus', 8, 2);
                $table->decimal('refBonus', 8, 2);
                $table->string('siteEmail')->unique();
                $table->string('phone');
                $table->string('siteTitle');
                $table->timestamp('copyrightYear')->nullable();
                $table->string('logo');
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
        Schema::dropIfExists('seetings');
    }
};
