<?php

namespace App\Http\Controllers;

use App\Models\InternetProtocol;
use Illuminate\Http\Request;

class InternetProtocolController extends Controller
{

    // Fetch All IP Address
    public function index(){
        $ip_list = InternetProtocol::all();
        return response()->json(['ip_list' => $ip_list], 200);
    }

    // Fetch Specific IP Address
    public function fetch($id){
        $ip = InternetProtocol::find($id);

        if($ip){
            return response()->json(['ip' => $ip], 200);
        }
        else{
            return response()->json(['message' => 'IP Address not found'], 404);
        }
    }

    // Add IP Address
    public function add(Request $request){

        try {
            // No checker as it was not specified if duplicate ip is needed to be checked

            $request->validate([
                'name' => 'required|ip',
                'description' => 'required|max:255'
            ]);

            $ip = new InternetProtocol;
            $ip->name = $request->name;
            $ip->description = $request->description;
            $ip->save();

            return response()->json(['message' => 'IP Address Added Successfully'], 200);
        } catch (\Throwable $th) {
            throw $th;
        }

    }

    // Update an existing IP Address
    public function update(Request $request, $id){

        $request->validate([
            'description' => 'required|max:255'
        ]);

        $ip = InternetProtocol::find($id); // Check if IP address is already added

        if($ip){
            $ip->description = $request->description;
            $ip->save();

            return response()->json(['message' => 'IP Address Label Updated Successfully'], 200);
        }
        else{
            return response()->json(['message' => 'IP Address not found'], 404);
        }

    }
}
