class EditorStyle {
    constructor(iframe){
        this.iframeObj = iframe;
    }
    setBold(){
        this.iframeObj.contentWindow.document.execCommand("Bold");
    }
    setBgColor(){
        this.iframeObj.contentWindow.document.execCommand("backColor",false,"#ccc");
    }
    setColor(){
        this.iframeObj.contentWindow.document.execCommand("foreColor",false,"red");
    }
    setDecoration(){
        this.iframeObj.contentWindow.document.execCommand("Underline");
    }

    setPicture(e){
        console.log("change");
        console.log(document.querySelector(".choose-pic"));
        console.log(e.currentTarget.files)
    }
}

export default EditorStyle;