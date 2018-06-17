function ajax(pagina, fn, post, fnJs) {
    $("input[type=a]").addClass("disabled");
    if (fnJs === undefined) fnJs = fn;
    $.ajax({
        url: "../" + pagina + "/" + fn,
        data: post,
        type: "POST",
        contentType: "application/json; utf-8"
    })
        .done(function (result) {
            if (typeof result !== 'string') {
                if (typeof window[fnJs] !== 'undefined' && typeof window[fnJs] === 'function')
                    window[fnJs](result);
            }
            else {
                alert(result);
                console.error(result);
                window[fnJs](result);
            }
        }
        ).fail(function (result) {
            alert(result.responseText);
            console.error(result.responseText)
        })
    $("input[type=a]").removeClass("disabled", false);
}