<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;

class LoginController extends Controller
{

    public function login(Request $request){
        $data = $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $data['email'])->first();

        if(!$user || !Hash::check($data['password'], $user->password)){
            return response(['message' => 'Invalid Credentials'], 401);
        }
        else{
            $token = $user->createToken('adgroupTestToken')->plainTextToken;
            $response = [
                'user' => $user,
                'token' => $token
            ];

            return response($response, 200);
        }
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response(['message' => 'You have logged out']);
    }
}
