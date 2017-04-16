// DIRECTIVES

app.directive('directiveName' , function(){
    
    return{
        restrict: 'E',
        replace : true,
        templateUrl : '',
        scope: {
            : "@" ,
            : "=" , 
            : "&"
        },
        link :function(scope , elem , attrs){
            
        }
    }
 
});