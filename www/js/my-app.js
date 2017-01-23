// Initialize app
var myApp = new Framework7();

var options = {
  'bgcolor': '#0da6ec',
  'fontcolor': '#fff'
}

var $$ = Dom7;

//Initialize & options



// If we need to use custom DOM library, let's save it to $$ variable:


//Define slides
var welcomescreen_slides = [
  {
    id: 'slide0',
    picture: '<div class="tutorialicon">♥</div>',
    text: 'Welcome to this tutorial. In the <a class="tutorial-next-link" href="#">next steps</a> we will guide you through a manual that will teach you how to use this app.'
  },
  {
    id: 'slide1',
    picture: '<div class="tutorialicon">✲</div>',
    text: 'This is slide 2'
  },
  {
    id: 'slide2',
    picture: '<div class="tutorialicon">♫</div>',
    text: 'This is slide 3'
  },
  {
    id: 'slide3',
    picture: '<div class="tutorialicon">☆</div>',
    text: 'Thanks for reading! Enjoy this app or go to <a class="tutorial-previous-slide" href="#">previous slide</a>.<br><br><a class="tutorial-close-btn" href="#">End Tutorial</a>'
  }
];

var welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);

$$(document).on('click', '.tutorial-close-btn', function () {
  welcomescreen.close();
});

$$('.tutorial-open-btn').click(function () {
  welcomescreen.open();
});

$$(document).on('click', '.tutorial-next-link', function (e) {
  welcomescreen.next();
});

$$(document).on('click', '.tutorial-previous-slide', function (e) {
  welcomescreen.previous();
});

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// $$(document).on('click', '.item-link', function (e) {
//   console.log("this is kiran");
//   var formData={'userId':'nareshmangalagiri@gmail.com','password':'1234','enable':'true'};
//   $$.ajax({
//     url: 'http://139.59.3.231:8080/SpringWithHibernate/validateLogin.do/',
//     data: formData,
//     method: "POST",
//     dataType: 'json',
//     contentType: 'application/json',
//     success: function(data) {
//       console.log(data);
//     },
//     complete: function(xhr, status){
//       console.log(status);
//     }
//   })
// });

// var formData={"userId":"nareshmangalagiri@gmail.com","password":"1234","enable":"true"};

// self.post = function (params)
//      {
//        var deferred = $q.defer();
//        var config = {
//          headers: { 'Content-type': 'application/json' },
//          'dataType': 'json'
//        };
//
//        $http.post(self.url, params, config).success(function (data) {
//          deferred.resolve(data);
//        }).error(function (data) {
//          deferred.reject(data);
//        });
//        return deferred.promise;
//      };

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    // myApp.alert('Here comes About page');
})
