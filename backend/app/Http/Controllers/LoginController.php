<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Audit;
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

            $this->auditActivity("Logged In", $user); // Audit Log In

            $response = [
                'user' => $user,
                'token' => $token
            ];

            return response($response, 200);
        }
    }

    public function logout(){
        auth()->user()->tokens()->delete();

        $this->auditActivity("Logged Out", []); //Audit Log Out

        return response(['message' => 'You have logged out']);
    }


    // Audit for login and logout
    public function auditActivity($activity, $user){

        $data = [
            'auditable_id' => $user ? $user->id : auth()->user()->id,
            'auditable_type' => $activity,
            'event'      => $activity,
            'url'        => request()->fullUrl(),
            'ip_address' => request()->getClientIp(),
            'user_agent' => request()->userAgent(),
            'created_at' => now(),
            'updated_at' => now(),
            'user_id'  => $user ? $user->id : auth()->user()->id,
        ];

        //create audit trail data
        $details = Audit::create($data);
    }
}
