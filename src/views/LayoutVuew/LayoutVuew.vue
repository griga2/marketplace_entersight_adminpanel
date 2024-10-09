<script setup lang="ts">


</script>

<template>
   
    <main>
        layout
        <section class="left-bar">
            <p>гриша хуй</p>
        </section>
        
        <section class="goods-groups">
            <p>писька</p>
        </section>

        <section class="tovari-label">
            <p>Классификатор товаров</p>
        </section>

        <section class="top-bar">

        </section>

        <section class="table">

        </section>
    </main>
</template>

<style scoped>

.left-bar{
    background-color: #FFFFFF;
    position: absolute;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 82px;
    height: 100%;
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
    position: absolute;
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
    position: absolute;
    left: 99px;
    top: 30px;
}

.top-bar{
    background-color: #FFFFFF;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 371px;
    top: 63px;
    position: absolute;
    width: 1062px;
    height: 65px;
}

.table{
    background-color: #FFFFFF;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 371px;
    top: 222px;
    width: 1062px;
    height: 573px;
}
</style>