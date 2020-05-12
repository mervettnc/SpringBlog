$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    bsCustomFileInput.init();

    $("#frmSearch").submit(function (e) {
        var q = $("#q").val().trim();

        $("#q").val(q);

        if (!q) {
            e.preventDefault();
        }
    });
});