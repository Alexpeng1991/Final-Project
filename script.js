$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });

 $('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

(function () {

   // Initialize Firebase
   var config = {
     apiKey: "AIzaSyCvOZNlKWCP8KvDF-OrwqYZsUEfu81cvII",
     authDomain: "mindgro-ed.firebaseapp.com",
     databaseURL: "https://mindgro-ed.firebaseio.com",
     storageBucket: "mindgro-ed.appspot.com",
     messagingSenderId: "636678412189"
   };
   firebase.initializeApp(config);

});
