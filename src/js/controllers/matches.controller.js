angular
  .module('awayGameApp')
  .controller('MatchesIndexCtrl', MatchesIndexCtrl);

MatchesIndexCtrl.$inject = ['$http', '$auth', 'User', 'Match'];
function MatchesIndexCtrl($http, $auth, User, Match) {

  const vm = this;
  const currentUserId = $auth.getPayload().userId;
  // inside vm.currentUserId you would have .groups which is an array of populated group objs from your database, which includes the meetupId
  vm.currentUser = User.get({ id: currentUserId });

  $http
    .get('/api/matches')
    .then(res => {
      console.log(res.data.fixtures);
      vm.all = res.data.fixtures;
    });

  function getMatch(date, homeTeam, awayTeam, externalCode) {
    const matchCode = externalCode.slice(41, 47);
    const newMatch = {
      date: new Date(date),
      teams: [homeTeam, awayTeam],
      matchCode: matchCode
    };

    Match
      .join({ matchCode: matchCode }, newMatch)
      .$promise
      .then((res) => {
        console.log(res);
      });


  }

  vm.getMatch = getMatch;

}
