
app.controller('SolverController',['$scope','$rootScope','currentRow','sharedTree','$window','$http', 'sharedService',function($scope,$rootScope, currentRow,sharedTree,$window,$http,sharedService){
    $scope.$on('handleBroadcast', function() { // This is called when an instance is selected
        $scope.showSolver();
    });
    $scope.$on('handleBroadcast2', function() { // This is called when an event is selected and the new tree shows up
        $scope.showSolver();
    });

    $scope.showSolver = function() {
        $('.solver-container table tr').removeClass("highlight");
        sharedTree.tree.assignSolvers(0,currentRow.value);
        $scope.entries = sharedTree.tree.solvers;

    };

    $scope.clickEvent = function($event,x){
        if(x.node){
            x.node = x.node.toString(); // transform to string or it will show and array
        }
        var ppTable = prettyPrint(x);
        document.getElementById('d6_1').innerHTML = "Solver".bold();
        var item = document.getElementById('d6_2');

        if(item.childNodes[0]){
            item.replaceChild(ppTable, item.childNodes[0]); //Replace existing table
        }
        else{
            item.appendChild(ppTable);
        }

    }

}]);