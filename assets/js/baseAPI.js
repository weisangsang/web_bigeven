// 每次调用 $.get（）或 $.post() $.ajax()的时候
// 会先调用这个函数 ajaxPrefilter
// 在这个函数中能拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    // console.log(options.url);
    // 在发起ajax请求之前统一拼接请求的根路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
        // console.log(options.url);

    // 统一为有权限的接口，设置headers 请求
    if (options.url.indexOf('/my') !== -1)
        options.headers = {
            Authorization: localStorage.getItem('token') || ""
        }

    // 全局统一挂complete 回调函数 
    options.complete = function(res) {
        if (res.responseJSON.status == 1 && res.responseJSON.message == '身份认证失败') {
            // 1.强制清空token
            localStorage.removeItem('token')
                // 2. 强制跳转到登录页面
            location.href = '/login.html'
        }

    }
})