angular.module('sailng.home', [])

//.config(function config( $stateProvider ) {
    .config(['$stateProvider', function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/index.tpl.html'
                }
            }
        });
    }])

    //3-12    .controller( 'HomeCtrl',['$scope', '$sails', '$filter', '$interval','ngTableParams','$location','lodash', 'config',
    //    'titleService', 'TodoModel','PostsModel','CalendarModel','ContactModel',  'marked',function HomeController( $scope, $sails, $filter,$interval, ngTableParams,$location,lodash, config, titleService, TodoModel,PostsModel,CalendarModel,ContactModel,marked ) {

    .controller('HomeCtrl', ['$scope', '$filter', 'ngTableParams', '$location', 'lodash', 'config',
        'titleService', 'TodoModel', 'PostsModel', 'CalendarModel', 'ContactModel', 'marked','GalleryModel', function HomeController($scope, $filter, ngTableParams, $location, lodash, config, titleService, TodoModel, PostsModel, CalendarModel, ContactModel, marked,GalleryModel) {


            $scope.toggleText = 'show video';


            $scope.conditional = {
                video: 'a56O4dJcM6E',
                visible: false,//true,
                toggle: function () {

                    this.visible = !this.visible;
                    this.visible ? $scope.toggleText = 'hide video' : $scope.toggleText = 'show video';
                    // if ($scope.toggleText==='show video') { $scope.toggleText='hide video' } else ( $scope.toggleText='show video') ;

                }
            };


        

            //ngfader

            $scope.images = [{
                src: 'images/banner1.jpg',
                alt: 'Add your image description here'
            }, {
                src: 'images/banner3.jpg',
                alt: 'Add your image description here'
            }, {
                src: 'images/banner5.jpg',
                alt: 'Add your image description here'
            }, {
                src: 'images/banner4.jpg',
                alt: 'Add your image description here'

            }, {
                src: 'images/banner2.jpg',
                alt: 'Add your image description here'
            }];
            $scope.dataHasLoaded = true;



            $scope.addContact = function (contact) {
                //alert('add')

                ContactModel.create(contact)
                    .then(function (models) {
                        //console.log('DailyModel ', models);//.title)
                        //if (models.status!=="success"){
                        if (models !== "success") {
                            alert('data save failed')
                            $scope.data = {
                                isLoading: true//bad credentials
                            };
                        } else {
                            //alert('data saved')
                            $scope.contact = {};
                            $scope.data = {
                                success: true
                            };
                        }

                    });
            };


            $scope.delay = 4000;//8000

            //PostsModel.getOne($scope).then(function (models) {
            //    console.log('models ', models)
            //    $scope.articles = models[0];//fishing report
            //    // alert('articles 0/tag'+$scope.articles);//$scope.articles);//.tags)
            //});

            PostsModel.getOne('author', 'frontpage').then(function (post) {
                //console.log('getOne ', post)
                $scope.post = post;
            })


            //PostsModel.getAll($scope).then(function (models) {
            //    console.log('getAll ', models)
            //    $scope.postsall = models.data;//fishing report
            //
            //    // alert('articles 0/tag'+$scope.articles);//$scope.articles);//.tags)
            //})
            //   .then(function () {
            //        var apos = lodash.findIndex($scope.postsall, function (file) {
            //            return file.author === "frontpage";
            //        });
            //        $scope.articles = $scope.postsall[apos];//fishing report   apos
            //    })

            //PostsModel.getAllDS().then(function (models) {
            //    console.log('getAllDS ', models)
            //    $scope.postsall = models.data;//fishing report
            //
            //    // alert('articles 0/tag'+$scope.articles);//$scope.articles);//.tags)
            //});

            // alert('CalendarModel')
            CalendarModel.getAll($scope).then(function (models) {
                //console.log('CalendarModel ', models)
                $scope.calendars = models;//[0];//fishing report
                //alert ('in cal '+$scope.calendars)
                // alert('articles 0/tag'+$scope.articles);//$scope.articles);//.tags)
            });

        }]);

//var stop;
//$scope.fight = function() {
//    alert('in fi')
//    // Don't start a new fight if we are already fighting
//    if ( angular.isDefined(stop) ) return;
//
//    $interval(function() {
//        //if ($scope.blood_1 > 0 && $scope.blood_2 > 0) {
//        //    $scope.blood_1 = $scope.blood_1 - 3;
//        //    $scope.blood_2 = $scope.blood_2 - 4;
//        //} else {
//        //    $scope.stopFight();
//        //}
//        alert('in ts')
//    }, 1000);
//};
