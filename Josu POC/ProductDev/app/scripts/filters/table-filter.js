angular.module('productDevApp').filter('rangeFilter', function () {
  return function (items,slider) {
  
    var filtereddata=[];
  
    for(var i=0;i<items.length;i++){
        var item = items[i]
       /* console.log(item)*/
       if(item.id>=slider.modelMin && item.id<=slider.modelMax){
        filtereddata.push(item);

       }   
    }
    return filtereddata;
    
  };
});
