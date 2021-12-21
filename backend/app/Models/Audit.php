<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audit extends Model
{
    use HasFactory;

    protected $table = 'audits';
    protected $fillable = [
        'auditable_id',
        'auditable_type',
        'event',
        'url',
        'ip_address',
        'user_agent',
        'created_at',
        'updated_at',
        'user_id'
    ];
}
