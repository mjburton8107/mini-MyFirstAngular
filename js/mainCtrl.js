angular.module('friendsList').controller('mainCtrl', function($scope){
$scope.friends = [
  { name: "Heidi Hawkins", relationship: "wife"},
  { name: "Scotty John", relationship: "friend"},
  { name: "Kris Burton", relationship: "mom"},
  { name: "DJ Shooter", relationship: "business associate"},
];

$scope.addFriend = function(){
  $scope.friends.push(
    {
      name: $scope.newFriend.name,
      relationship: $scope.newFriend.relationship
    });
  };
});
