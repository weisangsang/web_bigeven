// 每次调用 $.get（）或 $.post() $.ajax()的时候
// 会先调用这个函数 ajaxPrefilter
// 在这个函数中能拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    console.log(options.url);
    // 在发起ajax请求之前统一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    console.log(options.url);
})