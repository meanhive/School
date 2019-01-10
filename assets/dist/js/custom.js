// Student Admission Form Validation
//  $(function() {
    
  var v =  $("#student-admission").validate({
    
        rules: {
            register_number: "required",
            joining_date: "required",
           	course: { required: true },
           	batch: { required: true },
           	role: "required",
           	first_name: "required",
           	gender: { required: true },
           	date_of_birth: "required",
           	present_address: "required",
            email: {
                required: true,
                email: true
            },
            guardian_name: "required",
            relation: "required",
            mobile:{
                required: true,
                minlength: 10,
                maxlength:10,
            },
            guardian_email: {
                required: true,
                email: true
            },
            registration: "required",
            vacating: "required",
            // subject: "required",            
            // message: "required"
        },
        
        
        messages: {
            register_number: "<span style='color:red'>Please enter register number</span>",  
            joining_date: "<span style='color:red'>Please enter joining date</span>", 
            course: "<span style='color:red'>Please select course</span>",            
            batch: "<span style='color:red'>Please select batch</span>",   
            role: "<span style='color:red'>Please enter role</span>",
            first_name: "<span style='color:red'>Please enter First Name</span>",
            gender: "<span style='color:red'>Please select gender</span>",   
            date_of_birth: "<span style='color:red'>Please select Date of Birth</span>",  
            present_address: "<span style='color:red'>Please enter present address</span>",  
            email: { 
                required: "<span style='color:red'>Please Provide a Email ID</span>",
                email: "<span style='color:red'>Please enter a valid email address</span>"
              },
            guardian_name: "<span style='color:red'>Please enter Guardian Name</span>",  
            relation: "<span style='color:red'>Please enter Relation</span>",  
            mobile: {
                required: "<span style='color:red'>Please Provide Mobile Number</span>",
                minlength: "<span style='color:red'>Please Enter Valid Mobile Number</span>",
                maxlength: "<span style='color:red'>Please Enter Valid Mobile Number</span>",
            },
            guardian_email: { 
                required: "<span style='color:red'>Please Provide a Email ID</span>",
                email: "<span style='color:red'>Please enter a valid email address</span>"
            },
            registration: "<span style='color:red'>Please select registration date</span>",  
            vacating: "<span style='color:red'>Please select vacating date</span>",  
            // subject:"<span style='color:red'>Please Enter Subject</span>",
            // message: "<span style='color:red'>Please enter your message</span>"
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

 // });



 // Institute Details
$(function() {
    
    $("#institute-details").validate({
    
        rules: {
            institute_name: "required",
            institute_address: "required",
            institute_email : {
                required: true,
                email: true
                },
            institute_mobile:{
                required: true,
                minlength: 10,
                maxlength:10,
                number: true,
                },
            admin_contact_person: "required",
            institute_code: "required",             
            institute_logo: {
                required: true, 
                accept: "image/jpeg, image/pjpeg"
                 }
        },
        
        
        messages: {
            institute_name: "<span style='color:red'>Please enter Institute Name</span>",  
            institute_address: "<span style='color:red'>Please enter Institute Address</span>", 
            institute_mobile: { 
                required: "<span style='color:red'>Please Provide a Email ID</span>",
                email: "<span style='color:red'>Please enter a valid email address</span>"
                },
            institute_mobile: {
                required: "<span style='color:red'>Please Provide Mobile Number</span>",
                minlength: "<span style='color:red'>Please Enter Valid Mobile Number</span>",
                maxlength: "<span style='color:red'>Please Enter Valid Mobile Number</span>",
                number: "<span style='color:red'>Please Enter Number Only</span>",
                },
            admin_contact_person: "<span style='color:red'>Please enter Admin Contact Number</span>", 
            institute_code: "<span style='color:red'>Please enter Institution Code</span>", 
                },
            institute_logo: {
                required: "<span style='color:red'>Please Upload Institution Logo</span>", 
                accept: "<span style='color:red'>Please Upload only jpeg or png</span>", 
                },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

 // Add Enquiry
$(function() {
    
    $("#add_enquiry_form").validate({
    
        rules: {
            course: { required: true },
            batch: { required: true },
            enquiry_date: {
                required : true,
                //date : true,             
            },
            institute_email : {
                required: true,
                email: true
                },
            institute_mobile:{
                required: true,
                minlength: 10,
                maxlength:10,
                number: true,
                },
            admin_contact_person: "required",
            institute_code: "required",             
            institute_logo: {
                required: true, 
                accept: "image/jpeg, image/pjpeg"
                 }
        },
        
        
        messages: {
            course: "<span style='color:red'>Please select course</span>",            
            batch: "<span style='color:red'>Please select batch</span>",   
            enquiry_date: {
                required : "<span style='color:red'>Please select Enquiry Date</span>",
                //date : "<span style='color:red'>Please select course</span>",             
            },




            institute_mobile: { 
                required: "<span style='color:red'>Please Provide a Email ID</span>",
                email: "<span style='color:red'>Please enter a valid email address</span>"
                },
            institute_mobile: {
                required: "<span style='color:red'>Please Provide Mobile Number</span>",
                minlength: "<span style='color:red'>Please Enter Valid Mobile Number</span>",
                maxlength: "<span style='color:red'>Please Enter Valid Mobile Number</span>",
                number: "<span style='color:red'>Please Enter Number Only</span>",
                },
            admin_contact_person: "<span style='color:red'>Please enter Admin Contact Number</span>", 
            institute_code: "<span style='color:red'>Please enter Institution Code</span>", 
                },
            institute_logo: {
                required: "<span style='color:red'>Please Upload Institution Logo</span>", 
                accept: "<span style='color:red'>Please Upload only jpeg or png</span>", 
                },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

 // Add Books
$(function() {
    
    $("#add_books").validate({
    
        rules: {
            book_isbn: "required",
            book_no: "required",
            title: "required",
            author: "required",
            edition: "required",
            book_category: { required: true },
            publishers: "required",
            no_of_copies: "required",
            shelf_no: "required",
            book_position: "required",
            book_cost: "required",
            language: "required",
            book_condition: {required: true},
            
        },
        
        
        messages: {
            book_isbn: "<span style='color:red'>Please enter Book ISBN No</span>",  
            book_no: "<span style='color:red'>Please enter Book No</span>", 
            title: "<span style='color:red'>Please enter Book Title</span>",  
            author: "<span style='color:red'>Please enter Book Author</span>",  
            edition: "<span style='color:red'>Please enter Book Edition</span>",  
            book_category: "<span style='color:red'>Please Select Book Category</span>",  
            publishers: "<span style='color:red'>Please Enter Publisher</span>",  
            no_of_copies: "<span style='color:red'>Please Enter No of Copies</span>",  
            shelf_no: "<span style='color:red'>Please Enter Shelf No</span>",  
            book_position: "<span style='color:red'>Please Enter Book Position</span>", 
            book_cost: "<span style='color:red'>Please Enter Book Cost</span>", 
            language: "<span style='color:red'>Please Enter Language</span>", 
            book_condition: "<span style='color:red'>Please Select Book Condition</span>", 
                },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });


 // Issue Books
$(function() {
    
    $("#issue_book").validate({
    
        rules: {
            user: { required: true },
            roll_no: "required",
            employee_id: "required",
            book_issue_date: "required",
            due_date: {
                        required: true, 

                        EndDate: { greaterThan: "#book_issue_date" }
              },
            
        },
        
        
        messages: {
            user: "<span style='color:red'>Please Select User</span>",  
            roll_no: "<span style='color:red'>Please enter Roll No</span>", 
            employee_id: "<span style='color:red'>Please enter Employee ID</span>",  
            book_issue_date: "<span style='color:red'>Please Select Book Issue Date</span>",  
            due_date: {
                    required:    "<span style='color:red'>Please Select Due Date</span>",  
                    EndDate:{greaterThan: "<span style='color:red'>Select Due Date greaterThan this</span>",  } ,
                    },
                },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });


 // Report for library
$(function() {
    
    $("#report_for_library").validate({
    
        rules: {
            report_for: { required: true },
            from_date: "required",
            to_date: "required",
            
        },
        
        
        messages: {
            report_for: "<span style='color:red'>Please Select Report For</span>", 
            from_date: "<span style='color:red'>Please Select From Date</span>", 
            to_date: "<span style='color:red'>Please Select To Date</span>", 
                },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

 // Add Invoice
$(function() {
    
    $("#add_invoice").validate({
    
        rules: {
            class: { required: true },
            section: {required: true},
            student: {required: true},
            title: "required",
            description: "required",
            date: "required",
            total: "required",
            payment: "required",
            status: {required: true},
            method: {required: true},
            
        },
        
        
        messages: {
            class: "<span style='color:red'>Please Select Class</span>", 
            section: "<span style='color:red'>Please Select Section</span>", 
            student: "<span style='color:red'>Please Select Student</span>", 
            title:  "<span style='color:red'>Please Enter Title</span>", 
            description: "<span style='color:red'>Please Enter Description</span>", 
            date: "<span style='color:red'>Please Select Date</span>", 
            total: "<span style='color:red'>Please Enter Total</span>", 
            payment: "<span style='color:red'>Please Enter Payment</span>", 
            status: "<span style='color:red'>Please Select Status</span>", 
            method: "<span style='color:red'>Please Select Method</span>"                
             },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

 // Add Invoice
$(function() {
    
    $("#bulk_invoice").validate({
    
        rules: {
            class: { required: true },
            section: {required: true},
            title: "required",
            description: "required",
            date: "required",
            total: "required",
            payment: "required",
            status: {required: true},
            method: {required: true},
            
        },
        
        
        messages: {
            class: "<span style='color:red'>Please Select Class</span>", 
            section: "<span style='color:red'>Please Select Section</span>", 
            title:  "<span style='color:red'>Please Enter Title</span>", 
            description: "<span style='color:red'>Please Enter Description</span>", 
            date: "<span style='color:red'>Please Select Date</span>", 
            total: "<span style='color:red'>Please Enter Total</span>", 
            payment: "<span style='color:red'>Please Enter Payment</span>", 
            status: "<span style='color:red'>Please Select Status</span>", 
            method: "<span style='color:red'>Please Select Method</span>"                
             },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

 // Hostel Details
$(function() {
    
    $("#hostel_details_form").validate({
    
        rules: {
            hostel_type: { required: true },
            hostel_name: "required",
            hostel_address: "required",
            hostel_phone_number: {
               // phoneIN: true,
                required: true
            },
            warden_name: "required",
            warden_address: "required",
            warden_phone_number: {
               // phoneIN: true,
                required: true
            },
        },
        
        
        messages: {
            hostel_type: "<span style='color:red'>Please Select Hostel Type</span>", 
            hostel_name: "<span style='color:red'>Please Enter Hostel Name</span>", 
            hostel_address: "<span style='color:red'>Please Enter Hostel Address</span>", 
            hostel_phone_number:  {
               // phoneIN: "<span style='color:red'>Please Enter PhoneUS</span>", 
                required: "<span style='color:red'>Please Enter Phone Number</span>"
                        },
            warden_name: "<span style='color:red'>Please Enter Warden Number</span>", 
            warden_address: "<span style='color:red'>Please Enter Warden Address</span>", 
            warden_phone_number:  {
               // phoneIN: "<span style='color:red'>Please Enter PhoneUS</span>", 
                required: "<span style='color:red'>Please Enter Phone Number</span>"
                        },
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });


 // Hostel Details
$(function() {
    
    $("#hostel_type_form").validate({
    
        rules: {
            hostel_type: "required",
        },
        
        
        messages: {
            hostel_type: "<span style='color:red'>Please Enter Hostel Type</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 }); 


 // Add Hostel Room 
$(function() {
    
    $("#add_hostel_room_form").validate({
    
        rules: {
            hostel_type: {required: true},
            hostel_name: {required: true},
            floor_name: "required",
        },
        
        
        messages: {
            hostel_type: "<span style='color:red'>Please Select Hostel Type</span>", 
            hostel_name: "<span style='color:red'>Please Select Hostel Name</span>", 
            floor_name: "<span style='color:red'>Please Enter Floor Name</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

//Hostel Registration Form
$(function() {
    
    $("#hostel_registration_form").validate({
    
        rules: {
            user_type: {required: true},
            student_name: "required",
            employee_name: "required",
            hostel_type: {required: true},
            hostel_name: {required: true},
            hostel_room: {required: true},
            hostel_registration_date: "required",
        },
        
        
        messages: {
            user_type: "<span style='color:red'>Please Select User Type</span>", 
            student_name: "<span style='color:red'>Please Enter Student Name</span>",
            employee_name: "<span style='color:red'>Please Enter Employee Name</span>", 
            hostel_type: "<span style='color:red'>Please Select Hostel Type</span>", 
            hostel_name: "<span style='color:red'>Please Select Hostel Name</span>",
            hostel_room: "<span style='color:red'>Please Select Hostel Room</span>", 
            hostel_registration_date: "<span style='color:red'>Please Enter Hostel Registration Date</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

//Hostel Register
$(function() {
    
    $("#hostel_register").validate({
    
        rules: {
            user_type: {required: true},
            student_name: "required",
            employee_name: "required",
            hostel_type: {required: true},
            hostel_name: {required: true},
            hostel_room: {required: true},
            in_out: { required: true },
            date: "required",
            time: "required",
        },
        
        
        messages: {
            user_type: "<span style='color:red'>Please Select User Type</span>", 
            student_name: "<span style='color:red'>Please Enter Student Name</span>",
            employee_name: "<span style='color:red'>Please Enter Employee Name</span>", 
            hostel_type: "<span style='color:red'>Please Select Hostel Type</span>", 
            hostel_name: "<span style='color:red'>Please Select Hostel Name</span>",
            hostel_room: "<span style='color:red'>Please Select Hostel Room</span>", 
            in_out: "<span style='color:red'>Please Select In/Out</span>",  
            date: "<span style='color:red'>Please Select Date</span>", 
            time: "<span style='color:red'>Please Select Time</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

//Add Vendor
$(function() {
    
    $("#add_vendor").validate({
    
        rules: {
            company_name: "required",
            company_phone: "required",
            company_email: {
                required: true,
                email: true
            },
            name: "required",
            phone: "required",
            bank_name: "required",
            branch_name: "required",
            account_no: "required",
            ifsc_code: "required",
        },
        
        
        messages: {
            company_name: "<span style='color:red'>Please Enter Company Name</span>", 
            company_phone: "<span style='color:red'>Please Enter Company Phone Number</span>", 
            company_email:{
                required:  "<span style='color:red'>Please Enter Company Email ID</span>", 
                email:  "<span style='color:red'>Please Enter Valid Email ID</span>", 
                    },
            name: "<span style='color:red'>Please Enter Name</span>", 
            phone: "<span style='color:red'>Please Enter Phone Number</span>", 
            bank_name: "<span style='color:red'>Please Enter Bank Name</span>",             
            branch_name: "<span style='color:red'>Please Enter Branch Name</span>", 
            account_no: "<span style='color:red'>Please Enter Account Number</span>", 
            ifsc_code: "<span style='color:red'>Please Enter IFSC Code</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });


//Add Vendor Category
$(function() {
    
    $("#add_vendor_category").validate({
    
        rules: {
            vendors: {required: true },
            category_name: "required",
        },
        
        
        messages: {
            vendors: "<span style='color:red'>Please Select Vendors</span>", 
            category_name: "<span style='color:red'>Please Enter Category Name</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 }); 

//Add Inventory Item
$(function() {
    
    $("#add_inventory_item").validate({
    
        rules: {
            vendors: {required: true },
            category: {required: true },
            inventory_item: "required",
            quantity: "required",
            re_order: "required",
        },
        
        
        messages: {
            vendors: "<span style='color:red'>Please Select Vendors</span>", 
            category: "<span style='color:red'>Please Select Category</span>", 
            inventory_item: "<span style='color:red'>Please Enter Inventory Item</span>",
            quantity: "<span style='color:red'>Please Enter Quantity</span>",
            re_order: "<span style='color:red'>Please Enter Quantity</span>",
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 }); 

//Add Class Form
$(function() {
    
    $("#add_class_form").validate({
    
        rules: {
            class_name: "required",
            min_atten_perc: "required",
            total_working_days: "required",
            syllabus_name: {required: true },
        },
        
        
        messages: {
            class_name: "<span style='color:red'>Please Enter Class Name</span>", 
            min_atten_perc: "<span style='color:red'>Please Enter Minimum Attendance Percentage</span>",
            total_working_days: "<span style='color:red'>Please Enter Total Working Days</span>", 
            syllabus_name: "<span style='color:red'>Please Select Syllabus Name</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 }); 

//Add Section Form
$(function() {
    
    $("#add_section_form").validate({
    
        rules: {
            class: {required: true},
            class_name: "required",
            max_no_of_stud: "required",
        },
        
        
        messages: {
            class: "<span style='color:red'>Please Select Class</span>", 
            class_name: "<span style='color:red'>Please Enter Class Name</span>", 
            max_no_of_stud: "<span style='color:red'>Please Enter Maximum Number of Students</span>",             
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

 //Class Teacher Allocation
$(function() {
    
    $("#class_teacher_allocation_form").validate({
    
        rules: {
            class: {required: true},
            section: {required: true},
            teacher: {required: true},
        },
        
        
        messages: {
            class: "<span style='color:red'>Please Select Class</span>", 
            section: "<span style='color:red'>Please Select Section</span>", 
            teacher: "<span style='color:red'>Please Select Teacher</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 }); 


 //Add Subject
$(function() {
    
    $("#add_subjects_form").validate({
    
        rules: {
            subject_name: "required",
            subject_code: "required",
        },
        
        
        messages: {
            subject_name: "<span style='color:red'>Please Enter Subject Name</span>", 
            subject_code: "<span style='color:red'>Please Enter Subject Code</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

 //Assign Subject
$(function() {
    
    $("#asign_subjects_form").validate({
    
        rules: {
            class: {required: true},
            section: {required: true},
            subject: {required: true},
        },
        
        
        messages: {
            class: "<span style='color:red'>Please Select Class</span>", 
            section: "<span style='color:red'>Please Select Section</span>", 
            subject: "<span style='color:red'>Please Select Subject</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });


 //Subject Allocation
$(function() {
    
    $("#subject_allocation_form").validate({
    
        rules: {
            department: {required: true},
            employee_name: {required: true},
            class: {required: true},
            section: {required: true},
            subject: {required: true},
        },
        
        
        messages: {
            department: "<span style='color:red'>Please Select Department</span>", 
            employee_name: "<span style='color:red'>Please Select Employee Name</span>", 
            class: "<span style='color:red'>Please Select Class</span>", 
            section: "<span style='color:red'>Please Select Section</span>", 
            subject: "<span style='color:red'>Please Select Subject</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 }); 

 //Elective Subject Allocation
$(function() {
    
    $("#elective_subject_allocation_form").validate({
    
        rules: {
            class: {required: true},
            section: {required: true},
            subject: {required: true},
            student: {required: true},
        },
        
        
        messages: { 
            class: "<span style='color:red'>Please Select Class</span>", 
            section: "<span style='color:red'>Please Select Section</span>", 
            subject: "<span style='color:red'>Please Select Subject</span>",
            student: "<span style='color:red'>Please Select Student</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 }); 

 //Lesson Planning
$(function() {
    
    $("#lesson_planning_form").validate({
    
        rules: {
            class: {required: true},
            section: {required: true},
            subject: {required: true},
            teacher: {required: true},
            topic: "required",
        },
        
        
        messages: { 
            class: "<span style='color:red'>Please Select Class</span>", 
            section: "<span style='color:red'>Please Select Section</span>", 
            subject: "<span style='color:red'>Please Select Subject</span>",
            teacher: "<span style='color:red'>Please Select Teacher</span>",
            topic: "<span style='color:red'>Please Enter Topic</span>", 
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });

 //Add New Teacher 
$(function() {
    
    $("#add_new_teacher_form").validate({
    
        rules: {
            name: "required",
            date_of_birth: "required",
            address: "required",
            mobile:{
                required: true,
                minlength: 10,
                maxlength:10,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6,
            },
        },
        
        
        messages: { 
            name: "<span style='color:red'>Please Enter Name</span>", 
            date_of_birth: "<span style='color:red'>Please Enter Date of Birth</span>", 
            address: "<span style='color:red'>Please Enter address</span>",
            mobile: {
                required: "<span style='color:red'>Please Provide Mobile Number</span>",
                minlength: "<span style='color:red'>Please Enter Valid Mobile Number</span>",
                maxlength: "<span style='color:red'>Please Enter Valid Mobile Number</span>",
            },
            email: { 
                required: "<span style='color:red'>Please Provide a Email ID</span>",
                email: "<span style='color:red'>Please enter a valid email address</span>",
              },
            password: {
                required: "<span style='color:red'>Please Enter Password</span>",
                minlength: "<span style='color:red'>Password at least 6 characters</span>",
            },
             },

        
        submitHandler: function(form) {
            form.submit();
        }
    });

 });