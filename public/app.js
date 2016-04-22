/*global angular*/
angular.module('todoApp', [])
  .controller('Myapp', function ($http) {
    var app = this
    loadUserIp()
    loadUserOs()
    loadUserGet()
    function loadUserIp () {
      $http.get('http://httpbin.org/ip').then(function (response) {
        app.userIp = response.data.origin
        // console.log(app.userIp)
      })
    }
    function loadUserOs () {
      $http.get('http://httpbin.org/user-agent').then(function (response) {
        app.userOs = response.data
        console.log(app.userOs['user-agent'])
      })
    }
    app.userGet = []
    function loadUserGet () {
      $http.get('http://httpbin.org/get').then(function (response) {
        app.userGet.push(response.data)
        // console.log(response)
        console.log(app.userGet[0].headers['Accept-Language'])
      })
    }
  })
