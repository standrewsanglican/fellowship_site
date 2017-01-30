$(document).ready(function(){
    var sermons = $("#sermons")
    if (!!sermons[0]){
        var window_height = $(window).height();
        var sermons_height = Math.floor(window_height * .75)
        sermons.css("max-height", sermons_height)
        var sermons_search = $("#sermon_search")
        var fn_filter_sermons = filterSermons(sermons, sermons_search)
        sermons_search
            .keyup(fn_filter_sermons)
        sermons_search.parent().css("width", sermons.width() + "px")
    }
})



function filterSermons(sermons, target){
    var timer = 0;    
    return function(){
        var search = $(target).val()        
        clearTimeout (timer);
        timer = setTimeout(function() { 
            console.log("searching for:", search)
        sermons.find("li").hide()
        var show_these = 
            $("li[data-search*='" + search + "' i]")
            .each(function(){
            $(this).show()
        })     
        }, 500);
        
    }
}