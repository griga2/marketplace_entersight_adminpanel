<script setup lang="ts">
import LeftBar from "./components/LeftBat.vue";

import ProductsView from "../Products/ProductsView.vue";

import Products from "../LayoutVuew/components/Products.vue"
import Table from "../Products/components/Table.vue";

</script>

<template>
    <section class="main">

        
        <header>
            <span>
                хлебные крошки
            </span>
        </header>

        <LeftBar>

        </LeftBar>
       

        <main>
            <Products>
            
            </Products>
            <RouterView>
                <ProductsView>

                </ProductsView>
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
    color: #F8F8F9;
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
    top: 100%;
}
</style>