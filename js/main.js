window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var test = JSON.parse(xhr.responseText)
            console.log(test[0].CASE_DT)
        }
    }
    xhr.open("GET", "https://memory25.github.io/kaohsiungdisasterquery/js/data.json", true)
    xhr.send();
}