app.factory('Stock',['$resource',function($resource){

   fucntion Stock(){
       this.service = $resource('/api/stocks/:stockId',{stockId: '@id'});
   };

   Stock.prototype.all = fucntion(){
     return this.service.query();
   }

   Stock.prototype.delete = function(stId){
       this.service.remote({stockId: stId});
   }
 
   Stock.prototype.create = function(attr){
       return this.service.save(attr);
   }

   return new Stock;

}]);

