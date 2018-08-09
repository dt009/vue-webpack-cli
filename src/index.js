/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:44:35
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 15:57:56
 */

import Vue from 'vue';
import APP from './component/test.vue';
import setMetaEl from './responsive/meta';
import setHtmlFont from './responsive/font';

function vueInit() {
    const app = new Vue({
        el: '#app',
        components: {
            APP
        },
        render: h => h(APP)
    })
}


function init() {
    try {
        setMetaEl(window, document);
        setHtmlFont(),
        vueInit();
    } catch (error) {
        console.log('启动出错, 请检查....');
    }
}

init()
