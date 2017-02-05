angular.module('umbraco').factory('urlPickerService', function ($http, $q, $injector) {
    return {
       getAllPropertyEditors: function () {
          var deferred = $q.defer();
          $http.get('/Umbraco/backoffice/Api/UrlPickerApi/getAllPropertyEditors/')
              .success(function (data, status, headers, cfg) {
                  deferred.resolve(data);
              }, function (error) {
                  deferred.reject(error);
              });
          return deferred.promise;
      },
       getTitleForAdditionalType: function (dataTypeId, type, value) {
          var deferred = $q.defer();
          $http.get('/Umbraco/backoffice/Api/UrlPickerApi/getTitleForAdditionalType/?dataTypeId=' + dataTypeId + '&typeAlias=' + type + '&value=' + value, {cache: true})
              .success(function (data, status, headers, cfg) {
                  deferred.resolve(data);
              }, function (error) {
                  deferred.reject(error);
              });
          return deferred.promise;
      }
    };
});
