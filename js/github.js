var pathname = window.location.pathname; // Returns path only (/path/example.html)
var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
var origin   = window.location.origin;   // Returns base URL (https://example.com)

console.log(url);
$(window).on('load', function() {
    if(isGithub(origin)) {
        if(isFile(url)){
            $('td span').on('mousedown', function () {
                var variable = $(this).text();
                if(getLang(url) === 1){
                    java = new Java(url, pathname, variable);
                    java.showVariable();
                }
            });




            // highlights the variables
            $('tr td span').on('mouseover',function () {
                $(this).css({'text-decoration':'underline', 'cursor':'pointer'});
            }).on('mouseout', function () {
                $(this).css({'text-decoration':'none', ' cursor':'text'});
            });

        }
    }
});

