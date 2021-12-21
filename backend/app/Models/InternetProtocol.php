<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InternetProtocol extends Model
{
    use HasFactory;

    protected $table = 'internet_protocol';
    protected $fillable = ['name', 'description'];

}
