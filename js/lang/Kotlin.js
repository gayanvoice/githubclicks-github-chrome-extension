class Kotlin {
    constructor(url, pathname, variable) {
        this.url = url;
        this.pathname = pathname;
        this.packageName = this.getPackageName(variable);
        this.variable = this.getVariable(variable);
        this.filetype = '.kt';
        this.dataType = ['var', 'String', 'long', 'boolean'];
    }

    showVariable() {
            if(this.isFile(this.variable, this.url)){
                this.goTop();
            } else if (this.isClass(this.variable)){
                this.goClass(this.variable);
            } else if (this.isVariable(this.variable, this.dataType)){
                this.goVariable(this.variable, this.dataType);
            } else if(this.isPackage(this.packageName)){
                this.goPackage(this.pathname, this.getPackage(), this.packageName);
            } else {
                var values = this.getAPI(this.url);
                var url = this.getDirectory(this.url) + this.variable + this.filetype;

                var indexOfJava  = values.indexOf('master');
                var lengthOfArray = values.length - 1;
                var address = '/';
                var variable = this.variable;

                var user = values[1];
                var repo = values[2];

                for(var x = indexOfJava + 1; x < lengthOfArray; x++){
                    address = address + values[x] + '/';
                }

                this.getRequest('https://api.github.com/repos/' + user + '/' + repo + '/contents' + address + variable + this.filetype,  function(status){
                    if(status === 200){
                        console.log('200');
                        window.open(url, '_blank');
                    }
                    else if(status === 404){
                        alert('\'' + variable + '\' is a readonly variable');
                    } else {
                        console.log('error');
                    }
                });
            }
      //  }

    }


    getRequest(url, cb){
        jQuery.ajax({
            url:      url,
            dataType: 'text',
            type:     'GET',
            complete:  function(xhr){
                if(typeof cb === 'function'){
                    cb.apply(this, [xhr.status]);
                }
            }
        });
    }


    getAPI(url){
        url = url.replace(/^https?:\/\//,'');
        return url.split('/');
    }

    getPackage(){
        var pkg = 'pkg';
        $('span').each(function(){
            if($(this).text() === "package"){
                var td = $(this).parent().closest('td');
                pkg = td.children('span').next('span').text();
                return false;
            }
        });
        return pkg;
    }

    isPackage(variable){
        var value = false;
        $('span').each(function(){
            if(($(this).text() === "package") || ($(this).text() === "import")){
                var td = $(this).parent().closest('td');
                var spanValue = td.children('span').next('span').text();
                if (spanValue.includes(variable)) {
                    value = true;
                    return false;
                } else {
                    value = false;
                }
            } else {
                value = false;
            }
        });
        return value;
    }

    getPackageName(variable){
        return variable.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
    }

    getVariable(variable){
        return variable.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    }

    getFile(url) {
        var index = url.lastIndexOf('/') + 1;
        var filenameWithExtension = url.substr(index);
        return filenameWithExtension.split('.')[0];
    }

    getDirectory(url){
        return url.substring(0, url.lastIndexOf('/')) + "/";
    }

    isFile (variable, url){
        return variable === this.getFile(url);
    }

    isClass (variable){
        var value = false;
        $('span').each(function(){
            if($(this).text() === "import"){
                var td = $(this).parent().closest('td');
                var spanValue = td.children('span').next('span').text();
                if(spanValue.includes(variable)){
                    value = true;
                    return false;
                } else {
                    value = false;
                }
            } else {
                value = false;
            }
        });
        return value;
    }

    isVariable (variable, datatype){
        var value = false;
        $('span').each(function () {
            if (($(this).text() === datatype[0]) || $(this).text() === datatype[1]
                || $(this).text() === datatype[2] || $(this).text() === datatype[3]) {
                var td = $(this).parent().closest('td');
                var spanValue = td.children('span').next('span').text();
                if (spanValue.includes(variable)) {
                    value = true;
                    return false;
                } else {
                    value = false;
                }
            } else {
                value = false;
            }
        });
        return value;
    }

    goTop(){
        window.scrollTo(0, 0);
    }

    goClass(variable){
        $('span').each(function(){
            if($(this).text() === "import"){
                var td = $(this).parent().closest('td');
                var spanVal = td.children('span').next('span');
                var spanValue = td.children('span').next('span').text();
                if(spanValue.includes(variable)){
                    spanVal.css('background-color', '#FFFF00');
                    $(window).scrollTop($(this).offset().top);
                    return false;
                }
            }
        });
    }

    goVariable(variable, datatype){
        $('span').each(function(){
            if (($(this).text() === datatype[0]) || $(this).text() === datatype[1]
                || $(this).text() === datatype[2] || $(this).text() === datatype[3]) {
                var td = $(this).parent().closest('td');
                var spanVal = td.children('span').next('span');
                td.children('span').next('span').delay(500).fadeIn(1100);
                var spanValue = td.children('span').next('span').text();
                if(spanValue.includes(variable)){
                    spanVal.css('background-color', '#FFFF00');
                    $(window).scrollTop($(this).offset().top);
                    return false;
                }
            }
        });
    }

    goPackage(pathname, pkg, variable) {
        var packageName = this.getPkg(pkg);
        var variableName = this.getPkg(variable);

        if(this.isArrayEqual(packageName, variableName)){
            //console.log('equal');
            var pathx = pathname.substring(0, pathname.lastIndexOf("/"));
            window.open(pathx, '_blank');
        } else {
            var path = this.getAPI(this.url);
            var module = this.getModules(variableName) + this.filetype;

            console.log(this.getModules(variableName));

            var indexOfMaster  = path.indexOf('master');
            var indexofJava = path.lastIndexOf('java') + 1;
            var address = '';

            var user = path[1];
            var repo = path[2];

            for(var x = indexOfMaster + 1; x < indexofJava; x++){
                address = address + path[x] + '/';
            }

            console.log(path);

            var url = 'https://api.github.com/repos/' + user + '/'+ repo + '/contents/' + address + module;
            var fileUrl = 'https://github.com/' + user + '/' + repo + '/blob/master/' + address + module;

            console.log(url);

            this.getRequest(url, function(status){
                if(status === 200){
                    console.log('200');
                    window.open(fileUrl, '_blank');
                } else if(status === 404){
                    alert('\'' + variable + '\' is a readonly variable');
                } else {
                    console.log('error');
                }
            });
        }
    }

    getModules (Array){
        var path = '';
        for(var x = 0; x < Array.length; x++){
            if(x === 0){
                path = Array[x];
            } else {
                path = path + '/' + Array[x];
            }
        }
         return path;
    }

    isArrayEqual(xArray, yArray) {
        var xl = xArray.length;
        var yl = yArray.length;
        var bool = false;

        if(xl !== yl){
            bool = false;
        } else {
            for (var x = 0; x < xl; x++) {
                if (xArray[x] !== yArray[x]) {
                    bool = false;
                    break;
                } else {
                    bool = true;
                }
            }
        }
        return bool;
    }

    getPkg(variable){
        return variable.split('.');
    }
}
