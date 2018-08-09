/*
 * @Author: duantao-ds
 * @Date: 2018-08-09 16:37:53
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-09 16:51:00
 */

<template>
    <div class="about-home">
        <h2>{{message}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'About_Message',
        data() {
            return {
                message: '这是关于我子路由--信息'
            }
        }
    }
</script>

<style lang="less" scoped>
    .about-home {
        color: #f0f;
    }
</style>
