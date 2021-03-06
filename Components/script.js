angular.module('contestantApp', ['contestantList', 'contestantEditor']);

angular.module('contestantList', [])
  .directive('cContestantList', function() {
    return {
      scope: {},
      templateUrl: 'contestant_list.html',
      replace: true,
      controller: 'ContestantListCtrl',
      controllerAs: 'ctrl'
    };
  })
  .controller('ContestantListCtrl', function() {
    console.log('hi');
    this.contestants = [
      {firstName: 'Rachel', lastName: 'Washington'},
      {firstName: 'Joshua', lastName: 'Foster'},
      {firstName: 'Samuel', lastName: 'Walker'},
      {firstName: 'Phyllis', lastName: 'Reynolds'}
    ];
  
  });
  
angular.module('contestantEditor', [])
  .directive('cContestantEditorForm', function() {
    return {
      scope: {
        contestants: '='
      },
      templateUrl: 'contestant_editor.html',
      replace: true,
      controller: 'ContestantEditorFormCtrl',
      controllerAs: 'ctrl'
    };
  })
  .controller('ContestantEditorFormCtrl', function($scope) {
    
    this.contestant = {};
    
    this.save = function() {
      $scope.contestants.push(this.contestant);
      this.contestant = {};
    };
    
  });

