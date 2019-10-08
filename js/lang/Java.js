class Java {
    constructor(url, variable) {
        this.url = url;
        this.variable = this.getVariable(variable);
    }

    showVariable() {
        console.log(this.variable);
        if(this.isFile(this.variable, this.url)){
            this.goTop();
        } else if (this.isClass(this.variable)){
            this.goClass(this.variable);
        } else if (this.isVariable(this.variable)){
            console.log(this.isVariable(this.variable, 'String'));
            this.goVariable(this.variable);
        } else {
            console.log(this.isVariable(this.variable, 'String'));
        }

        //window.open(get_baseUrl() + variable +  get_langType(), '_blank');
    }

    getVariable(variable){
        return variable.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    }
    getFile(url) {
        var index = url.lastIndexOf('/') + 1;
        var filenameWithExtension = url.substr(index);
        return filenameWithExtension.split('.')[0]; // <-- added this line
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
            if ($(this).text() === datatype) {
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

    goVariable(variable){
        $('span').each(function(){
            if($(this).text() === "int"){
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
}
