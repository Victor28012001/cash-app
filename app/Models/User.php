<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;use Exception;
use Mail;
use App\Mail\SendCodeMail;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, CanResetPassword;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    
    protected $fillable = [
        'username',
        'refcode',
        'refbonus',
        'email',
        'phone',
        'password',
        'country',
        'address',
        'balance',
        'avatar',
        'online',
        'emailStatus',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'is_2f_on'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'regDate' => 'datetime',
    ];

        /**

     * Write code on Method

     *

     */

     public function generateCode()

     {
 
         $code = rand(1000, 9999);
 
   
 
         UserCode::updateOrCreate(
 
             [ 'user_id' => auth()->user()->id ],
 
             [ 'code' => $code ]
 
         );
 
     
 
         try {
 
   
 
             $details = [
 
                 'title' => 'Mail from ItSolutionStuff.com',
 
                 'code' => $code
 
             ];
 
              
 
             Mail::to(auth()->user()->email)->send(new SendCodeMail($details));
 
     
 
         } catch (Exception $e) {
 
             info("Error: ". $e->getMessage());
 
         }
 
     }


    protected $table = 'users';
    protected $primaryKey = 'id';
}
