var ajax = {url: "controller_robo/controller_menu.php", data: {}};
ajax.get_data = function (e, a ,b) {
    if (void 0 == a || null == a)switch (e.act) {
        case"login":
            switch (e.Result) {
                case"valid":
                    break;
                case"login":
                    var o = "index.html";
                    window.location.href = o, window.location = o
            }
            break;
        case"location":
            var o = e.Result;
            window.location.href = o, window.location = o, console.log(e.Result);
            break;
        case"get_user":
            user = e;
            break;
        case"message":
            message.show(e.msg, e.title, e.type, e.btn);
            break;
        case"Error":
            console.log(e)
    } else if (void 0 != e.act || null != e.act)switch (e.act) {
        case"location":
            var o = e.Result;
            window.location.href = o, window.location = o, console.log(e.Result);
            break;
        case"message":
            message.show(e.msg, e.title, e.type, e.btn);
            break;
        case"Error":
            console.log(e)
    } else if(void 0 == b || null == b)
        a(e)
    else a(e,b)
}, ajax.sender_data = function (e) {
    var a = new Date, o = this.url + "?killcatch=" + a.getMilliseconds() + "0" + a.getSeconds(), s = {};
    if (null != e) {
        var r = Object.keys(e);
        for (i = 0; i < r.length; i++)s[r[i]] = e[r[i]]
    }
    $.ajax({
        headers: {"Access-Control-Allow-Origin": "*"},
        crossDomain: !0,
        url: o,
        type: "GET",
        data: s,
        statusCode: {
            404: function () {
                message.show("404", "error", "error")
            }, 403: function () {
                message.show("403", "error", "error")
            }
        },
        success: function (e) {
            var a = JSON.parse(e);
            ajax.get_data(a)
        },
        error: function () {
            message.show("AJAX error", "error", "error")
        }
    })
}, ajax.getJSON = function (e, a) {
    $.getJSON(a, function (a) {
        ajax.data[e] = a
    })
}, ajax.sender_data_callback = function ( u,e, a) {
    var o = new Date, s = this.url + "?killcatch=" + o.getMilliseconds() + "0" + o.getSeconds(), r = {};
    if (null != e) {
        var t = Object.keys(e);
        for (i = 0; i < t.length; i++)r[t[i]] = e[t[i]]
    }
    $.ajax({
        headers: {"Access-Control-Allow-Origin": "*"},
        crossDomain: !0,
        url: s,
        type: "GET",
        data: r,
        statusCode: {
            404: function () {
                message.show("404", "error", "error")
            }, 403: function () {
                message.show("403", "error", "error")
            }
        },
        success: function (e) {
            var o = JSON.parse(e);
            ajax.get_data(o, a)
        },
        error: function () {
            message.show("AJAX error", "error", "error")
        }
    })
};

    ajax.sender_data_json_by_url_callback = function (e, a, o, s) {
    var r = new Date;
    e = e + "?killcatch=" + r.getMilliseconds() + "0" + r.getSeconds(), (null == s || void 0 == s) && (s = "GET"), $.ajax({
        url: e,
        type: s,
        dataType: "json",
        data: a,
        success: function (e) {
            ajax.get_data(e, o)
        }
    })
},  ajax.sender_data_json_by_url_callback_sync = function (e, a, o, s,call_back) {
    var r = new Date;
    e = e + "?killcatch=" + r.getMilliseconds() + "0" + r.getSeconds(), (null == s || void 0 == s) && (s = "GET"), $.ajax({
        url: e,
        type: s,
        dataType: "json",
        data: a,
        success: function (e) {
            ajax.get_data(e, o,call_back)
        }
    })
}, ajax.cllback_getJSON = function (e, a) {
    $.getJSON(e, a(data))
};