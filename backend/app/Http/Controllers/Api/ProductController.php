<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Get all products
    public function index()
    {
        return response()->json([
            'success' => true,
            'products' => Product::all()
        ]);
    }

    // Get single product
    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'product' => $product
        ]);
    }

    // Create product
    public function store(Request $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'desc' => $request->desc,
            'category' => $request->category,
            'img' => $request->img
        ]);

        return response()->json([
            'success' => true,
            'product' => $product
        ]);
    }


    public function categories()
    {
        $categories = \App\Models\Product::distinct()
            ->pluck('category');

        return response()->json([
            'success' => true,
            'categories' => $categories
        ]);
    }
}