<template>
  <div class="top">
    <div class="header">
      <div class="header-top raleway">
        <div class="contact">
          (607)-231-9500 | 1136 Ballyhack Road Port Crane, NY 13833
        </div>
        <div class="socials">
          <v-icon color="blue darken-3">
            mdi-facebook
          </v-icon>
          <v-icon color="blue lighten-3 ">
            mdi-google-plus
          </v-icon>
        </div>
      </div>

      <v-divider></v-divider>

      <div class="header-bottom text-center">
        <h1 class="mb-0">Hidden Fence Company</h1>
        <h3 class="mb-0">Pet Services & Store</h3>
      </div>

    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.top {
  .header {
      display: flex;
      flex-direction: column;
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
          padding: 0.5rem;

          @media screen and (max-width: 600px) {
              flex-direction: column;
              text-align: -webkit-center;
          }

          .socials i {
              margin-left: 2.5px;
              margin-right: 2.5px;
              font-size: 20px;
          }
      }
      .header-bottom {
          width: 100%;
          display: block;
          padding: 0.5rem;
      }
  }
}
</style>
