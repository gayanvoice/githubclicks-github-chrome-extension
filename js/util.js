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
