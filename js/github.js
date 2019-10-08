var pathname = window.location.pathname; // Returns path only (/path/example.html)
var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
var origin   = window.location.origin;   // Returns base URL (https://example.com)


$(window).on('load', function() {
    if(checkOrigin(origin)) {
        if(check_isFile()){
            console.log(get_baseFile());
            $('td span').on('mousedown', function () {
                var variable = $(this).text();
                if(check(variable) === 0){
                    window.scrollTo(0, 0);
                } else if (checkCls(variable)){
                    getCls(variable);
                    //window.open(get_baseUrl() + variable +  get_langType(), '_blank');
                }
            });

            console.log(get_slicePkg(getPkg(), '.').length);

            console.log(getPkg());
            console.log(getCls('FileWriter'));


            // highlights the variables
            $('tr td span').on('mouseover',function () {
                $(this).css({'text-decoration':'underline', 'cursor':'pointer'});
            }).on('mouseout', function () {
                $(this).css({'text-decoration':'none', ' cursor':'text'});
            });

        }
    }
});

