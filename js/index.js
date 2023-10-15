let a = document.getElementById('searchText')
let b = document.getElementById('searchButton')
let c = document.getElementById('searchOption')
let d = document.getElementById('searchT')
let url = "https://www.baidu.com/s?wd="
let url1 = document.getElementById('url1')
let url2 = document.getElementById('url2')
let url3 = document.getElementById('url3')
let url4 = document.getElementById('url4')
let url5 = document.getElementById('url5')
let url6 = document.getElementById('url6')
let url7 = document.getElementById('url7')
let url8 = document.getElementById('url8')

b.onclick = search
d.onclick = searchOption
url1.onclick = function (){
    Toast('百度，启动',1000)
    url = url1.dataset.url}
url2.onclick = function (){
    Toast('必应，启动',1000)
    url = url2.dataset.url}
url3.onclick = function (){
    Toast('谷歌，启动',1000)
    url = url3.dataset.url}
url4.onclick = function (){
    Toast('夸克，启动',1000)
    url = url4.dataset.url}
url5.onclick = function (){
    Toast('哔哩哔哩，启动',1000)
    url = url5.dataset.url}
url6.onclick = function (){
    Toast('360启动',1000)
    url = url6.dataset.url}
url7.onclick = function (){
    Toast('Duck，启动',1000)
    url = url7.dataset.url}
url8.onclick = function (){
    Toast('Yandex，启动',1000)
    url = url8.dataset.url}


/* 使用百度搜送*/
function search() {
    if (a.value === "") {
        randomUrl()
    } else {
        window.open(url + a.value)
    }
}

function searchOption(){
    if(c.style.display === "none"){
        c.style.display = "flex"
    }else{
        c.style.display = "none"
    }
}


/*监听键盘点击事件*/
a.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        search()
    }
})

//toast弹窗
function Toast(msg,duration){
    duration=isNaN(duration)?3000:duration;
    let m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText="max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 9999999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
    document.body.appendChild(m);
    setTimeout(function() {
        let d = 0.5;
        m.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);
    }, duration);
}

// 定义一个函数，生成一个随机的网址，并在新页面加载
function randomUrl() {
    // 定义一个函数，生成一个指定范围内的随机整数
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // 定义一个函数，生成一个指定长度的随机字母字符串
    function randomString(length) {
        // 定义一个包含所有字母的字符串
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        // 定义一个空字符串，用来存放结果
        let result = ""
        // 循环length次，每次从alphabet中随机选择一个字母，拼接到result中
        for (let i = 0; i < length; i++) {
            // 随机生成一个alphabet的索引
            let index = randomInt(0, alphabet.length - 1)
            // 根据索引获取对应的字母
            let letter = alphabet[index]
            // 将字母拼接到result中
            result += letter
        }
        return result
    }

    // 随机生成一个1-10之间的数字，作为网址的长度
    let length = randomInt(1, 10)
    // 随机生成一个相应长度的字母字符串，作为网址的主体
    let body = randomString(length)
    // 将.com拼接到网址的末尾，作为网址的后缀
    let suffix = ".com"
    // 将http://拼接到网址的开头，作为网址的前缀
    let prefix = "http://"
    // 将前缀、主体和后缀拼接起来，得到完整的网址
    let url = prefix + body + suffix
    // 在新页面打开这个网址
    window.open(url)
}
