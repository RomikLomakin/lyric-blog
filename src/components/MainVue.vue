<template>
  <div class="content">
    <b-container>
      <div class="main-title">
        <h2>Популярное</h2>
        <div class="divider"></div>
      </div>
      <b-row>
        <b-col cols="4">
          <div class="popular-item">
            <div
              class="img-wrap"
              :style="{ backgroundImage: 'url(' + require('@img/popular-1.jpg') + ')' }"
            ></div>
            <div class="item-info">
              <h4>Обновленный сайт LyricWEB</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis cras a
                risus pulvinar ac, tempor malesuada nunc libero. Mauris libero amet sed
                ut gravida.
              </p>
              <div class="item-statistic">
                <div class="date">1.04.2020</div>
                <div class="item-activity">
                  <div class="activity view">29</div>
                  <div class="activity comments">12</div>
                  <div class="activity like">19</div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="popular-item">
            <div
              class="img-wrap"
              :style="{ backgroundImage: 'url(' + require('@img/popular-2.jpg') + ')' }"
            ></div>
            <div class="item-info">
              <h4>Че то произошло</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis cras a
                risus pulvinar ac, tempor malesuada nunc libero. Mauris libero amet sed
                ut gravida.
              </p>
              <div class="item-statistic">
                <div class="date">1.04.2020</div>
                <div class="item-activity">
                  <div class="activity view">29</div>
                  <div class="activity comments">12</div>
                  <div class="activity like">19</div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="popular-item">
            <div
              class="img-wrap"
              :style="{ backgroundImage: 'url(' + require('@img/popular-3.jpg') + ')' }"
            ></div>
            <div class="item-info">
              <h4>И еще че то</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis cras a
                risus pulvinar ac, tempor malesuada nunc libero. Mauris libero amet sed
                ut gravida.
              </p>
              <div class="item-statistic">
                <div class="date">1.04.2020</div>
                <div class="item-activity">
                  <div class="activity view">29</div>
                  <div class="activity comments">12</div>
                  <div class="activity like">19</div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="main-title">
        <h2>Последние новости</h2>
        <div class="divider"></div>
      </div>
      <b-row>
        <b-col cols="6" v-for="post in postsList" :key="post.id">
          <div class="last-news">
            <div
              class="img-wrap"
              :style="{ 'background-image': 'url(' + post.image_head + ')'}"
            ></div>
            <div class="item-info">
              <div class="top-info">
                <span class="category">{{ post.category.title }}</span>
                <span class="date">{{ moment(post.create_dt).format('DD.MM.YY') }}</span>
              </div>
              <h4>{{ post.title }}</h4>
              <div class="item-statistic">
                <div class="author">{{ post.author.username }}</div>
                <div class="item-activity">
                  <div class="activity view">29</div>
                  <div class="activity comments">12</div>
                  <div class="activity like">19</div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <!-- <button class="btn more">Показать еще</button> -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import moment from 'moment'

moment.locale('ru')

export default {
  data () {
    return {
      postsList: null,
      moment: moment
    }
  },
  methods: {

  },
  created () {
    this.getDataMix().then(response => {
      this.postsList = response.data
      console.log(this.postsList)
    })
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/main.scss';

.main-title {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;
  h2 {
    white-space: nowrap;
  }
  .divider {
    margin-top: 5px;
    margin-left: 15px;
    width: 100%;
    height: 1px;
    background-color: #EEE;
  }
}

.popular-item {
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: .3s;
  .img-wrap {
    position: relative;
    height: 160px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(270deg, #1DDBC4 0%, #5C2395 100.14%);
      transition: .3s;
    }
  }
  .item-info {
    position: relative;
    padding: 25px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #EEEEEE;
    border-top: none;
    h4 {
      font-size: 20px;
    }
    p {
      color: #837b8a;
    }
  }
  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    .img-wrap {
      &:after {
        width: 100%;
      }
    }
  }
}

.last-news {
  display: flex;
  margin-bottom: 30px;
  overflow: hidden;
  height: 120px;
  border-radius: 15px;
  cursor: pointer;
  transition: .3s;
  .img-wrap {
    position: relative;
    width: 170px;
    height: 120px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      right: 0;
      width: 3px;
      height: 0;
      background: linear-gradient(180deg, #5C2395 0%, #1DDBC4 100%);
      transition: .3s;
    }
  }
  .top-info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 5px;
    color: $gray-text;
    .category {
      text-transform: uppercase;
    }
  }
  .item-info {
    border: 1px solid #EEEEEE;
    padding: 15px 30px;
    border-left: none;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    .img-wrap {
      &:after {
        height: 100%;
      }
    }
  }
}

.item-statistic {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: $gray-text;
}

.item-activity {
  display: flex;
  .activity {
    margin-left: 30px;
  }
}

.more {
  padding: 17px 0;
  margin: 0 15px;
  width: 100%;
  color: #3C1D70;
  font-size: 14px;
  text-transform: uppercase;
  border: 2px solid #3C1D70;
  border-image: linear-gradient(to top, #3C1D70, #30b1b1);
  border-image-slice: 1;
}
</style>
