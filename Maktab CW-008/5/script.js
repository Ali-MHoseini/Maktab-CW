var now = new Date();
var time = now.getTime();
var expireTime = time + 1000*36000;
now.setTime(expireTime);
document.cookie = 'cookie=ok;expires='+now.toUTCString()+';path=/';