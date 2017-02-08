angular.module('myApp').controller('mainCtrl', function($scope){
  $scope.friends = [
    { name: 'Steven Hawking', profession: 'scientist'},
    { name: 'Elon Musk', profession: 'entreprenuer'},
    { name: 'Joe Rogan', profession: 'comedian'}
  ];

   $scope.addFriend = function(){
     $scope.friends.push(
       { name: $scope.newFriend.name,
         profession: $scope.newFriend.profession}
     );
   };


});
