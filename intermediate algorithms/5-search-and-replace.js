function replace(str, before, after) {
 var splitArr = str.split(" ");
 for (var i = 0; i <= splitArr.length; i++) {
     if (splitArr[i] === before) {
         splitArr.splice(i, 1, after);
         }
    if(before.charAt(0)===before.charAt(0).toUpperCase()) {
             after = after.charAt(0).toUpperCase() + after.slice(1);
     }
 }
 return splitArr.join(" ");
}

replace("He is Sleeping on the couch", "Sleeping", "sitting");
