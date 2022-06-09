<template>
 <div class="header">
    <div class="header-top">
        <div class="contact">
            (607)-231-9500 | 1136 Ballyhack rd Port Crane, NY 13833 
        </div>
        <div class="socials">
            <v-icon color="blue darken-3">
                fab fa-facebook
            </v-icon>
            <v-icon color="blue lighten-3 ">
                fab fa-google-plus
            </v-icon>
        </div>
    </div>
    <br/>
    <div class="py-3">
        <v-divider/>
    </div>
    <div class="header-bottom text-center">
        <p class="mb-0 text-h4">Hidden Fence Company</p>
        <p class="mb-0">Pet Services & Store</p>
    </div>
    
 </div>

</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.header {
    padding: 1rem 2rem 1rem 2rem;
    .header-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        float: left;
        color: #b5b5b5;
        font-size: 11px;
        line-height: 1.3;
        
        .socials i {
            margin-left: 2.5px;
            margin-right: 2.5px;
            font-size: 20px;
        }
    }
    .header-bottom {
        width: 100%;
        display: block;
    }
}
</style>
