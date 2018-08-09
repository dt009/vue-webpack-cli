/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:44:35
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 10:45:38
 */

// import Vue from 'vue';
// import APP from './component/test.vue';

import './style/index.less';
import Avatar from './public/avatar.gif';
function vueInit() {
    // const app = new Vue({
    //     el: '#app',
    //     components: {
    //         APP
    //     },
    //     render: h => h(APP)
    // })

    let element = document.createElement('div');

    element.innerHTML = 'Hello World!!!';

    let img = new Image();
    img.src = Avatar;
    element.appendChild(img);

    document.getElementById('app').appendChild(element);
}


function init() {
    try {
        vueInit()
    } catch (error) {
        console.log('启动出错, 请检查....');
    }
}

init()
