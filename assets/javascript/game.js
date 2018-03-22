$( document ).ready(function(){

    var randNum = Math.floor(Math.random() * (120 - 19 + 1 )) + 19;
    

    $('.ranNumBox').html(randNum );

    $('.box').on('click',function(){

       var demo = $(this).attr('value', randNum);
        var test = $(this).attr('value');

        console.log(demo);





    });

});