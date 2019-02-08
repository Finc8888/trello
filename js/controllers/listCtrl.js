/**
 * Created by vprikhodko on 08.02.2019.
 */
angular.module('app').controller('listCtrl',function(listFactory){
    console.log('listCtrl');
    this.removeList = function(list){
        listFactory.removeList(list);
    }
});