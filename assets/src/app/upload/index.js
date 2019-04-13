angular.module('sailng.upload', [])
    .config(['$stateProvider', function config($stateProvider) {
        $stateProvider.state('upload', {
            url: '/upload',
            views: {
                "main": {
                    controller: 'UploadCtrl',
                    templateUrl: 'upload/index.tpl.html'
                }
            },
            data: { pageTitle: 'Upload' }
        });
    }])
    //.controller('ClaimCtrlMain', ['$scope', '$stateParams', '$sails', 'lodash', '$window', '$filter', 'config', 'titleService', 'ClaimModel', 'DailyModel', 'CodeModel',
    //    'ngTableParams', '$location', 'localStorageService', 'masHelper', 'FileUploader', '$modal', function ClaimControllerMain($scope, $stateParams, $sails, lodash, $window, $filter, config, titleService, ClaimModel, DailyModel, CodeModel, ngTableParams, $location, localStorageService, masHelper, FileUploader, $modal) {

    .controller('UploadCtrl', ['$scope', '$stateParams', '$window', '$sails', 'lodash', 'config', 'titleService', 'GalleryModel', '$filter', 'ngTableParams', '$location', '$modal', 'FileUploader',
        function ClaimController($scope, $stateParams, $window, $sails, lodash, config, titleService, GalleryModel, $filter, ngTableParams, $location, $modal, FileUploader) {

            //            $scope.datasets = ["aa","archival", "blackfish", "bluefish", "boats", "codfish", "crew", "fluke", "porgy", "seabass", "stripedbass", "weakfish"];
            $scope.datasets = [];//"aa","archival", "blackfish", "bluefish", "boats", "codfish", "crew", "fluke", "porgy", "seabass", "stripedbass", "weakfish"];

            $scope.form = {};
            $scope.form.type = '';// "aa";

            //alert('  $scope.form.type '+ $scope.form.type+' '+ $scope.form.gallery  )
            $scope.uploadRightAway = true;
            $scope.emailSelected = '';
            $scope.hasUploader = function(index) {
                return $scope.upload[index] != null;
            };
            $scope.abort = function(index) {
                $scope.upload[index].abort();
                $scope.upload[index] = null;
            };

            $scope.session = {};
            //            uploadUrl = 'http://localhost:8013/upload';
            $scope.port = $location.$$port;
            $scope.host = $location.$$host;



            if ($scope.host === 'localhost') {
                uploadUrl = 'http://localhost:9015/upload';//local test
            } else {
                // if ($scope.port === 80) {
                //     console.log('in 80')
                //     uploadUrl = 'http://primetime3.com/upload';// outside brm network ie in public
                // }
                if ($scope.host === '74.114.164.20') {
                    uploadUrl = 'http://74.114.164.20:9015/upload';//local test
                }
                else {
                    if ($scope.host === 'gallery.meledandri.com') {
                        uploadUrl = 'http://gallery.meledandri.com:9015/upload';
                    }
                }
            }


            $scope.onFileSelect = function($files) {
                if ($scope.form.type !== undefined) {
                    //2 $scope.myModelObj = $scope.form.type;//.claim_no;
                    //$files: an array of files selected, each file has name, size, and type.
                    $scope.selectedFiles = $files;

                    var urlstr = '';// enables testing for local and live, pushh to parktower
                    if ($scope.host === 'localhost') {
                        urlstr = 'http://localhost:9015/upload';//local test
                    } else {
                        if ($scope.host === '74.114.164.20') {
                            urlstr = 'http://74.114.164.20:9015/upload';//local test

                        } else {
                            if ($scope.port === 80) {
                                console.log('in 80')
                                // urlstr = 'http://primetime3.com/upload';// outside brm network ie in public
                            } else {

                                urlstr = 'http://gallery.meledandri.com:9015/upload';
                            }
                        }
                    }
                    console.log('urlstr ', urlstr)
                    console.log('host ', $scope.host)
                    console.log('port ', $scope.port)
                    for (var i = 0; i < $files.length; i++) {
                        var $file = $files[i];
                        $http.uploadFile({
                            url: urlstr,
                            formData: [{
                                //2myObj: $scope.form.type,//$scope.myModelObj,
                                filetype: 'gallery',
                                staff: $scope.currentUser.username
                            }],
                            //     data: {myObj: $scope.myModelObj, filetype: 'CLAIM'},
                            file: $file
                        }).progress(function(evt) {
                            $scope.claim.pcnt = 'percent: ' + parseInt(100.0 * evt.loaded / evt.total);
                            //1 $scope.$apply(); // need this for display
                        }).then(function(data, status, headers, config) {

                        });
                    }
                } else {
                    alert('please save po before attaching scans')
                }
            }
            var uploader = $scope.uploader = new FileUploader({
                url: uploadUrl
                //, formData: [{'src':'images/banner1.jpg', 'alt':'Add your image description here'}]

                //, formData: [{'gallery': $scope.form.type}]

            });
            // FILTERS
            uploader.filters.push({
                name: 'customFilter',
                fn: function(item /*{File|FileLikeObject}*/, options) {
                    return this.queue.length < 110;
                }
            });

            // CALLBACKS
            uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
                console.info('onWhenAddingFileFailed', item, filter, options);
            };
            uploader.onAfterAddingFile = function(fileItem) {
                console.info('onAfterAddingFile', fileItem.file.name, $scope.form.type);



            };
            uploader.onAfterAddingAll = function(addedFileItems) {
                console.info('onAfterAddingAll', addedFileItems);

            };
            uploader.onBeforeUploadItem = function(item) {
                //   item.formData.push({'type': $scope.form.type});

                //2 item.formData.push({'gallery': $scope.form.type});

            };

            uploader.onProgressItem = function(fileItem, progress) {
                console.info('onProgressItem', fileItem, progress);
            };
            uploader.onProgressAll = function(progress) {
                console.info('onProgressAll', progress);
            };
            uploader.onSuccessItem = function(fileItem, response, status, headers) {
                console.info('onSuccessItem', fileItem, response, status, headers);
            };
            uploader.onErrorItem = function(fileItem, response, status, headers) {
                console.info('onErrorItem', fileItem, response, status, headers);
            };
            uploader.onCancelItem = function(fileItem, response, status, headers) {
                console.info('onCancelItem', fileItem, response, status, headers);
            };
            uploader.onCompleteItem = function(fileItem, response, status, headers) {
                console.info('onCompleteItem', fileItem, response, status, headers);
            };
            uploader.onCompleteAll = function() {



            };


            $scope.handleFiles = function handleFiles(files) {
                // Check for the various File API support.
                if (window.FileReader) {
                    alert('FileReader are supported..')
                } else {
                    alert('FileReader are not supported in this browser.');
                }
            }

        }])
    .controller('ModalInstanceCtrlYN', ['$scope', '$modalInstance', function($scope, $modalInstance) {


        $scope.ok = function() {
            $modalInstance.close(1);
        };

        $scope.cancel = function() {

            $modalInstance.close(0);
        };
    }]);
