$(document).ready(function(){

    var timer = null;
    $("#search").change(function() {
        // clearTimeout(timer);
        // timer = setTimeout(loadRecord, 1000);

        var kw = $("#search").val();

        console.log('request:' + kw);

        if(kw != '') {
              $.ajax
              ({
                 type: "GET",
                 url: "http://192.168.200.220:8080/DCode/search",
                 //crossDomain: true,
                 data: "q="+ kw + "&s=" + 30,
                 dataType: "jsonp",
                 success: function(result)
                 {
                    console.log(result);

                  $('#productList').html('');

                  /*for(var i = 0; i < result.length; i++) {
                      $('#productList').append('<li title="' + result[i].title + '" alt="' + result[i].title + '" >' +
                          '<img src="'+ result[i].img +'" width="80px" height="80px" />' +
                          '<h3>'+ result[i].source +'</h3>' +
                          //'<div class="ftag"><span>RM</span></div>' +
                          '<p>RM '+ result[i].price +'</p>' +
                          '<div class="fget"><a href="' + result[i].link + '" target="_blank">View</a></div>' +
                      '<br/></li>');
                  }*/


                  for(var i = 0; i < result.length; i++) {
                      $('#productList').append('<tr><td width="80px"><img src="'+ result[i].img +'" width="80px" height="80px" /></td>' +
                                                    '<td id="sourceName">'+ result[i].source +'</td>' +
                                                    '<td id="title">'+ result[i].title +'</td>' +
                                                    //'<td id="desc">'+ result[i].desc +'</td>' +
                                                    //'<div class="ftag"><span>RM</span></div>' +
                                                    '<td id="price">RM '+ result[i].price +'</td>' +
                                                    '<td id="view"><a href="' + result[i].link + '" target="_blank">View</a></td>' +
                                               '</tr>');
                  }

                 }
              });


             }
             else
             {
               //$("#results").html("no output");
             }
            return false;









    });


});

function loadRecord() {

    var array = [['Lazada', 100, 'Desc'], ['Zalora', 111, 'Desc'], ['Superbuy', 50, 'Desc']];
    alert(array);

}
