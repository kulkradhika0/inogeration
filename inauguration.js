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
		case 'Ys9h5DhTHWpNteT3':
			$scope.InogDetails.Name = "Admin";
			$scope.InogDetails.SecretKey = "Ys9h5DhTHWpNteT3";
			$scope.InogDetails.AuthCode = "none";
			UserService.WriteCookie($scope.InogDetails);
			window.location='admin.html';
			break;
		case 'guudN5BNfvZRwSA6':
			$scope.InogDetails.Name = "Frederic";
			$scope.InogDetails.SecretKey = "guudN5BNfvZRwSA6";
			$scope.InogDetails.AuthCode = "1234";
			UserService.WriteCookie($scope.InogDetails);
			window.location = 'main.html';
			break;
		case 'wDCP6rH7HwYab8mJ':
			$scope.InogDetails.Name = "Ivo";
			$scope.InogDetails.SecretKey = "wDCP6rH7HwYab8mJ";
			$scope.InogDetails.AuthCode = "3456";
			UserService.WriteCookie($scope.InogDetails);
			window.location = 'main.html';
			break;
		case '7xumRYY27UVH9EFa':
			$scope.InogDetails.Name = "Tatiana";
			$scope.InogDetails.SecretKey = "7xumRYY27UVH9EFa";
			$scope.InogDetails.AuthCode = "5678";
			UserService.WriteCookie($scope.InogDetails);
			window.location = 'main.html';
			break;
		case '3vBeQempbqERuPZm':
			$scope.InogDetails.Name = "Vijay";
			$scope.InogDetails.SecretKey = "3vBeQempbqERuPZm";
			$scope.InogDetails.AuthCode = "7890";
			UserService.WriteCookie($scope.InogDetails);
			window.location = 'main.html';
			break;
		case '3vBeQempbqERuPZm':
			$scope.InogDetails.Name = "Sudhir";
			$scope.InogDetails.SecretKey = "3vBeQempbqERuPZm";
			$scope.InogDetails.AuthCode = "7890";
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
						// this is to get current working code
						$http({
							method : 'POST',
							url : 'http://ec2-18-218-82-100.us-east-2.compute.amazonaws.com:8100/GLV/getPasscode/',
						})
								.then(
										function(response) {
											console.log(response);
											$scope.currentPasscode = response.data.passcode;
											if ($scope.currentPasscode == "0000") {
												$scope.open_curtain();
												$scope.waitingMsg = null;

											} else {
												$('body').css(
														'background-color',
														'black');
												$('body').css(
														'background-image',
														'url("backim.jpg")');
												$('#curtain1').css('width',
														'50%');
												$('#curtain2').css('width',
														'50%');
												$('body').css(
														'background-size',
														'cover');
												document
														.getElementById("marquee").style.display = "none";
												switch ($scope.currentPasscode) {
												case 1234:
													$scope.waitingMsg = "Waiting for Frederic to inaugurate..";
													break;
												case 3456:
													$scope.waitingMsg = "Waiting for Ivo to inaugurate..";
													break;
												case 5678:
													$scope.waitingMsg = "Waiting for Tatiana to inaugurate..";
													break;
												case 7890:
													$scope.waitingMsg = "Waiting for Vijay to inaugurate..";
													break;
												default:
													$scope.waitingMsg = "Waiting for Sudhir to inaugurate..";
													break;
												
												}

											}
										}, function(error) {
											console.log(error);
										});

					};
					var ajaxCall = function() {
						$http({
							method : 'GET',
							url : 'http://ec2-18-218-82-100.us-east-2.compute.amazonaws.com:8100/GLV/getPasscode/'
						})
								.then(
										function(response) {
											$scope.currentPasscode = response.data.passcode;
											console.log($scope.currentPasscode);
											if ($scope.currentPasscode == "0000") {
												$scope.open_curtain();
												$scope.waitingMsg = null;
											} else {
												$('body').css(
														'background-color',
														'black');
												// $('body').css('background-image',
												// 'url("curxx.jpeg")');
												$('body').css(
														'background-image',
														'url("backim.jpg")');
												$('#curtain1').css('width',
														'50%');
												$('#curtain2').css('width',
														'50%');
												$('body').css(
														'background-size',
														'cover');
												document
														.getElementById("marquee").style.display = "none";
												switch ($scope.currentPasscode) {
												case 1234:
													$scope.waitingMsg = "Waiting for Frederic to inaugurate..";
													break;
												case 3456:
													$scope.waitingMsg = "Waiting for Ivo to inaugurate..";
													break;
												case 5678:
													$scope.waitingMsg = "Waiting for Tatiana to inaugurate..";
													break;
												case 7890:
													$scope.waitingMsg = "Waiting for Vijay to inaugurate..";
													break;
												default:
													$scope.waitingMsg = "Waiting for Sudhir to inaugurate..";
													break;
												
												
												}


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
						document.getElementById("marquee").style.display = "block";
						var audio = document.getElementById("audio");
						audio.play();

					}
					

					$scope.SaveCode = function(code) {
						var SaveUserAction = {};
						var passcode;
						switch (code) {
						case 1234:
							passcode = 3456;
							console.log(code);
							break;
						case 3456:
							passcode = 5678;
							console.log(code);
							break;
						case 5678:
							passcode = 7890;
							console.log(code);
							break;
						case 7890:
							passcode = 0000;
							console.log(code);
							break;
							
						
						
						}
						SaveUserAction.passcode = passcode;
						
						var config = {
							headers : {
								'Content-Type' : 'Content-Type: application/json; charset=utf-8',
								'Access-Control-Allow-Origin' : '*'

							}
						}
						
						$http({
							method : 'POST',
							url : 'http://ec2-18-218-82-100.us-east-2.compute.amazonaws.com:8100/GLV/setPasscode/',
							data : SaveUserAction
						}).then(function(response) {
							$("#cutit").animate({
								top : '100px'
							}, 250, function() {
								$("#curtain1").animate({
									width : 20
								}, 1000);
								$("#curtain2").animate({
									width : 20
								}, 1000);
							});
							

						}, function(error) {
							console.log(error);

						});
					}

				});
appList
.controller(
		'AdminController',
		function($scope, $interval, $http, $window, $cookies,
				UserService) {
			$scope.init = function() {

				var cookieData = UserService.ReadCookie();
				console.log(cookieData);
				if (cookieData == null) {
					window.location = 'index.html';
				}
				$scope.InogDetails = cookieData;
				// this is to get current working code
				$http({
					method : 'POST',
					url : 'http://ec2-18-218-82-100.us-east-2.compute.amazonaws.com:8100/GLV/getPasscode/',
				})
						.then(
								function(response) {
									console.log(response);
									$scope.currentPasscode = response.data.passcode;
									if ($scope.currentPasscode == "0000") {
										
										$scope.adminAction = true;

									} else {
										$scope.adminAction = false;
										
										switch ($scope.currentPasscode) {
										case 1234:
											$scope.waitingMsg = "Waiting for Frederic to inaugurate..";
											break;
										case 3456:
											$scope.waitingMsg = "Waiting for Ivo to inaugurate..";
											break;
										case 5678:
											$scope.waitingMsg = "Waiting for Tatiana to inaugurate..";
											break;
										case 7890:
											$scope.waitingMsg = "Waiting for Vijay to inaugurate..";
											break;
										default:
											$scope.waitingMsg = "Waiting for Sudhir to inaugurate..";
											break;
										
										}

									}
								}, function(error) {
									console.log(error);
								});

			};
			var ajaxCall = function() {
				$http({
					method : 'GET',
					url : 'http://ec2-18-218-82-100.us-east-2.compute.amazonaws.com:8100/GLV/getPasscode/'
				})
						.then(
								function(response) {
									$scope.currentPasscode = response.data.passcode;
									console.log($scope.currentPasscode);
									if ($scope.currentPasscode == "0000") {
										$scope.adminAction = true;
									} else {
										$scope.adminAction = false;
										switch ($scope.currentPasscode) {
										case 1234:
											$scope.waitingMsg = "Waiting for Frederic to inaugurate..";
											break;
										case 3456:
											$scope.waitingMsg = "Waiting for Ivo to inaugurate..";
											break;
										case 5678:
											$scope.waitingMsg = "Waiting for Tatiana to inaugurate..";
											break;
										case 7890:
											$scope.waitingMsg = "Waiting for Vijay to inaugurate..";
											break;
										default:
											$scope.waitingMsg = "Waiting for Sudhir to inaugurate..";
											break;
										
										
										}


									}

								}, function(error) {
									console.log(error);
								});
			}

			var interval = $interval(ajaxCall, 1500)

			$scope.startLaunch = function()
			{

				var startLaunchObj = {};

				startLaunchObj.passcode = 1234;
				
				var config = {
					headers : {
						'Content-Type' : 'Content-Type: application/json; charset=utf-8',
						'Access-Control-Allow-Origin' : '*'

					}
				}
				
				$http({
					method : 'POST',
					url : 'http://ec2-18-218-82-100.us-east-2.compute.amazonaws.com:8100/GLV/setPasscode/',
					data : startLaunchObj
				}).then(function(response) {
					window.location='main.html';
					
				}, function(error) {
					console.log(error);

				});
			
			}

			
		});
