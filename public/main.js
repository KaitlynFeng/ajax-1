console.log("我是main.js");
let n = 1
getCSS.onclick = () => {

    const request = new XMLHttpRequest()

    request.open("GET", "./style.css")

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement("style")
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
        }
    }
    request.send();
}

getJS.onclick = () => {

    const request = new XMLHttpRequest()

    request.open("GET", "./2.js")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement("script")
                script.innerHTML = request.response
                document.head.appendChild(script)
            }
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()

    request.open("GET", "./3.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建 div 标签
                const div = document.createElement("div");
                // 填写 div 内容
                div.innerHTML = request.response;
                // 插入到身体里
                document.body.appendChild(div);
            }
        }
    }

    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "./4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent.trim()
            console.log(text);
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "./5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const obj1 = JSON.parse(request.response)
            console.log(obj1);
            myName.innerText = obj1["name"]
        }
    }
    request.send()
}

getNextPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(ele => {
                const li = document.createElement("li")
                li.textContent = ele.id
                XXX.appendChild(li)
            });
            n += 1
            if (n >= 3) {
                getNextPage.disabled = true
            }
        }
    }
    request.send()
}