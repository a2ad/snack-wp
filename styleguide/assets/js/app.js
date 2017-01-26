    //Sed App
    var snackApp = angular.module('snackApp', []);

    // Config

    snackApp.config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }]);

    snackApp.config(['$locationProvider', function ($locationProvider) {
        //Remove hashprefix "!" default v1.6
        $locationProvider.hashPrefix('');
    }]);

    // Controllers

    snackApp.controller('snackController', function($scope, $location, $anchorScroll) {
        var self = this;

        self.isCurrent = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        },
        $scope.scrollTo = function(id) {
            $location.hash(id);
            $anchorScroll();
            $location.hash(null);
        };


    });

    // Directives

    snackApp.directive('snackExample', function() {
        return {
            templateUrl: "templates/snack-example.html",
            scope: {
                title: "@",
                desc: "@",
                lang: "@"
            },
            replace: true,
            transclude: true,
            link: function(scope, element, attrs){
                Rainbow.color();
                element.bind("click", function() {

                    // Toggle Class
                    this.classList.toggle('current');
                });
            }
        };
    });
