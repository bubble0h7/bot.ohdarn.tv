$(".customTooltip").each(function () {
    $(this).hide();
});


function toggleVelkozGif() {
    if($('#velkoz-image').attr("src") == "images/Velkoz1_transparent.gif") {
        $('#velkoz-image').attr("src","images/Velkoz1_transparent.png");
    } else {
        $('#velkoz-image').attr("src","images/Velkoz1_transparent.gif");
    }
};

function toggleGithubIcon() {
    if($('#github-icon').attr("src") == "images/GitHub-Mark-Light-32px.png") {
        $('#github-icon').attr("src","images/GitHub-Mark-32px.png");
    } else {
        $('#github-icon').attr("src","images/GitHub-Mark-Light-32px.png");
    }
};

function copyToClipboard(text, id) {
    /* Copy the text */

    var temp = $("<input>");
    $("body").append(temp);
    temp.val(text).select();
    document.execCommand("copy");
    temp.remove();

    $('#' + id).text('Copied!');
    
    console.log("Copied to clipboard: " + text);
};

function toggleToolTip(id) {
    console.log('#' + id);
    if ($('#' + id).is(':visible')) {
        $('#' + id).hide();
        $('#' + id).text('Copy to clipboard');
    } else {
        $('#' + id).text('Copy to clipboard');
        $('#' + id).show();
    }
}