
const deviceWidth = document.documentElement.getBoundingClientRect().width;
如果设计图是640px的
const rate = 640 / deviceWidth;
document.getElementsByTagName('html')[0].style.fontSize = (40 / rate) + 'px';
// 如果设计图是750px的
// const rate = 750 / deviceWidth;
// document.getElementsByTagName('html')[0].style.fontSize = (50 / rate) + 'px';