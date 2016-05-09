<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
     protected $fillable = array('id', 'name', 'description','image');
}
