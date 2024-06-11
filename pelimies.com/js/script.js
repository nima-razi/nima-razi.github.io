$.get("/pages/layout/nav.html", function(data){
    $("#nav").replaceWith(data);
});
$.get("/pages/layout/footer.html", function(data){
    $("#footer").replaceWith(data);
});