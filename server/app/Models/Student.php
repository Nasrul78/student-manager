<?php

namespace App\Models;

use App\Enums\Gender;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    /** @use HasFactory<\Database\Factories\StudentFactory> */
    use HasFactory;

    protected $casts = [
        'status' => Gender::class,
    ];

    protected $fillable = [
        'name',
        'email',
        'phone',
        'dob',
        'gender',
        'address',
    ];
}
