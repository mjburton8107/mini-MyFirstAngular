angular.module('friendsList').controller('mainCtrl', function($scope){
$scope.friends = [
  'Heidi', 'Scotty', 'DJ', 'Michael'
];

$scope.addFriend = function(){
  $scope.friends.push($scope.newFriend);
}

});
