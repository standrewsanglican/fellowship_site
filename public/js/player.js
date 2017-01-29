function play(event){
    $("#player").attr("src", $(this).data("recording"))
}

$(document).ready(function(){
    console.log("ready")
    $(".play_sermon").on('click', play)
}
)