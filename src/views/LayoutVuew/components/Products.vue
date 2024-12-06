<script>

</script>

<template>
     
        
        <section class="goods-groups">
            <section class="goods-top">
            <span class="goods-groups-text">Группы товаров</span>
            </section>
            <div class="line"></div>
            
           
            
            
        </section>

</template>

<style scoped>

.line{
    width: 100%;
    border-bottom: solid #E1E1E1;
    margin: 4% 0; /* Отступы между заголовком и линией */
}


.top-text{
    font-family: Gilroy_Regular;
    font-size: 26px;
    color: black;
    
}

.goods-top{
    margin-top: 5%;
    margin-right: 40%;
}

.goods-groups{
    background-color: #ffffff;
    border: solid;
    border-color: #E1E1E1;
    position: fixed;
    left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 7%;
    width: 17%;
    height: 90%;
    justify-content: flex-start;
    border-radius: 5px;
}

.goods-groups-text{
    color: black;
    font-family: Gilroy_Regular;
    font-size: 20px;
    
}
</style>