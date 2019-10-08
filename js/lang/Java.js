class Java {
    constructor(url, variable) {
        this.url = url;
        this.variable = this.getVariable(variable);
        this.filetype = '.java';
    }

    showVariable() {
        console.log(this.variable);
        if(this.isFile(this.variable, this.url)){
            this.goTop();
        } else if (this.isClass(this.variable)){
            this.goClass(this.variable);
        } else if (this.isVariable(this.variable, ['int', 'String', 'long', 'boolean'])){
            this.goVariable(this.variable, ['int', 'String', 'long', 'boolean']);
        } else {
            console.log(this.getDirectory(this.url), this.variable, this.filetype);
            this.goSource(this.getDirectory(this.url), this.variable, this.filetype);
        }
    }

    getVariable(variable){
        return variable.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    }

    getFile(url) {
        var index = url.lastIndexOf('/') + 1;
        var filenameWithExtension = url.substr(index);
        return filenameWithExtension.split('.')[0]; // <-- added this line
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

    goSource(url, variable, filetype){
        window.open(url + variable +  filetype, '_blank');
    }
}
