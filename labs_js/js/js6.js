function filterBy(array, dataType){
    var filteredArray = array.filter(function(item){
        return typeof item != dataType
    });
    return filteredArray;
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'number'))