<script setup lang="ts">
import LeftBar from "./components/LeftBat.vue";
import TopBar from "./components/TopBar.vue";
import Tovari from "./components/Tovari.vue";
import Table from "./components/Table.vue";

</script>

<template>
    <section class="main">

        <nav>
            <LeftBar>

            </LeftBar>
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
        

        <section>
            <Table>
                
            </Table>
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



.tovari-label{
    position: fixed;
    left: 99px;
    top: 30px;
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