function unite(arr1, arr2, arr3) {
    temp = Array.prototype.slice.call(arguments);
    var finalArr = [];
    

temp.forEach(function(set){
    set.forEach(function(number){
        console.log(set, number);
        if (finalArr.indexOf(number)===-1){
            finalArr.push(number);
        }  
    });
});




return finalArr;

}

unite([1, 2, 3 ], [5, 2, 1, 4], [2, 1]);