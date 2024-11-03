<script setup lang="ts">
import LeftBat from "./components/LeftBat.vue";
import TopBar from "./components/TopBar.vue";
import Tovari from "./components/Tovari.vue";
</script>

<template>
    <section class="main">

        <nav>
            <LeftBat>

            </LeftBat>
            <TopBar>

            </TopBar>

        </nav>
        
        <head>
            <!-- //хлебные крошки -->
        </head>


        <main>
            <RouterView>
                <Tovari>

                </Tovari>
            </RouterView>
        </main>
        

        <section class="table">

        </section>
    </section>

</template>

<style scoped>




.main{
    display: flex;
    flex-direction: row;
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
    width: 100%;
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
    width: 100%;
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