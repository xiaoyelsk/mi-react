    document.addEventListener('DOMContentLoaded',()=>{
        var countDown = document.getElementById('countDown');

        console.log(countDown)

        var end = Date.parse('2018-05-18 15:50:20');

        showTime();

        var timer = setInterval(showTime,1000);

        function showTime(){
            // 获取当前时间
            var now = Date.now();

            // 计算差值
            var offset = Math.floor((end - now)/1000);//毫秒

            // 把时间转换成：xx天xx时xx分xx秒
           
            if(offset <= 0){
                // 清除定时器
                clearInterval(timer);
                // 隐藏倒计时
                countDown.style.display = 'none';
            }

            var sec = offset%60;
            var min = Math.floor(offset/60)%60;
            var hour = Math.floor(offset/60/60)%24;
            var day = Math.floor(offset/60/60/24);

            sec = sec<10? '0'+sec : sec;
            min = min<10? '0'+min : min;
            hour = hour<10? '0'+hour : hour;
            // day = day<10? '0'+day : day;

            countDown.innerHTML = day + '天' + hour + ':'+ min + ':' + sec;


                }




    })