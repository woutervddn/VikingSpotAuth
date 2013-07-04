$('#auth').live("click keydown", function (event) {
    event.preventDefault();
    emailVar = $('#email').val();
    passVar = $('#pass').val();
    
    authString = emailVar+":"+passVar;
    authString = btoa(authString);
    
    dataString = "authorization="+authString;
    $(".main").slideUp(function(){
        $.ajax({
               type: 'POST', 
               url: "https://alpha.vikingspots.com/en/api/4/basics/loginwithoutheader/",
               data: dataString,
               success: function(data){
                   response = JSON.parse(data);
                   
                   /*
                   console.log(response);
                   console.log(response.response.token);
                   console.log(response.response.user_id);*/
                   
                   responsehtml='token: <input type="text" name="token" id="token" value="'+response.response.token+'" /><br />'
                   responsehtml+='userID: <input type="text" name="token" id="token" value="'+response.response.user_id+'" /><br />'
                   $(".main").html(responsehtml).slideDown();
                    $("#token").focus ();
                    $("#token").select ();
               },
               error: function(jqXHR, exception) {
                    if (jqXHR.status === 0) {
                        console.log('Not connect.\n Verify Network.');
                    } else if (jqXHR.status == 404) {
                        console.log('Requested page not found. [404]');
                    } else if (jqXHR.status == 500) {
                        console.log('Internal Server Error [500].');
                    } else if (exception === 'parsererror') {
                        console.log('Requested JSON parse failed.');
                    } else if (exception === 'timeout') {
                        console.log('Time out error.');
                    } else if (exception === 'abort') {
                        console.log('Ajax request aborted.');
                    } else {
                        console.log('Uncaught Error.\n' + jqXHR.responseText);
                    }
                    response = JSON.parse(jqXHR.responseText);
                    responsehtml= 'Uncaught Error.\n' + response.meta.code;
                    $(".main").html(responsehtml).slideDown();
               },
               dataType : "html"
           });
    });

});
