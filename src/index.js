/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:44:35
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 14:29:19
 */

import Vue from 'vue';
import APP from './component/test.vue';

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
        vueInit()
    } catch (error) {
        console.log('启动出错, 请检查....');
    }
}

init()


if (module.hot) {
    console.log(111);
    module.hot.accept('./component/test.vue', function () {
        console.log('css 更新');
    });
}
