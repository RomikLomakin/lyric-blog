<template>
  <div class="header">
    <b-container>
      <b-row align-v="center">
        <b-col cols="2">
          <div class="logo">
            <router-link :to="{name: 'home'}" exact>
              <img src="@img/logo.svg" alt="">
            </router-link>
          </div>
        </b-col>
        <b-col cols="5">
          <div class="header-links">
            <router-link :to="{name: 'case'}" active-class="active">Кейсы</router-link>
            <router-link :to="{name: 'news'}" active-class="active">Новости студии</router-link>
            <router-link :to="{name: 'other'}" active-class="active">Другое</router-link>
          </div>
        </b-col>
        <b-col>
          <div class="header-functional">
            <div class="search">
              <img src="@img/search.svg" alt="">
              <a href="">Поиск</a>
            </div>
            <div class="divider"></div>
            <div class="login">
              <img src="@img/person.svg" alt="">
              <a href="">Вход</a> |
              <a href="">Регистрация</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~@/assets/scss/main.scss';

.header {
  padding: 16px 0;
  background-color: $brand;
  color: $brand-light;
  a {
    font-size: 14px;
  }
  &-links {
    a {
      display: inline-block;
      color: $brand-light;
      text-transform: uppercase;
      margin-left: 40px;
    }
  }
  &-functional {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .search {
      img {
        margin-right: 5px;
      }
      a {
        position: relative;
        display: inline-block;
        color: $brand-light;
        &:after {
          position: absolute;
          content: "";
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          border-top: 1px dashed $brand-light;
        }
      }
    }
    .divider {
      margin: 0 20px;
      width: 1px;
      height: 20px;
      background-color: #8a8281;
    }
    .login {
      img {
        margin-right: 5px;
      }
      a {
        position: relative;
        display: inline-block;
        text-transform: uppercase;
        color: $brand-light;
        &:after {
          position: absolute;
          content: "";
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          border-top: 1px dashed $brand-light;
        }
      }
    }
  }
}
</style>
