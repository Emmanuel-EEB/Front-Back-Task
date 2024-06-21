<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description']; // Asegúrate de tener los campos adecuados

    public function day()
    {
        return $this->belongsTo(Day::class);
    }
}
