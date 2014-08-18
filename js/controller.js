var controleur = angular.module('ic_controleur', ['ic_usine']);

controleur.controller('testCtrl', function(){

});

controleur.controller('signalar', function( $scope){
    $.connection.hub.url ='http://ticketingreservations.azurewebsites.net/signalr'
    var commandsHub = $.connection.commandsHub
    var commandId="2ac2682b-d8be-444d-b567-041625a62f22"
    commandsHub.client.updateStatus = function(commandStatus){console.log(commandStatus);}

    $.connection.hub.start()
        .done(function () {

            console.log(commandId);
            commandsHub.server.monitorCommand(commandId)
        });


})

controleur.controller('postTest', function($scope, $http){

    var data2 = {
        "EventName": "mat33",
        "DateTime": "2014-08-20T10:50:51",
        "Section": "General 1",
        "Count": 100
    };

    var data ={
        "EventName": $scope.eventName,
        "DateTime": "2014-08-20T10:50:51",
        "Section": "General 1",
        "Count": 100

    };
     $scope.createEvent = function(){
        $http.post("http://ticketingreservations.azurewebsites.net/api/events/admissions/ga", data).success(function (data, status) {
            console.log(data);
        })
         alert("test")
    }

});
