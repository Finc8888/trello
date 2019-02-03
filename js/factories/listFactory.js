/**
 * Created by vprikhodko on 31.01.2019.
 */

angular.module('app').factory('listFactory',function(){
    let service = {};
    let lists = [
    {
        id : 1,
        listName: 'ToDo'
    },
    {
        id : 2,
        listName : 'Doing'
    },
    {
        id : 3,
        listName : 'Done'
    }
    ];
    service.getLists = function(){
        return lists;
    }
    service.addList = function(listName){
      lists.push({
        id :_.uniqueId('list_'),
        listName :listName
      });
    }
    return service;
});
