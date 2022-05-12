<template>
 <div class="header">
    <div class="header-top d-flex justify-space-between align-center">
        <div class="contact">
            (607)-231-9500 | 1136 Ballyhack rd Port Crane, NY 13833 
        </div>
        <div class="socials">
            <v-icon color="blue darken-3">
                fab fa-facebook
            </v-icon>
            <v-icon color="blue lighten-3">
                fab fa-google-plus
            </v-icon>
        </div>
    </div>
    <br/>
    <div class="py-3">
        <v-divider/>
    </div>
    <div class="header-bottom d-flex justify-center">
        <span class="text-h4">Hidden Fence Company</span>
    </div>
 </div>

</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.header {
    padding: 2rem;
    .header-top {
        width: 100%;
        color: #b5b5b5;
        float: left;
        font-size: 11px;
        line-height: 1.3;
    }
    .header-bottom {
        width: 100%;
    }
}
</style>
