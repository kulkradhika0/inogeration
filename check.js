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
			$scope.InogDetails.Name = "Guest";
			window.location = 'Temp_Del.html';
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
							url : 'http://127.0.0.1:8100/GLV/getPasscode/',
						}).then(function(response) {
							console.log(response);
							$scope.currentPasscode = response.data.passcode;
							if($scope.currentPasscode == "0000")
							{
							 $scope.open_curtain();
							}
						}, function(error) {
							console.log(error);
						});

					};
					var ajaxCall = function(){
						 $http({
						      method: 'GET',
						      url: 'http://127.0.0.1:8100/GLV/getPasscode/'
						   }).then(function (response){
							   $scope.currentPasscode = response.data.passcode;
								 console.log($scope.currentPasscode);
								 if($scope.currentPasscode == "0000")
										{
										 $scope.open_curtain();
										}
								 
						   },function (error){
							   console.log(error);
						   });
					}

					var interval = $interval(ajaxCall,1500)
					

					
					
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
							url : 'http://127.0.0.1:8100/GLV/setPasscode/',
							data : SaveUserAction
						}).then(function(response) {

						}, function(error) {
							console.log(error);

						});
					}

				});