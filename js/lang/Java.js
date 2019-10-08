class Java {
    constructor(url, variable) {
        this.url = url;
        this.variable = variable;
    }

    showVariable() {
        if(Java.isClass() === 0){
            window.scrollTo(0, 0);
        }
        //else if (checkCls(this.variable)){
        //    getCls(this.variable);
            //window.open(get_baseUrl() + variable +  get_langType(), '_blank');
       /// }
    }

    isClass (){
        return this.variable === getFile(this.url);
    }
}
