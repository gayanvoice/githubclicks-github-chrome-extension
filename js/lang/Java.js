class Java {
    constructor(url, pathname, variable) {
        this.url = url;
        this.pathname = pathname;
        this.packageName = this.getPackageName(variable);
        this.variable = this.getVariable(variable);
        this.filetype = '.java';
        this.pkgname = this.getPackage();
    }

    showVariable() {
        console.log(this.isPackage(this.packageName));

        if(this.isPackage(this.packageName)){
            this.goPackage(this.pathname, this.getPackage(), this.packageName);
        } else {
            if(this.isFile(this.variable, this.url)){
                this.goTop();
            } else if (this.isClass(this.variable)){
                this.goClass(this.variable);
            } else if (this.isVariable(this.variable, ['int', 'String', 'long', 'boolean'])){
                this.goVariable(this.variable, ['int', 'String', 'long', 'boolean']);
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
        }

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
                td.children('span').next('span').css("border", "solid 2px red");
                var spanValue = td.children('span').next('span').text();
                if(spanValue.includes(variable)){
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
                td.children('span').next('span').delay(500).fadeIn(1100);
                var spanValue = td.children('span').next('span').text();
                if(spanValue.includes(variable)){
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
            //console.log('not equal');
            var pathy = pathname.substring(0, pathname.lastIndexOf("/")) + this.getModules(packageName, variableName) + this.filetype;
            window.open(pathy, '_blank');
        }
    }

    getModules (xArray, yArray){
        var xl = xArray.length;
        var yl = yArray.length;
        var remaining = 0;

        //var pathString = xArray.toString();
        var path = '';

        if(xl < yl){
            remaining = yl - xl;
            //console.log(xArray, yArray, remaining);
            for(var x = xl; x < yl; x++){
                path = path + '/' + yArray[x];
            }
        }
         else {
            remaining = xl - yl;
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
