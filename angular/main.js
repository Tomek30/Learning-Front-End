/**
 * Created by x on 2016-05-20.
 */
/* -------- AngularJS ---------*/

var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function ($scope)
    {
        $scope.posts =
            [
                // post 1
                {
                    name: 'test',
                    image: '../imgs/4x3.jpg',
                    description: 'wefsfdg sfsdf'
                },
                // post 2
                {
                    name: 'test2',
                    image: '../imgs/4x3.jpg',
                    description: ' sfsdf'
                },
                // post 3
                {
                    name: 'test3',
                    image: '../imgs/4x3.jpg',
                    description: 'wefsfsdfdg sfsdf'
                }
            ];
    }]
);

