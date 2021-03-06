(function () {
'use strict';

angular.module('public')
.service('SignUpService', SignUpService)

SignUpService.$inject = ['$http', 'ApiPath']
function SignUpService($http, ApiPath) {
  var service = this;

  service.checkMenuId = function(menuid) {
    var promise = $http({
      method: "GET",
      url: (ApiPath + "/menu_items/" + menuid + ".json")
    });
    return promise;
  }

  service.persist = function(data) {
    window.localStorage['myinfo'] = JSON.stringify(data);
  }

  service.getMyInfo = function() {
    if (window.localStorage['myinfo']) {
      return angular.fromJson(window.localStorage['myinfo']);
    } else {
      return {};
    }

  };

  service.getMenuItem = function(menuid, callback) {
    $http.get(ApiPath + '/menu_items/' + menuid  +'.json').then(function (response) {
      callback(response);
    });
  };

}

})();
