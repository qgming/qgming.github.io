fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        const hitokoto = document.querySelector('#hitokoto_text')
        hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
        hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)

