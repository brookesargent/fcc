function pair(str) {
  var arr = [];
  var pair = [];
   for (var i = 0; i < str.length; i++){
     switch (str[i]){
       case "A" : 
         arr = ["A", "T"]; break;
       case "T" :
         arr = ["T", "A"]; break;
       case "C" :
         arr = ["C", "G"]; break;
       case "G" :
         arr = ["G", "C"]; break;       
     }
     pair.push(arr);
   }
 return pair;
}

pair("GCG");