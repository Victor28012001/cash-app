<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Withdrawals extends Model
{
    use HasFactory;

    protected $fillable = [

        'email',
        'address',
        'amount',
        'mode',
        'status',
        'referenceId',
        'date',
     ];
}
