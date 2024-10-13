<script setup lang="ts">


</script>

<template>
   
    <main>
        layout
        <section class="left-bar">
            
        </section>
        
        <section class="goods-groups">
            <span class="goods-groups-text">Группы товаров</span>

        </section>

        <section class="tovari-label">
            <p>Классификатор товаров</p>
        </section>

        <section class="top-bar">
            <button class="button">Основное</button>
            <button class="button">Ozon</button>
            <button class="button">YandexMarket</button>
        </section>

        <section class="table">

        </section>
    </main>
</template>

<style scoped>

.left-bar{
    background-color: #FFFFFF;
    position: fixed;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 82px;
    height: 1020px;
    justify-content: center;
}

main{
    display: flex;
    flex-direction: row ;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
}
.goods-groups{
    background-color: #FFFFFF;
    border: 1px;
    border-color: #E1E1E1;
    position: fixed;
    left: 99px;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 63px;
    width: 260px;
    height: 90%;
    justify-content: center;
}
.tovari-label{
    position: fixed;
    left: 99px;
    top: 30px;
}

.top-bar{

    background-color: #FFFFFF;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    left: 371px;
    top: 63px;
    position: fixed;
    width: 80%;
    height: 65px;
    
}

.table{
    background-color: #FFFFFF;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 371px;
    top: 140px;
    width: 80%;
    height: 82%;
}

.top-bar-text{
    display: flex;
    flex-direction: row;
}

.button{
    color: black;
    left: 0px;
    
}

.goods-groups-text{
    color: black;
    top: 5%;
}
</style>