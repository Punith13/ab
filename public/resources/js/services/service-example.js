app.service('service' , ['$rootScope', '$http',  function($rootScope, $http){
    
    this.samplefunction = function(){

        $http.get('/getSampleData')
             .success( function(res) {
            
            })
            .error( function( data , status) {
             console.log(status); 
            });

    }
    
}]); 