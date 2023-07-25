//$(function(){
   // $(window).scroll(function(){
        //var positionTop = $('#counter').height();
        //if($(this).scrollTop()>=positionTop){
            $('.spincrement-300').spincrement({
                from: 0,
                to: 300,
                duration: 2000,
                leeway: 50,
                easing: 'spincrementEasing',
                fade: true
            });
            $('.spincrement-2000').spincrement({
                from: 1700,
                to: 2000,
                duration: 2000,
                leeway: 50,
                easing: 'spincrementEasing',
                thousandSeparator: '',
                fade: true
            });
            $('.spincrement-100').spincrement({
                from: 0,
                to: 100,
                duration: 2000,
                leeway: 50,
                easing: 'spincrementEasing',
                fade: true
            });
        //}
    //});
//});





