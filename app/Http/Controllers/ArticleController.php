<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    //
    public function index(){
        $productImg = asset('images/produ2ct.png');
        $imageProfil = "https://a.storyblok.com/f/191576/1200x800/9728fa15bd/round_profil_picture_after_.webp";
        // return response('Hello');
        return Inertia::render('Home',[
            'imageProfil' => $imageProfil,
            'productImg' => $productImg,
        ]);
    }
}
