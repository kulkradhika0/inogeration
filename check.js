var appList = angular.module('p1tracker', [ 'ngCookies', 'ngAnimate' ]);
appList.factory("UserService", function($cookies) {

	return {
		WriteCookie : function(Details) {

			var test = $cookies.putObject("InogDetails", Details);
		},
		ReadCookie : function() {
			return $cookies.getObject("InogDetails");
		},
		RemoveCookie : function() {
			$cookies.remove('InogDetails');
		}
	};
});

appList.controller('UserAuthController', function($scope, $http, $window,
		$cookies, UserService) {

	$scope.init = function() {
		var cookieData = UserService.ReadCookie();
		console.log(cookieData);
		if (cookieData != null) {
			window.location = 'Temp_Del.html';
		}

	};

	$scope.loginAuth = function() {
		var data = $scope.UserAuth;
		console.log(data);

		$scope.InogDetails = {};

		switch ($scope.UserAuth.USERNAME) {
		case 'shweta.dandekar@vodafone.com':
			$scope.InogDetails.Name = "Shweta";
			$scope.InogDetails.Email = "shweta.dandekar@vodafone.com";
			$scope.InogDetails.AuthCode = "1234";
			UserService.WriteCookie($scope.InogDetails);

			window.location = 'Temp_Del.html';

			break;
		case 'radhika.kulkarni@vodafone.com':
			$scope.InogDetails.Name = "Radhika";
			$scope.InogDetails.Email = "radhika.kulkarni@vodafone.com";
			$scope.InogDetails.AuthCode = "3456";
			UserService.WriteCookie($scope.InogDetails);

			window.location = 'Temp_Del.html';

			break;
		case 'gaurav.migalani@vodafone.com':
			$scope.InogDetails.Name = "Gaurav";
			$scope.InogDetails.Email = "gaurav.migalani@vodafone.com";
			$scope.InogDetails.AuthCode = "0099";
			UserService.WriteCookie($scope.InogDetails);

			window.location = 'Temp_Del.html';

			break;
		default:
			break;
		};

	};

});

appList
		.controller(
				'UserHomeController',
				function($scope, $interval, $http, $window, $cookies,
						UserService) {
					$scope.init = function() {

						var cookieData = UserService.ReadCookie();
						console.log(cookieData);
						if (cookieData == null) {
							window.location = 'index.html';
						}
						$scope.InogDetails = cookieData;
						//this is to get current working code
						$http({
							method : 'POST',
							url : 'http://35.184.243.87:8100/GLV/test_api/',
						}).then(function(response) {
							console.log(response);
							$scope.currentPasscode = response.passcode;
																		alert($scope.currentPasscode);
						}, function(error) {
							console.log(error);
//							$scope.currentPasscode = "1234";
							//											alert($scope.InogDetails.Name);
							//											alert($scope.currentPasscode);
						});

					};
					var auto = $interval(function() {
						//					        $scope.currentPasscode = "3456";
						//					        $scope.currentPasscode ++;
						$.ajax({
							method : 'POST',
							url : 'http://35.184.243.87:8100/GLV/test_api/',
							success : function(response) {
								console.log(response);
								$scope.currentPasscode = response.passcode;
								console.log($scope.currentPasscode);
								if($scope.currentPasscode == "0000")
									{
									 $scope.open_curtain();
									}
							}
						});
					}, 10000);
					$scope.logout = function() {
						UserService.RemoveCookie();
						window.location = 'index.html';
					}

					$scope.disable_enable = function(disableId, enableId) {
						console.log(disableId);
						console.log(enableId);
						document.getElementById(disableId).style.display = "none";

						if (enableId != null) {
							document.getElementById(enableId).style.display = "block";
						}

					}

					$scope.open_curtain = function() {
						$("#curtain1").animate({
							width : 20
						}, 1000);
						$("#curtain2").animate({
							width : 20
						}, 1000);
						$('body').css('background-image', 'url("giphy.gif")');
						$('body').css('background-size', 'cover');

					}

					$scope.congrats = function() {
						var content = "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent";

						$scope.type = "";
						var i = 0;
						var timer = setInterval(function() {
							if (i < content.length)
								$scope.type += content[i];
							i++;
							$scope.$apply();
						}, 100);
					}

					$scope.SaveCode = function(code) {

						var SaveUserAction = {};
						var config = {
							headers : {
								'Content-Type' : 'Content-Type: application/json; charset=utf-8',
								'Access-Control-Allow-Origin' : '*'

							}
						}
						console.log(code);
						SaveUserAction.passcode = code;
						$http({
							method : 'POST',
							url : 'http://35.184.243.87:8100/GLV/test_api/',
							data : SaveUserAction
						}).then(function(response) {
							console.log(response);

						}, function(error) {
							console.log(error);

						});
					}

				});