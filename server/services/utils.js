export default {

   arraysEqual: function(arr1, arr2) {
      if(arr1.length !== arr2.length)
        return false;
      for(let i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
          return false;
      }

      return true;
    },

    getFirstInstance: function(arr, propName, propVal) {
     if(arr && propVal && propName) {
       return arr.filter(obj => {
         return obj[propName] === propVal;
       })[0];
     } else {
       console.log('getFirstInstance - got null parameter!');
       return null;
     }
    },

   sum: function (arr){
     return arr.reduce(function(acc, val) {
       return acc + val;
     });
   }

};
