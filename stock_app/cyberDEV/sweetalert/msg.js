/**
 * Created by peymanvalikhanli on 5/1/17 AD.
 */

__require("cyberDEV/sweetalert/sweetalert2.min.js");
__css_require("cyberDEV/sweetalert/sweetalert2.min.css");

var message = {};



    message.show = function (text , title , type , btn ) {

    try {
        swal({
            title: (title == '' || title == undefined ? '' : __lang.translate(title)),
            text: __lang.translate(text),
            type: (type == '' || type == undefined ? '' : type ),
            confirmButtonText: (btn== '' || btn == undefined ? __lang.translate("OK") : __lang.translate(btn))
        });
    }catch (e){
        console.log(e);
    }

}