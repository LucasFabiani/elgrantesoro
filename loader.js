
function ajax(a,b,c){//url,function,just a placeholder
    c=new XMLHttpRequest;
    c.open('GET',a);
    c.onload=b;
    c.send()
}

function pushText(){
    let txt = this.response;
    let contentBox = document.getElementById("content-box");
    let textBoxRef = document.getElementsByClassName("text-box")[0];
    let textArr = txt.split("\n");
    textArr.forEach(element => {
        let textBox = textBoxRef.cloneNode(true);
        textBox.innerText = element;
        contentBox.appendChild(textBox);
    });
    
}

window.onload=function(){
    ajax('content.txt',pushText)
}
