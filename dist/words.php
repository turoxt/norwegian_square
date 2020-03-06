<?php
// Norwegian vocabulary
$words[] = "mat = food";
$words[] = "ost";
$words[] = "brød = bread";
$words[] = "kylling = chicken";
$words[] = "kjøtt = meat";
$words[] = "mel = flour";
$words[] = "melk = milk";
$words[] = "pølse = hot dog";
$words[] = "grøt = porridge";
$words[] = "agurk = cucumber";
$words[] = "tomat = tomato";
$words[] = "paprika = peppers";
$words[] = "salt = salt";
$words[] = "pepper = pepper";
$words[] = "skinke = ham";
$words[] = "smør = butter";
$words[] = "brus = soda";
$words[] = "rømme = sour cream";
$words[] = "appelsin = orange";
$words[] = "pære = pear";


// Get Query String
$q = $_REQUEST['q'];

$translation = "";

// Get translations
if($q !== ""){
  $q = strtolower($q);
  $len = strlen($q);
  foreach($words as $word){
    if(stristr($q, substr($word, 0, $len))){
      if($translation === ""){
        $translation = $word;
      } else {
        $translation .= "<br> $word";
      }
    }
  }
}

echo $translation === "" ? "No Translation" : $translation;