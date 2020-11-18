<template>
  <div class="footer">
    <div class="footer-top">
      <b-container>
        <div class="footer-top-wrap">
          <div class="footer-nav">
            <router-link :to="{name: 'case'}" active-class="active">Кейсы</router-link>
            <router-link :to="{name: 'news'}" active-class="active">Новости студии</router-link>
            <router-link :to="{name: 'other'}" active-class="active">Другое</router-link>
          </div>
          <div class="footer-search">Поиск</div>
        </div>
      </b-container>
    </div>
    <div class="footer-bot">
      <b-container>
        <div class="footer-bot-wrap">
          <div class="footer-item-1">
            <div class="logo">
              <router-link :to="{name: 'home'}" exact>
                <img src="@img/logo.svg" alt="">
              </router-link>
            </div>
            <p>LyricBlog © 2020 Все права защищены</p>
          </div>
          <div class="footer-item-2">
            <a href="#">Подписка на новости</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
          <div class="footer-item-3">
            <a href="https://lyricweb.ru/" target="_blank">
              <img src="@img/logoLw.svg" alt="">
              <span>Разработка сайтов на грани<br>искусства</span>
            </a>
          </div>
          <div class="footer-item-4">
            <a href="mailto:blog@lyricweb.ru">
              <img src="@img/mail.svg" alt="">
              blog@lyricweb.ru
            </a>
            <a href="tel:+79202223376">
              <img src="@img/phone.svg" alt="">
              +7 (920) 222-33-76
            </a>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~@/assets/scss/main.scss';
.footer {
  padding: 20px 0 35px;
  background-color: $brand;
  color: $brand-light;
  a {
    color: $brand-light;
  }
  &-top {
    border-bottom: 1px solid #5C2395;
    padding-bottom: 25px;
    border-image: linear-gradient(to right, #5C2395, #1DDBC4);
    border-image-slice: 1;
    &-wrap {
      display: flex;
      justify-content: space-between;
    }
  }
  &-bot {
    padding-top: 25px;
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      p {
        margin-bottom: 0;
      }
      a {
        display: block;
      }
    }
  }
  &-item-1 {
    .logo {
      margin-bottom: 10px;
    }
  }
  &-item-2 {
    a {
      &:first-child {
        text-decoration: underline;
        margin-bottom: 5px;
      }
    }
  }
  &-item-3 {
    a {
      display: flex;
      text-decoration: underline;
      line-height: 19px;
    }
    img {
      flex: none;
      margin-right: 10px;
    }
  }
  &-item-4 {
    a {
      &:last-child {
        margin-top: 8px;
      }
    }
    img {
      vertical-align: text-top;
      margin-right: 7px;
    }
  }
}
</style>
