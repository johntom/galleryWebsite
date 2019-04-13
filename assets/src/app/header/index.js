angular.module( 'sailng.header', [
])

//.controller( 'HeaderCtrl', ['$scope', '$state', 'config', 'offCanvas',  function HeaderController( $scope, $state, config ,offCanvas) {
.controller( 'HeaderCtrl', ['$scope', '$state', 'config',   function HeaderController( $scope, $state, config ) {


    $scope.currentUser = config.currentUser;

    var navItems = [

        {title: 'Upload', translationKey: 'navigation:upload', url: '/upload', cssClass: 'fa fa-tasks fa-lg'},
        {title: 'Posts', translationKey: 'navigation:posts', url: '/posts', cssClass: 'fa fa-tasks fa-lg'},
        // {title: 'Booking', translationKey: 'navigation:booking', url: '/booking', cssClass: 'fa  fa-calendar fa-lg'},
        // {title: 'EmailRenewal', translationKey: 'navigation:renewal', url: '/renewal', cssClass: 'fa fa-tasks fa-lg'},
        //
        // {title: 'BookingAdminCal', translationKey: 'navigation:kendocal', url: '/kendocal', cssClass: 'fa  fa-calendar fa-lg'}




    ];

    $scope.navItems = navItems;
        $scope.delay = 8000;
        $scope.slides = [
            {'title': 'hell', 'class': 'animation-slide', 'image':' ./../images/logos/mongodb.png'},
            {'title': 'sadas', 'class': 'animation-fade', 'image': ' ./../images/logos/sails-logo.png'}
        ];
        //
        //$scope.toggle = function() {
        //    alert('tg')
        //    this.toggle = offCanvas.toggle;
        //}

        }]);
