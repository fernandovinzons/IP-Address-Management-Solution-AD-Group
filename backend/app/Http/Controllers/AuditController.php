<?php

namespace App\Http\Controllers;

use App\Models\Audit;
use Illuminate\Http\Request;

class AuditController extends Controller
{
    // Fetch All IP Address
    public function index(){
        $audit = Audit::all();
        return response()->json($audit, 200);
    }
}
