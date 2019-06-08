/**
 * Created by peymanvalikhanli on 4/16/17 AD.
 */

function ___require(url,id,callback) {
    done = false;
    var scr = document.createElement('script');
    scr.setAttribute('src',url);
    scr.setAttribute('id',id);
    scr.onload = scr.onreadstatechange = function() {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
            done = true;
            scr.onload = scr.onreadystatechange = null;
            if (callback) {
                callback();
            }
        }
    }
    document.head.appendChild(scr);

}

function __require(url) {
    var scr = document.createElement('script');
    scr.setAttribute('src',url);
    document.head.appendChild(scr);
}
function __css_require(url){
    var link = document.createElement('link');
    link.setAttribute('rel','stylesheet');
    link.setAttribute('type','text/css');
    link.setAttribute('href',url);
    document.head.appendChild(link);
}