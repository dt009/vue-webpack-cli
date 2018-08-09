/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:47:49
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 15:40:31
 */

<template>
    <div class="app">
        <h1>{{message}}</h1>
        <img src="../public/images/aa.jpeg" alt="">
        <button @click="test">点击我!!</button>
    </div>
</template>


<script>
export default {
    name: 'APP',
    data() {
        return {
            message: 'Hello World!!'
        }
    },
    methods: {
        test() {
            alert('111');

            fetch('test', {
                method: 'post',
                headers: new Headers({
                    'Content-type': 'application/json'
                }),
                body: 'aaa'
            })
                .then(res => {
                    console.log(res);
                })
        }
    }
}
</script>
s
<style lang="less" scoped>
    .app {
        color: #ff0;
        height: 500px;
        width: 500px;
        background: url('../public/images/avatar.gif')
    }
</style>
