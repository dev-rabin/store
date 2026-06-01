<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  protected $fillable = [
    'user_id',
    'total_amount',
    'status',
    'payment_status',
    'payment_method',
    'transaction_id',
    'gateway_order_id',
    'payment_response',
    'paid_at',
];
}