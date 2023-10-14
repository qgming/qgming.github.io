let a = document.getElementById('searchText')
let b = document.getElementById('searchButton')
console.log(a.value)
b.onclick = search

/* 使用百度搜送*/
function search() {
    window.open("https://www.baidu.com/s?wd=" + a.value)
}

/*生成随机.com网址，并跳转*/
function searchCom() {

}

/*监听键盘点击事件*/
a.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        search()
    }
})
