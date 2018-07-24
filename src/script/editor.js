import "../style/editor.css";
import EditorStyle from "./EditorStyle";

class Editor {

    constructor(){
        this.init();
        this.domObj = this.getDom();
        const editStyle = new EditorStyle(this.iframeObj);
        this.bindEvent(editStyle);
    }

    init(){
        var iframeObj = document.getElementById("con-iframe");
        var doc = iframeObj.contentDocument || ifr.contentWindow.document;
        doc.designMode = "on";
        doc.contentEditable = true;

        this.iframeObj = iframeObj;
    }

    getDom(){
        let btnBold = document.querySelector(".set-bold");
        let btnColor = document.querySelector(".set-color");
        let btnBgColor = document.querySelector(".set-bg-color");
        let btnDecoration = document.querySelector(".set-decoration");
        let btnPicture = document.querySelector(".choose-pic");

        return {
            btnBold,
            btnColor,
            btnBgColor,
            btnDecoration,
            btnPicture
        }
    }

    bindEvent(editStyle){
       // 加粗
        this.domObj.btnBold.addEventListener('click', editStyle.setBold.bind(editStyle));
        // 背景色
        this.domObj.btnBgColor.addEventListener('click', editStyle.setBgColor.bind(editStyle));
        // 字体颜色
        this.domObj.btnColor.addEventListener('click', editStyle.setColor.bind(editStyle));
        // 下划线
        this.domObj.btnDecoration.addEventListener('click', editStyle.setDecoration.bind(editStyle));

        // 图片
        this.domObj.btnPicture.addEventListener('change', editStyle.setPicture.bind(editStyle));
    }
}

new Editor();