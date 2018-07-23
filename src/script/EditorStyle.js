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

    setPicture(){
        alert("pic");
    }
}

export default EditorStyle;