var countryselect = document.getElementById("countrySelect"),
    selectindex = countryselect.selectedIndex,
    ulArray = new Array(),
    liArray = new Array(),
    searchArray = new Array(),
    ulcount=0;

countryselect.onchange = function() {
    countryselect = document.getElementById("countrySelect"),
        selectindex = countryselect.selectedIndex;
    //console.log(countryselect.options[selectindex].text)


    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var showdata = document.getElementById("showdata")
            
            removeAllChild(showdata)/*清空showdata的子節點*/



            var mydata = JSON.parse(xhr.responseText)
            for(var i = 0;i<mydata.length;i++){
                /*選擇的地區跟data中的地區一樣時*/
                if(countryselect.options[selectindex].text == mydata[i].TOWN_N){
                    var newul = document.createElement("ul");
                    document.getElementById("showdata").appendChild(newul)
                    ulArray.push(newul);
                    


                    for(var j=0;j<Object.keys(mydata[i]).length;j++){
                        var newli = document.createElement("li");
                        ulArray[ulcount].appendChild(newli)
                        liArray.push(newli)
                        newli.innerHTML = Object.keys(mydata[i])[j] + " ：" +mydata[i][Object.keys(mydata[i])[j]]
                        //console.log(mydata[i][Object.keys(mydata[i])[j]])
                    }
                    ulcount++;
                }
            }
            
            /*
            console.log(Object.keys(mydata[0])[1])
            console.log(mydata[0][Object.keys(mydata[0])[20]])*/
        }
    }
    xhr.open("GET", "data.json", true)
    xhr.send();
}



/*判斷子節點存在 就一直刪除第一個 直到沒有子節點*/
function removeAllChild(father){
    if(father.hasChildNodes()){
        father.removeChild(father.firstChild)
        return removeAllChild(father)
    }
}
