
function checkOrigin(origin){
    return origin === 'https://github.com';
}

// https://api.github.com/repos/gayankuruppu/android-view-animations-java/contents/library/src/main/java/render/animations
// https://api.github.com/repos/gayankuruppu/android-view-animations-java get language type


function check (variable){
    if(variable === get_baseFile()){
        return 0;
    } else {

    }
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
