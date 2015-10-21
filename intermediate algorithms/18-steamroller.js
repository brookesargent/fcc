function steamroller(arr) {
    var flatten = [];
    
    function steamroll(arr) {
        arr.forEach(function(item) {
            if (Array.isArray(item)) {
                return steamroll(item);
            }
            flatten.push(item);
        });
        return flatten;
    }
    return steamroll(arr);
}

steamroller([1, [2], [3, [[4]]]]);