$(document).ready(function () {

    $(".menu__items").find("span").css({ "display": "none" });
    $("#home").css({ 'color': '#284D5B', 'background-color': '', 'border-radius': '30px' });
    $("#likes").css({ 'color': '#333', 'background-color': '', 'border-radius': '30px' });
    $("#search").css({ 'color': '#333', 'background-color': '', 'border-radius': '30px' });
    $("#user").css({ 'color': '#333', 'background-color': '', 'border-radius': '30px' });

    $("#home").click(function () {
        $("#home").css({ 'color': '#284D5B', 'background-color': '#57A7C7', 'transition': 'ease-out .2s all', 'width': '35%' });
        $("#likes").css({ 'color': '#333', 'background-color': '', 'width': '20%' });
        $("#search").css({ 'color': '#333', 'background-color': '', 'width': '20%' });
        $("#user").css({ 'color': '#333', 'background-color': '', 'width': '20%' });

        $(".home__text").css({ 'display': 'block', 'transition': 'ease-out .2s all' });
        $(".likes__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });
        $(".search__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });
        $(".user__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });

        $('body').css({ 'background-color': '#284D5B', 'transition': 'ease .4s all' });
    });

    $("#likes").click(function () {
        $("#home").css({ 'color': '#333', 'background-color': '', 'width': '20%' });
        $("#likes").css({ 'color': '#CE3B17', 'background-color': '#e76f51', 'transition': 'ease-out .2s all', 'width': '35%' });
        $("#search").css({ 'color': '#333', 'background-color': '', 'width': '20%' });
        $("#user").css({ 'color': '#333', 'background-color': '', 'width': '20%' });

        $(".home__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });
        $(".likes__text").css({ 'display': 'block', 'transition': 'ease-out .2s all' });
        $(".search__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });
        $(".user__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });

        $('body').css({ 'background-color': '#CE3B17', 'transition': 'ease .4s all' });
    });

    $("#search").click(function () {
        $("#home").css({ 'color': '#333', 'background-color': '', 'width': '20%' });
        $("#likes").css({ 'color': '#333', 'background-color': '', 'width': '20%' });
        $("#search").css({ 'color': '#CB930B', 'background-color': '#e9c46a', 'transition': 'ease-out .2s all', 'width': '35%' });
        $("#user").css({ 'color': '#333', 'background-color': '', 'width': '20%' });

        $(".home__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });
        $(".likes__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });
        $(".search__text").css({ 'display': 'block', 'transition': 'ease-out .2s all' });
        $(".user__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });

        $('body').css({ 'background-color': '#CB930B', 'transition': 'ease .4s all' });
    });

    $("#user").click(function () {
        $("#home").css({ 'color': '#333', 'background-color': '', 'width': '20%' });
        $("#likes").css({ 'color': '#333', 'background-color': '', 'width': '20%' });
        $("#search").css({ 'color': '#333', 'background-color': '', 'width': '20%' });
        $("#user").css({ 'color': '#1D7066', 'background-color': '#2a9d8f', 'transition': 'ease-out .2s all', 'width': '35%' });

        $(".home__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });
        $(".likes__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });
        $(".search__text").css({ 'display': 'none', 'transition': 'ease-out .2s all' });
        $(".user__text").css({ 'display': 'block', 'transition': 'ease-out .2s all' });

        $('body').css({ 'background-color': '#1D7066', 'transition': 'ease .4s all' });
    });
});