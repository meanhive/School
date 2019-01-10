myApp.controller('studentAdmissionCtrl', function($scope, $http, $rootScope) {

    $scope.classes = ['Nursery', 'LKG', 'UKG', '1st Std', '2nd Std', '3rd Std', '4th Std', '5th Std', '6th Std', '7th Std', '8th Std', '9th Std', '10th Std'];
    $scope.sections = ['A Section', 'B Section', 'C Section', 'D Section'];
    $scope.genders = ['Male', 'Female'];
    $scope.bloodgroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
    $scope.nations = ['America', 'India', 'Japan'];
    $scope.categories = ['I A', 'II A', 'III A', 'I B', 'II B', 'II B', 'Sc', 'ST'];
    $scope.states = ['Karnataka', 'Andra Pradesh', 'Telangana', 'Tamil Nadu'];
    $scope.routes = [121, 122, 123, 125, 126];
    $scope.destinations = ['yalahanka', 'mattikeri', 'KBS', 'YPR'];
    $scope.hostels = ['Block 1', 'Block 2', 'Block 3', 'Block 4'];
    $scope.rooms = ['Room 1', 'Room 2', 'Room 3'];

    $rootScope.cls = $scope.classes;

    $scope.admission = [{
        registerNumber: "",
        joiningDate: "",
        selectClass: "",
        selectSection: "",
        roleNumber: "",
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: "",
        bloodGroup: "",
        birthPlace: "",
        nationality: "",
        motherTongue: "",
        category: "",
        religion: "",
        permanentAddress: "",
        presentAddress: "",
        city: "",
        pin: "",
        country: "",
        state: "",
        phone: "",
        mobile: "",
        email: "",
        fatherName: "",
        fatherMobile: "",
        fatherJob: "",
        motherName: "",
        motherMobile: "",
        motherJob: "",
        guardian: "",
        relation: "",
        education: "",
        occupation: "",
        income: "",
        guardianPermanentAddress: "",
        guardianCity: "",
        guardianCountry: "",
        guardianPhone: "",
        guardianMobile: "",
        guardianEmail: "",
        schoolName: "",
        schoolAddress: "",
        qualification: "",
        transport: "",
        hostel: "",
        route: "",
        destination: "",
        startDate: "",
        endDate: "",
        hostelRoom: "",
        registrationDate: "",
        VacatingDate: "",
        attachment: ""
    }];

    $scope.studentAdmission = {};
    $scope.message = "";

    $scope.vm = {};
    $scope.vm.myClick = function($event) {
        if ($event == true) {
            alert($scope.admission[0].presentAddress);
            $scope.admission[0].guardianPermanentAddress = $scope.admission[0].presentAddress;
        } else {
            alert("Paste");
            $scope.admission[0].guardianPermanentAddress = "";
        }

    };

    //console.log($scope.admission[0].guardianPermanentAddress);    
    $scope.studentAdmissionDone = function() {
        var registerNumber = $scope.admission[0].registerNumber;
        var joiningDate = $scope.admission[0].joiningDate;
        var selectClass = $scope.admission[0].selectClass;
        var selectSection = $scope.admission[0].selectSection;
        var roleNumber = $scope.admission[0].roleNumber;
        var firstName = $scope.admission[0].firstName;
        var middleName = $scope.admission[0].middleName;
        var lastName = $scope.admission[0].lastName;
        var dob = $scope.admission[0].dob;
        var gender = $scope.admission[0].gender;
        var bloodGroup = $scope.admission[0].bloodGroup;
        var birthPlace = $scope.admission[0].birthPlace;
        var nationality = $scope.admission[0].nationality;
        var motherTongue = $scope.admission[0].motherTongue;
        var category = $scope.admission[0].category;
        var religion = $scope.admission[0].religion;
        var permanentAddress = $scope.admission[0].permanentAddress;
        var presentAddress = $scope.admission[0].presentAddress;
        var city = $scope.admission[0].city;
        var pin = $scope.admission[0].pin;
        var country = $scope.admission[0].country;
        var state = $scope.admission[0].state;
        var phone = $scope.admission[0].phone;
        var mobile = $scope.admission[0].mobile;
        var email = $scope.admission[0].email;
        var fatherName = $scope.admission[0].fatherName;
        var fatherMobile = $scope.admission[0].fatherMobile;
        var fatherJob = $scope.admission[0].fatherJob;
        var motherName = $scope.admission[0].motherName;
        var motherMobile = $scope.admission[0].motherMobile;
        var motherJob = $scope.admission[0].motherJob;
        var guardian = $scope.admission[0].guardian;
        var relation = $scope.admission[0].relation;
        var education = $scope.admission[0].education;
        var occupation = $scope.admission[0].occupation;
        var income = $scope.admission[0].income;
        var guardianPermanentAddress = $scope.admission[0].guardianPermanentAddress;
        var guardianCity = $scope.admission[0].guardianCity;
        var guardianCountry = $scope.admission[0].guardianCountry;
        var guardianPhone = $scope.admission[0].guardianPhone;
        var guardianMobile = $scope.admission[0].guardianMobile;
        var guardianEmail = $scope.admission[0].guardianEmail;
        var schoolName = $scope.admission[0].schoolName;
        var schoolAddress = $scope.admission[0].schoolAddress;
        var qualification = $scope.admission[0].qualification;
        var transport = $scope.admission[0].transport;
        var hostel = $scope.admission[0].hostel;
        var route = $scope.admission[0].route;
        var destination = $scope.admission[0].destination;
        var startDate = $scope.admission[0].startDate;
        var endDate = $scope.admission[0].endDate;
        var hostelRoom = $scope.admission[0].hostelRoom;
        var registrationDate = $scope.admission[0].registrationDate;
        var VacatingDate = $scope.admission[0].VacatingDate;
        var attachment = $scope.admission[0].attachment;

        $scope.data = {
            'registerNumber': registerNumber,
            'joiningDate': joiningDate,
            'selectClass': selectClass,
            'selectSection': selectSection,
            'roleNumber': roleNumber,
            'firstName': firstName,
            'middleName': middleName,
            'lastName': lastName,
            'dob': dob,
            'gender': gender,
            'bloodGroup': bloodGroup,
            'birthPlace': birthPlace,
            'nationality': nationality,
            'motherTongue': motherTongue,
            'category': category,
            'religion': religion,
            'permanentAddress': permanentAddress,
            'presentAddress': presentAddress,
            'city': city,
            'pin': pin,
            'country': country,
            'state': state,
            'phone': phone,
            'mobile': mobile,
            'email': email,
            'fatherName': fatherName,
            'fatherMobile': fatherMobile,
            'fatherJob': fatherJob,
            'motherName': motherName,
            'motherMobile': motherMobile,
            'motherJob': motherJob,
            'guardian': guardian,
            'relation': relation,
            'education': education,
            'occupation': occupation,
            'income': income,
            'guardianPermanentAddress': guardianPermanentAddress,
            'guardianCity': guardianCity,
            'guardianCountry': guardianCountry,
            'guardianPhone': guardianPhone,
            'guardianMobile': guardianMobile,
            'guardianEmail': guardianEmail,
            'schoolName': schoolName,
            'schoolAddress': schoolAddress,
            'qualification': qualification,
            'transport': transport,
            'hostel': hostel,
            'route': route,
            'destination': destination,
            'startDate': startDate,
            'endDate': endDate,
            'hostelRoom': hostelRoom,
            'registrationDate': registrationDate,
            'VacatingDate': VacatingDate,
            'attachment': attachment,
        };

        //$scope.admission.push($scope.studentAdmission);        
        //$scope.message = "New student added successfully..!"
        console.log($scope.admission);
    };
});
