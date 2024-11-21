<script setup lang="ts">
import TopBar from "../Products/components/TopBar.vue";
//import Table from "../Products/components/Table.vue";
</script>

<template>
        <nav>
            <TopBar></TopBar>
        </nav>
        
        <section class="goods-groups">
            <span class="top-text">Классификатор товаров</span>
            <section class="goods-top">
            <span class="goods-groups-text">Группы товаров</span>
            </section>
        </section>

        

</template>

<style scoped>

/*.top-text{
    top: 100%;
    font-family: Gilroy_Regular;
    font-size: 32px;
    color: brown;
}*/

.goods-top{
    margin-bottom: 750px;
    margin-right: 40%;
}

.goods-groups{
    background-color: #ffffff;
    border: 1px;
    border-color: #E1E1E1;
    position: fixed;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 7%;
    width: 17%;
    height: 90%;
    justify-content: center;
    border-radius: 5px;
}

.goods-groups-text{
    color: black;
    font-family: Gilroy_Regular;
    font-size: 20px;
}
</style>