(function (win) {
    var $     = win.Zepto || win.jQuery,
        mdnzr = win.Modernizr;

    console.log(mdnzr.touch);
    console.log($);
}(window));