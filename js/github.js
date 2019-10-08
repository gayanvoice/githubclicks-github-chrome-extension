var pathname = window.location.pathname; // Returns path only (/path/example.html)
var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
var origin   = window.location.origin;   // Returns base URL (https://example.com)


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

function checkCls(variable) {
    var statehasstores = false;
    $('span').each(function(){
        if($(this).text() === "import"){
            tdTag = $(this).parent().closest('td');
            var page = tdTag.children('span').next('span').text();
            if(page.includes(variable)){
                statehasstores = true;
                return false;
            } else {
                isClass = false;
            }
        } else {
            isClass = false;
        }
    });
    console.log(statehasstores);
    return statehasstores;
}

function getCls(variable){
    packageName = 'no_repo';
    $('span').each(function(){
        if($(this).text() === "import"){
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


function get_baseFile() {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    return filenameWithExtension.split(".")[0]; // <-- added this line
}

function check_isFile() {
    return pathname.split('/').pop().indexOf('.') > -1;
}

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

            $('tr td span').on('mouseover', function () {
                $(this).css('text-decoration', 'underline');

            }).on('mouseout', function () {
                $(this).css('text-decoration', '');
            });



        }
    }
});

