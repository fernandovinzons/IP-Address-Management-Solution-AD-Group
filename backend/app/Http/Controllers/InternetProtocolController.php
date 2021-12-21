<?php

namespace App\Http\Controllers;

use App\Models\InternetProtocol;
use Illuminate\Http\Request;

class InternetProtocolController extends Controller
{

    public function index(){
        $ip_list = InternetProtocol::all();
        return response()->json(['ip_list' => $ip_list], 200);
    }

    public function fetch($id){

    }

    public function add(Request $request){

        try {
            // No checker as it was not specified if duplicate ip is needed to be checked

            $request->validate([
                'name' => 'required|max:13|ip',
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

    public function update(Request $request, $id){



    }
}
