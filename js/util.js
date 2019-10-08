// Check if Origin is GitHub
function isGithub(origin){
    return origin === 'https://github.com';
}

// Check if URL has a File
function isFile(url) {
    return url.split('/').pop().indexOf('.') > -1;
}

// Get the file from URL
function getFile(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    return filenameWithExtension.split(".")[0]; // <-- added this line
}


// Get lang type
function getLang(url) {
    value =  url.substring(url.lastIndexOf('/') + 1);
    if((value.split('.')[1]) === 'java'){
        return 1
    } else  if((value.split('.')[1]) === 'kt'){
        return 2;
    }
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





function getVar(variable){
    packageName = 'no_repo';
    $('span').each(function(){
        if($(this).text() === "int"){
            tdTag = $(this).parent().closest('td');
            tdTag.children('span').next('span').css("border", "solid 2px red");
            var page = tdTag.children('span').next('span').text();
            if(page.includes(variable)){
                console.log('available ' + page);
                $(window).scrollTop($(this).offset().top);
                return false;
            } else {
                console.log('not available ' + page);
            }
            packageName = page;
        } else {
            tdTag = $(this).parent().closest('td');
            tdTag.children('span').next('span').css('border', '');
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



//$(window).on('load', function() {
//    if(checkOrigin(origin)){
//
//
//
//    }
//  $('tr td span:contains("package")').each(function () {
//                 if ($(this).children().length < 1) {
//                     $(this).css('border', 'solid 2px green');
//                 }
//             });
//
//             $('tr td span:contains("import")').each(function () {
//                 if ($(this).children().length < 1) {
//                     $(this).css('border', 'solid 2px green');
//                 }
//             });
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
