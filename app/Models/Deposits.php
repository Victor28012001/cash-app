<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deposits extends Model
{
    use HasFactory;

    protected $fillable = [

        'email',
        'amount',
        'mode',
        'status',
        'referenceId',
        'referrerPay',
        'date',
     ];

}
