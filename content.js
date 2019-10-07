var pathname = window.location.pathname; // Returns path only (/path/example.html)
var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
var origin   = window.location.origin;   // Returns base URL (https://example.com)

function checkOrigin(origin){
    return origin === 'https://github.com';
}



function getPkg(){
    packageName = 'no_repo';
    $('span').filter(function(){
        if($(this).text() === "package"){
            tdTag = $(this).parent().closest('td');
            tdTag.children('span').next('span').css("border", "solid 2px green");
            packageName = tdTag.children('span').next('span').text();
        } else {
            return 'no_repo';
        }
    });
    return packageName;
}

function get_slicePkg(packageName, character){
    return array = packageName.split(character);
}

function get_langType() {
    value =  url.substring(url.lastIndexOf('/') + 1);
    if((value.split('.')[1]) === 'java'){
        return '.java'
    } else {
        return '.kt';
    }
}

function get_baseUrl() {
    return document.URL.substr(0,document.URL.lastIndexOf('/')) + '/';
}


$(window).on('load', function() {
    if(checkOrigin(origin)) {
        $('td span').on('mousedown', function () {
            var Value = $(this).text();
            window.open(get_baseUrl() + Value +  get_langType(), '_blank');
        });






        $('td span:contains("import")').each(function () {
            if ($(this).children().length < 1) {
                $(this).css('border', 'solid 2px green');
            }
        });

        $('tr td span').on('mouseover', function () {
            $('tr td span:contains("import")').each(function(){
            if($(this).children().length < 1) {

            }
//                //tdTag = $(this).parent().closest('td').css("border", "solid 2px red");
//                tdTag = $(this).parent().closest('td');
//                tdTag.children('span').next('span').css("border", "solid 2px green");
//                packageName = tdTag.children('span').next('span');
//                //alert(packageName.text() + ' packageName');
            });


            $(this).css('border', 'solid 2px red');
        }).on('mouseout', function () {
            $(this).css('border', '');
        });
    }
});


//$(window).on('load', function() {
//    if(checkOrigin(origin)){
//
//
//
//    }
//
//
//    if(origin === 'https://github.com'){
//        $('tr td span:contains("package")').each(function(){
//            if($(this).children().length < 1) {
//                //tdTag = $(this).parent().closest('td').css("border", "solid 2px red");
//                tdTag = $(this).parent().closest('td');
//                tdTag.children('span').next('span').css("border", "solid 2px green");
//                packageName = tdTag.children('span').next('span');
//                //alert(packageName.text() + ' packageName');
//            }
//        });
//    }
//
///*
//    if(origin === 'https://github.com'){
//        $('tr td span:contains("package")').each(function() {
//            if ($(this).children().length < 1) {
//                $('td span').on('mouseover', function () {
//                    $(this).css('border', 'solid 2px red');
//                }).on('mouseout', function () {
//                    $(this).css('border', '');
//                });
//            }
//        });
//    }
//
//    if(origin === 'https://github.com'){
//        $('tr td span:contains("package")').each(function() {
//            if ($(this).children().length < 1) {
//                $('td span').mousedown(function (event) {
//                    switch (event.which) {
//                        case 1:
//                            //alert($(this).text());
//                            window.open(url, '_blank');
//                            break;
//                        default:
//                            $(this).attr('target', '_self"');
//                    }
//                });
//            }
//        });
//    }
//
//});
