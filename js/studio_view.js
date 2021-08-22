$(document).ready(function(){
    const movArr = ["mainvideo_01.mp4"];

    $("#pop ul li").click(function(){
        const $index = $(this).index();
        $(".popup .video_space video").attr({"src":"./video/" + movArr[$index], "autoplay":"autoplay"});
        $(".dark").addClass("active");
        $(".popup").addClass("active");

        return false;
    });


    $(".dark, .popup .close").click(function(){
        $(".dark").removeClass("active");
        $(".popup").removeClass("active");
        $(".popup .video_space video").removeAttr("src");
        $(".popup .video_space video").removeAttr("autoplay");
    });

});