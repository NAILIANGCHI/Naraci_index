 // 获取一言数据
fetch('https://v1.hitokoto.cn').then(function (res) {
return res.json();
}).then(function (e) {
$('#description').html(e.hitokoto + "<br/> -「<strong>" + e.from + "</strong>」")
}).catch(function (err) {
console.error(err);
})