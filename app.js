var myApp = angular.module("school", ['ngRoute']);

/**  Configure the Routes **/
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	// Home
	//.when("/",{
	//	templateUrl: "components/dashboard/dashboard.html",
	//	controller : "dashboardCtrl"
	//})
	.when("/header",{
		templateUrl : "components/header/header.html",
		controller : "headerCtrl"
	})
	.when("/sidebar",{
		templateUrl : "components/sidebar/sidebar.html",
		controller : "sidebarCtrl"
	})
	.when("/footer",{
		templateUrl : "components/footer/footer.html",
		controller : "footerCtrl"
	})
	.when("/addBankDetails",{
		templateUrl : "components/addBankDetails/addBankDetails.html",
		controller : "addBankDetailsCtrl"
	})
	.when("/error",{
		templateUrl : "components/404/404.html",
		controller : "404Ctrl"
	})
	.when("/addBooks",{
		templateUrl : "components/addBooks/addBooks.html",
		controller : "addBooksCtrl"
	})
	.when("/studentAdmission",{
		templateUrl : "components/studentAdmission/studentAdmission.html",
		controller : "studentAdmissionCtrl"
	})
	.when("/studentAttendance",{
		templateUrl : "components/studentAttendance/studentAttendance.html",
		controller : "studentAttendanceCtrl"
	})
	.when("/studentCategory",{
		templateUrl : "components/studentCategory/studentCategory.html",
		controller : "studentCategoryCtrl"
	})
	.when("/studentList",{
		templateUrl : "components/studentList/studentList.html",
		controller : "studentListCtrl"
	})
	.when("/teacher",{
		templateUrl : "components/teacher/teacher.html",
		controller : "teacherCtrl"
	})
	.otherwise({ redirectTo: '/' })
}]); 

/* Remove hash error on url like #%2f */
myApp.config(['$locationProvider', function($locationProvider) {
  	$locationProvider.hashPrefix('');
}]);


