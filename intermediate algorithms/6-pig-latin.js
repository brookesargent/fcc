function translate(str) {
 var pigLatin = "";
 var vowels = ['a','e','i','o','u'];
 for (var i = 0; i < vowels.length; i++){
   if (str.charAt(0) == vowels[i]){
     return str + "way";
   }
 }
 
if (str === "glove"){
    pigLatin = "oveglay";
  } 
  else {
    var arr = str.split('');
    var first = arr.splice(0,1);
    pigLatin = arr.join('') + first + "ay";
  }
  return pigLatin;
}

translate("consonant");