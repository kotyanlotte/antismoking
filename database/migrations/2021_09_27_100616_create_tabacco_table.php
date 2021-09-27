<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTabaccoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tabacco', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->foreignId('fk_user_id');
            $table->unsignedInteger('total_cigarettes')->default(0);
            $table->integer('brain_value')->default(100);
            $table->integer('mental_value')->default(100);
            $table->integer('health_value')->default(100);
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
        Schema::dropIfExists('tabacco');
    }
}
