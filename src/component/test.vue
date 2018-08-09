/*
 * @Author: duantao-ds
 * @Date: 2018-08-08 23:47:49
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 09:55:20
 */

<template>
    <div class="app">
        <h1>{{message}}</h1>
    </div>
</template>


<script>
export default {
    name: 'APP',
    data() {
        return {
            message: 'Hello World!!'
        }
    }
}
</script>

<style lang="less" scoped>
    .app {
        color: #f00;
    }
</style>
