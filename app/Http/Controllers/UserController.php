<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(RegisterRequest $request){

        $validated = $request->validated();
        User::create($validated);

        return response()->json([
            "message" => "Successful registration"
        ]);

    }


    public function login(LoginRequest $request){

        $user = User::where('email', $request->email)->first();

            if(!$user || !Hash::check($request->password, $user->password)){
                return response()->json([
                    'error' => "User not found or password is incorrect"
                ]);
            } else {
                return response()->json([
                    'user' => $user,
                    'message' => 'Successful login',
                    'currentToken' => $user->createToken('new_user')->plainTextToken
                ]);
            }

    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Logout is successfull'
        ]);
    }
}
