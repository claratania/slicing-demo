<template>
  <div class="gold-landing blu">  
    <!--Header section-->
    <header class="gold-landing__header">
      <img src="../assets/illustrations/back.svg"/>
    </header>
    <div class="gold-landing__shadow"></div>
    <div class="gold-landing__cover"></div>
    <div class="wrapper">
      <!--Main section-->
      <section class="gold-landing__main">
        <div class="gold-landing__main-illust">
          <img src="../assets/illustrations/paylater.svg" />
        </div>
        <div class="gold-landing__main-cta">
          <h1>Emas</h1>
          <p class="cta-subtitle">Tabung emas sebanyak-banyaknya mulai dari Rp10.000.</p>
          <BliButton
            color="secondary"
            class="cta-button"> Buka tabungan sekarang</BliButton>
          <div class="cta-notes">
            Didukung oleh
            <img src="../assets/illustrations/logo-indodana.png">
          </div>
        </div>
      </section>

      <!--Chart section-->
      <section class="gold-landing__stats">
        <div class="gold-landing__stats-changes">
          <div class="price">
            <h5>Harga beli</h5>
            <h2>Rp900.000/gram</h2>
            <div class="price-changes">
              Rp9.703(+1.11%)
            </div>
          </div>
          <div class="gold-landing__stats-tab">
            <button
              class="tab-btn"
              :class="tabClasses(idx)"
              @click="selectTab(idx)"
              v-for="(n, idx) in tabItems" :key="idx"> {{ n }} </button>
          </div>
        </div>
        <div class="gold-landing__stats-chips">
          <BliChipChoice
            v-for="i in 3"
            :key="'blichipchoice' + i" :itemValue="i"
            v-model="chipValue" type="radio" outline>
            {{i}} Bulan
          </BliChipChoice>
        </div>
        <hr />
        <div class="gold-landing__stats-chart">
        <line-chart></line-chart>
        <!-- <img src="../assets/illustrations/chart.png"/> -->
        </div>
        <BliTicker class="gold-landing__stats-timestamp">
          <div class="ticker__content">
            Diperbarui: 28 Feb 2021, 10.00 WIB
          </div>
        </BliTicker>
      </section>

      <!--USP section-->
      <section class="gold-landing__usp">
        <h4>Untungnya menabung emas di Blibli</h4>
        <div  class="gold-landing__usp-lists">
          <div class="usp">
            <div class="usp-illust">
              <img src="../assets/illustrations/transaksi-cepat-aman.svg" /></div>
            <div class="usp-desc">
              <h6 class="usp-desc__title">Investasi aman</h6>
              <div class="usp-desc__sub">Terdaftar dan diawasi oleh 
                OJK (Otoritas Jasa Keuangan).
              </div>
            </div>
          </div>
          <div class="usp">
            <div class="usp-illust">
              <img src="../assets/illustrations/metode-pembayaran.svg" /></div>
            <div class="usp-desc">
              <h6 class="usp-desc__title">Beli dan jual kapan saja</h6>
              <div class="usp-desc__sub">Berinvestasi secara online 
                tak terbatas waktu dan tempat.
              </div>
            </div>
          </div>
          <div class="usp">
            <div class="usp-illust">
              <img src="../assets/illustrations/semua-kebutuhanmu.svg" /></div>
            <div class="usp-desc">
              <h6 class="usp-desc__title">Sesuai syariah</h6>
              <div class="usp-desc__sub">Berinvestasi secara online 
                tak terbatas waktu dan tempat.
              </div>
            </div>
          </div>
        </div>
        <div class="gold-landing__usp-ojk">
          <div>Terdaftar dan diawasi oleh</div><img />
        </div>
      </section>

      <!--FAQ section-->
      <section class="gold-landing__faq">
        <img class="gold-landing__faq-question" src="../assets/illustrations/question.svg"/>
        <img class="gold-landing__faq-floating" src="../assets/illustrations/floating.svg"/>
        <div class="gold-landing__faq-title">Tentang Emas</div>
        <div class="gold-landing__faq-desc">
          Punya pertanyaan seputar Emas? <br />
          Kamu bisa cari jawabannya di sini!
        </div>
        <div class="gold-landing__faq-lists">
          <BliCard class="faq-accordion">
            <div class="faq-accordion__items"
              :class="activeClass(n)"
              v-for="n in 4"
              :key="n">
              <div class="faq-accordion__items-title" @click="moreDetail(n)">
                Buka tabungan emas dan verifikasi
                <div class="chevron"></div>
              </div>
              <div class="faq-accordion__items-sub">
                Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              </div>
              <hr />
            </div>
            <BliButton 
              ghost color="secondary"
              size="small"
              class="faq-accordion__link">
              Lihat selengkapnya
            </BliButton>
          </BliCard>
        </div>
        <BliCard class="gold-landing__faq-tnc">
          Syarat &amp; Ketentuan
          <a href="https://www.blibli.com/faq/topic/tentang-blibli/">
            <BliIconInfo color="#0095da" />
          </a>
        </BliCard>
      </section>

      <!--Promo recommendation section-->
      <section class="gold-landing__banner">
        <img /><div class="gold-landing__banner-title"> Rekomendasi promo</div>
        <div class="gold-landing__banner-carousel">
          <div class="carousel">
          <button class="carousel-prev"></button>
            <fragment v-for="n in 6" :key="n" class="carousel-banner">
              <a href="#">
                <img
                  class="carousel-banner__img"
                  src="../assets/illustrations/brizzi.webp" />
              </a>
            </fragment>
          <button class="carousel-next"></button>
          </div>
        </div>
      </section>

      <!--Footer section-->
      <section class="gold-landing__footer">
        <h5>Tabung emas sebanyak-banyaknya
          mulai dari Rp10.000.
        </h5>
        <BliButton color="secondary">Buka tabungan sekarang</BliButton>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@blibli/blue-tokens/dist/blue-tokens.scss';
@import '~@blibli/blue-supports/dist/blue-supports.scss';

// Tokens for spacing
$spacing-xxs: 4px;
$spacing-xs: 8px;
$spacing-m: 16px;
$spacing-l: 20px;
$spacing-xl: 24px;

.gold-landing {
  width: 100%;
  position: relative;
  @include tablet {
      &__header, &__shadow, &__cover {
        display: none;
      }
    }
  &__header {
    z-index: 3;
    height: 56px;
    padding: $spacing-m;
    position: sticky;
    top: 0;
    width: 100%;
    background: $blu-white-high;
    svg { 
      color: $blu-black-low;
      z-index: 9;
      position: fixed;
    }
  }
  &__cover {
    height: 36px;
    width: 100%;
    background-image: linear-gradient($blu-white-high, transparent);
    position: absolute;
    left: 0;
    top: 56px;
    z-index: 2;
  }
  &__shadow {
    height: 8px;
    width: 100%;
    background-image: linear-gradient(rgba(0,0,0, 0.05), transparent);
    position: sticky;
    left: 0;
    top: 56px;
    z-index: 2;
  }
  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px $spacing-l 0 $spacing-l;
    &-illust { 
      animation: enter ease 1s;
      padding-bottom: 33px;
      min-height: 320px;
      }
    &-cta {
      max-width: 272px;
      .cta {
        &-subtitle {
        color: $blu-black-medium;
        margin-bottom: $spacing-xl;
        }
        &-notes {
          display: flex;
          color: $blu-black-low;
          margin: 40px 0 $spacing-xl 0;
          font-size: 1.4rem;
          img {
            margin-left: $spacing-xs;
          }
          
        }
      }
    }
    @include mobile {
      flex-direction: column;
      text-align: center;
      &-cta {
        .cta-notes {justify-content: center;}
      }
    }
    @include tablet {
      margin-top: 80px;
      &-illust img {
        width: 420px;
        height: 360px;
        margin-right: 56px;
      }
    }
  }
  &__stats {
    position: relative;
    border-radius: $blu-radius-xl;
    box-shadow: $blu-shadow;
    padding: $spacing-xl;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    place-items: center;
    &-changes {
      display: flex;
      width: 100%;
      @include mobile {
        flex-direction: column;
        place-items: center;
      }
      .price {
        width: 100%;
        &-changes {
          color: $blu-lime;
          font-family: 'efframedium';
          margin-bottom: $spacing-xs;
        }
      }
    }
    &-tab {
      border-radius: $blu-radius-m;
      background: $blu-white-high;
      box-shadow: $blu-shadow;
      display: flex;
      width: 100%;
      height: 36px;
      padding: $spacing-xxs;
      margin-top: $spacing-m;
      margin-bottom: $spacing-l;
      max-width: 350px;
      .tab-btn {
        padding: 5px 0;
        font-size: 1.4rem;
        font-family: $blu-font-base-2;
        color: $blu-blue;
        width: 100%;
        border-radius: $blu-radius-m;
        transition: background-color 0.5s;
        &.b-selected {
          color: $blu-white-high;
          background-color: $blu-blue-light;
        }
      }
    }
    &-chart {
      margin: $spacing-m 0;
      animation: enter ease 1s;
      min-height: 150px;
      display: flex;
      width: 100%;
      overflow: scroll;
    }
    &-chips {
      overflow-x: scroll;
      text-align: left;
      word-wrap: nowrap;
      width: 100%;
    }
    hr {
      @include mobile {
        display: none;
      }
      margin: $spacing-m 0 $spacing-xl 0;
      width: calc(100% + 48px);
    }
    &::before {
      content:'';
      width: 100%;
      height: 28px;
      background-color: #ffffff;
      position: absolute;
      bottom: -20px;
      left: 0;
      border-radius: 0 0 $blu-radius-xl $blu-radius-xl;
      box-shadow: $blu-shadow;
      z-index: 0;
    }
    &::after {
      content:'';
      width: 100%;
      height: 12px;
      background-color: #ffffff;
      position: absolute;
      bottom: 8px;
      left: 0;
    }
    &-timestamp {
      max-width: 300px;
    }
  }
  &__usp {
    background-color: $blu-gray-light-4;
    padding: 60px $spacing-m 40px $spacing-m;
    width: 100%;
    h4 {
      margin-bottom: 32px;
      text-align: center;
    }
    &-lists {
      @include tablet {
        display: flex;
        justify-content: space-around;
        .usp {
          @include tablet {
            text-align: center;
          }
          flex-direction: column;
          max-width: 400px;
          padding: 32px 44px 24px 45px;
          &-illust {
            max-width: 200px;
          }
        }
      }
      .usp {
        display: flex;
        align-items: center;
        padding-bottom: $spacing-l;
        &-illust {
          display: flex;
          align-items: center;
          @include mobile {
            min-width: 100px;
            max-width: 150px;
          }
        }
        &-desc {
          @include mobile {
            margin-left: 20px;
          }
          @include tablet {
            margin-top: 32px;
          }
          &__sub {
            font-size: 1.4rem;
            color: $blu-black-medium;
          }
        }
      }
    }
    &-ojk {
      display: flex;
      align-items: center;
      color: $blu-black-low;
      padding-top: 42px;
      font-size: 1.4rem;
      justify-content: center;
    }
  }
  &__faq {
    text-align: center;
    padding: 40px $spacing-m $spacing-xl $spacing-m;
    position: relative;
    @include tablet {
      padding-top: 64px;
    }
    &-question, &-floating {
      position: absolute;
    }
    &-question {
      @include mobile {
        width: 72px;
        left: -24px;
      }
      animation: bounce 25s linear infinite;
      left: -88px;
      top: 8px;
    }
    &-floating {
      @include mobile {
        width: 80px;
        right: -24px;
      }
      animation: bounce 18s linear infinite;
      right: -112px;
      top: -12px;
    }
    &-title {
      font-family: $blu-font-base-2;
      margin-bottom: $spacing-m;
      font-size: 2rem;
      @include tablet {
        font-size: 2.4rem;
      }
    }
    &-desc {
      color: $blu-black-low;
    }
    &-lists {
      text-align: left;
      margin: $spacing-xl 0;
      .faq-accordion {
        padding: $spacing-xl $spacing-m;
        max-width: 592px;
        &__items {
          padding-top: 8px;
          &.b-active {
            .faq-accordion__items-sub {
              max-height: 200px;
            }
            .faq-accordion__items-title .chevron {
              transform: rotate(90deg);
            }
          }
          &-sub {
            max-height: 0;
            overflow: hidden;
            margin: 8px 0;
            font-size: 1.4rem;
            color: $blu-black-low;
            width: calc(100% - 32px);
            transition: max-height .5s;
          }
          &-title {
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            .chevron {
              background: transparent url(../assets/illustrations/ic-arrow-blue.svg) center center no-repeat;
              width: 24px;
              height: 24px;
              transform: rotate(270deg);
              transition: transform .3s;
            }
          }
        }
        &__link {
          width: 100%;
        }
      }
    }
    &-tnc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: $spacing-m;
      cursor: pointer;
      a {
        display: flex;
      }
      @include mobile {
        font-size: 1.4rem;
      }
    }
  }
  &__banner {
    padding: $spacing-xl 0;
    &-title {
      font-size: 1.4rem;
      margin-left: $spacing-xl;
    }
    &-carousel {
      padding: 0 $spacing-xl;
      margin-top: $spacing-xs;
      position: relative;
      .carousel {
        display: flex;
        overflow: scroll;
        width: calc(100vw - 60px);
        max-width: 592px;
        scroll-snap-type: x mandatory;
        &::-webkit-scrollbar { display: none; }
        &-banner {
          scroll-snap-align: start;
          min-width: 500px;
          transition: min-width .5s;
          @include mobile {
            min-width: 300px;
          }
        }
        &-prev, &-next {
          @include mobile {
            display: none;
          }
          width: 51px;
          height: 51px;
          background-color: $blu-white-high;
          opacity: 0.88;
          position: absolute;
          top: 35%;
          border-radius: $blu-radius-xl;
          box-shadow: $blu-shadow;
          &::after {
            content: '';
            background: transparent url(../assets/illustrations/ic-arrow-blue.svg) center center no-repeat;
            width: 24px;
            height: 24px;
            position: absolute;
            left: 13px;
            top: 14px;
          }
        }
        &-prev {
          left: 0;
        }
        &-next {
          right: 0;
          &::after {
            transform: rotate(180deg);
            left: 15px;
          }
        }
      }
    }
  }
  &__footer {
    width: 100%;
    text-align: center;
    padding: 40px $spacing-xl;
    background-color: $blu-blue-light-4;
    h5 {
      margin-bottom: 24px;
    }
    @include tablet {
      padding: 56px $spacing-xl;
    }
  }
}

.wrapper {
  overflow-x: hidden;
  display: grid;
  place-items: center;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-36px);
  }
}

@keyframes enter {
  0% { 
    opacity: 0;
    margin: -12px;
  }
  100% {
    opacity: 1;
  }
}

</style>
<script>
import lineChart from './charts/LineChart'

export default {
  components: {
    lineChart
  },
  data () {
    return {
      selectedTab: 1,
      activeIndex: 1,
      chipValue: 0,
      tabItems: ['Harga beli', 'Harga jual']
    }
  },
  mounted () {
    this.selectedTab = 0
  },
  methods: {
    moreDetail (index) {
      if (index == this.activeIndex) {
        return this.activeIndex = -1
      }
      this.activeIndex = index
    },
    selectTab (index) {
      this.selectedTab = index
    },
    activeClass (idx) {
      return {'b-active': idx === this.activeIndex}
    },
    tabClasses (idx) {
      return {'b-selected': idx === this.selectedTab}
    },
    tabClick (index) {
      this.selectedTab = index
    }
  }
}
</script>