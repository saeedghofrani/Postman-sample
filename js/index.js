$(document).ready(function () {
    //disign to clear the post part
    $('#profile-tab').click(function (e) {
        e.preventDefault();
        $('#home').removeClass('d-flex');
    });
    //first form will slife
    $('.container').fadeOut(0);
    $('.container').slideDown('slow');
    //bottun for get and ajax
    $('#submitGet').click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: `${$('#GET').val()}`,
            success: function (data, status, xhr) {
                alert(status);
                $('#GETtextarea').val(JSON.stringify(data.data, null, 4));
                $('#headGET').val(`Plain Text: JSON, Status: ${xhr.status}`);
                // console.log(xhr);
                // console.log(xhr.status);
            },
            error: function () {
                $('#GETtextarea').val(`404 The page has gone missing`);
            }
        });
    });
    //bottun for post and ajax
    $('#btnPOST').click(function (e) {
        e.preventDefault();
        console.log($('#POST').val());
        if(IsJsonString($('#requestPostTxtArea').val())) {
            $.ajax({
                type: "post",
                data: `${$('#requestPostTxtArea').val()}`,
                contentType:"application/json; charset=utf-8",
                dataType: "json",
                url: `${$('#POST').val()}`,
                success: function (data, status, xhr, request) {
                    alert(status);
                    $('#responsePostTxtArea').val(JSON.stringify(data, null, 4));
                    $('#headPOST').val(`Plain Text: JSON, Status: ${xhr.status}`);
                    console.log(xhr);
                    console.log(data.createdAt);
                },
                error: function () {
                    $('#responsePostTxtArea').val(`404 The page has gone missing`);
                }
            });
        }
        else {
            alert('unexpected token <<SHOULD BE JSON>>');
        }
    });
});
//validate json request
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}