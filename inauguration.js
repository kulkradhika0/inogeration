var appList = angular.module('p1tracker', [ 'ngCookies' ]);
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
			window.location = 'main.html';
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

			window.location = 'main.html';

			break;
		case 'radhika.kulkarni@vodafone.com':
			$scope.InogDetails.Name = "Radhika";
			$scope.InogDetails.Email = "radhika.kulkarni@vodafone.com";
			$scope.InogDetails.AuthCode = "3456";
			UserService.WriteCookie($scope.InogDetails);

			window.location = 'main.html';

			break;
		case 'gaurav.miglani@vodafone.com':
			$scope.InogDetails.Name = "Gaurav";
			$scope.InogDetails.Email = "gaurav.miglani@vodafone.com";
			$scope.InogDetails.AuthCode = "0099";
			UserService.WriteCookie($scope.InogDetails);

			window.location = 'main.html';

			break;
		default:
			$scope.InogDetails.Name = "Guest";
			window.location = 'main.html';
			break;
		}
		;

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
						$http(
								{
									method : 'POST',
									url : 'http://127.0.0.1:8100/GLV/getPasscode/',
								}).then(function(response) {
							console.log(response);
							$scope.currentPasscode = response.data.passcode;
							if ($scope.currentPasscode == "0000") {
								$scope.open_curtain();
							}
							else {
								$('body').css('background-color', 'black');
								$('body').css('background-image', 'none');
								$('#curtain1').css('width', '50%');
								$('#curtain2').css('width', '50%');
								$('body').css('background-size', 'cover');

							}
						}, function(error) {
							console.log(error);
						});

					};
					var ajaxCall = function() {
						$http(
								{
									method : 'GET',
									url : 'http://127.0.0.1:8100/GLV/getPasscode/'
								}).then(function(response) {
							$scope.currentPasscode = response.data.passcode;
							console.log($scope.currentPasscode);
							if ($scope.currentPasscode == "0000") {
								$scope.open_curtain();
							} else {
								$('body').css('background-color', 'black');
								$('body').css('background-image', 'none');
								$('#curtain1').css('width', '50%');
								$('#curtain2').css('width', '50%');
								$('body').css('background-size', 'cover');

							}

						}, function(error) {
							console.log(error);
						});
					}

					var interval = $interval(ajaxCall, 1500)

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

						var audio = document.getElementById("audio");
						audio.play();

					}

				

					$scope.SaveCode = function(code) {
//						alert(code);
						var SaveUserAction = {};
						var config = {
							headers : {
								'Content-Type' : 'Content-Type: application/json; charset=utf-8',
								'Access-Control-Allow-Origin' : '*'

							}
						}
						console.log(code);
						SaveUserAction.passcode = code;
						$http(
								{
									method : 'POST',
									url : 'http://127.0.0.1:8100/GLV/setPasscode/',
									data : SaveUserAction
								}).then(function(response) {
									$("#cutit").animate({
							            top: '100px'
							        });
									$("#curtain1").animate({
										width : 20
									}, 1000);
									$("#curtain2").animate({
										width : 20
									}, 1000);

						}, function(error) {
							console.log(error);

						});
					}

				});
