angular.module('app',[]).controller('listsCtrl',function(){
  console.log('listsCtrl');
  this.lists = [
    {
      listName:'List 1'
    },
    {
      listName:'List 2'
    }
  ];
});
