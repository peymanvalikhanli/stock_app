/**
 * Created by peymanvalikhanli on 3/23/18 AD.
 */

function get_elm(id){
    return document.getElementById(id);
}

function create_elm(element){
    return document.createElement(element);
}

//__________ create menu

//$.getJSON("/view/cyberDEV/menu/menu.json", function(result) {
//    //create menu
//    // on active menu set this attribute  class="current"
//    var keys_menu = Object.keys(result);
//    var menu_bar = get_elm("menu_bar");
//    for(i=0 ; i< keys_menu.length ; i++) {
//        var menu_item = create_elm("li");
//        //menu_item.setAttribute("class","dropdown");
//        menu_item.innerHTML = '<a href="'+result[keys_menu[i]].url+'"><i class="'+result[keys_menu[i]].icon+'"></i>'+result[keys_menu[i]].name+'</a>';
//        menu_bar.appendChild(menu_item);
//    }
//
//});

function includeHTML(file,elmnt) {        /*make an HTTP request using the attribute value as the file name:*/
   try {
       xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
           if (this.readyState == 4) {
               if (this.status == 200) {
                   var start = this.responseText.indexOf("<psco_body>") + "<psco_body>".length;
                   var end = this.responseText.indexOf("</psco_body>");
                   elmnt.innerHTML = this.responseText.substring(start, end);
                   start = this.responseText.indexOf("<psco_head>") + "<psco_head>".length;
                   end = this.responseText.indexOf("</psco_head>");
                   $("#page_script").remove();
                   var script =create_elm('script');
                   script.innerHTML = this.responseText.substring(start, end);
                   script.setAttribute("type","text/javascript");
                   script.setAttribute("id","page_script");
                   document.head.appendChild(script);

               }
               if (this.status == 404) {
                   elmnt.innerHTML = "Page not found.";
               }
           }
       }
       xhttp.open("GET", file, true);
       xhttp.send();
   }catch(e) {
       console.log(e);
   }
};

function hashchanged(){
    var hash = location.hash.replace( /^#/, '' );
    //your code
    console.log(hash);
    var elemnt = get_elm("page_body");
    var end_page_name = hash.indexOf("?");
    var file ="";
    if(hash!="") {
        file = "cyberDEV/pages/" + ( end_page_name != -1 ? hash.substring(0, end_page_name) : hash ) + ".html";
    }else{
        file = "cyberDEV/pages/" + "index.html";
    }

    includeHTML(file,elemnt);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(window).on('hashchange', function(){
    hashchanged();
}).trigger('hashchanged'); // bind event to the same selector as event-listener

//var __lang = new lang({" ":" "});

//var map_script = document.createElement('script');
//map_script.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=AIzaSyAZOgm0tF2nezU2H4kKurkY7GkgWxqIMrU");
//map_script.setAttribute("async","");
//map_script.setAttribute("defer","");
//document.head.appendChild(map_script);


$(window).on('load',function() {
    hashchanged();
});