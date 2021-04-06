<template>
  <div class="gold-landing blu">
    <!--Header section-->
    <header class="gold-landing__header">
      <BliIconBag />
    </header>

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
      <h5>Harga beli</h5>
      <h2>Rp900.000/gram</h2>
      <div class="gold-landing__stats-changes">
        Rp9.703(+1.11%)
      </div>
      <!-- <lineChart :width="272" :height="178"></lineChart> -->
      <div></div>
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
          <div class="faq-accordion__items">
            <div class="faq-accordion__items-title">
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
          <div class="faq-accordion__items">
            <div class="faq-accordion__items-title">
                Harga beli dan cara membeli emas
                <div class="chevron"></div>
            </div>
            <div class="faq-accordion__items-sub">
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            </div>
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
        <BliIconInfo color="#0095da" />
      </BliCard>
    </section>

    <!--Promo recommendation section-->
    <section class="gold-landing__banner">
      <img /><div> Promo recommendation</div>
      <div class="gold-landing__banner-carousel"></div>
    </section>

    <!--Footer section-->
    <section class="gold-landing__footer">
      <h5>Tabung emas sebanyak-banyaknya
        mulai dari Rp10.000.
      </h5>
      <BliButton color="secondary">Buka tabungan sekarang</BliButton>
    </section>
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
  display: grid;
  place-items: center;
  width: 100%;
  &__header {
    @include tablet {
      display: none;
    }
    z-index: 3;
    height: 56px;
    padding: $spacing-m;
    position: sticky;
    width: 100%;
    background: $blu-white-high;
    box-shadow: $blu-shadow;
    svg { color: $blu-black-low }
  }
  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 56px $spacing-l 0 $spacing-l;
    &-illust { 
      padding-bottom: 33px;
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
    &-changes {
      color: $blu-lime;
      font-family: 'efframedium';
      margin-bottom: $spacing-xs;
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
        &-illust {
          display: flex;
          align-items: center;
          @include mobile {
            width: 100px;
            height: 100px;
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
      }
      animation: bounce 30s linear infinite;
      left: -24px;
      top: 8px;
    }
    &-floating {
      @include mobile {
        width: 80px;
      }
      animation: bounce 23s linear infinite;
      right: 0;
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
          &-sub {
            margin: 8px 0;
            font-size: 1.4rem;
            color: $blu-black-low;
            width: calc(100% - 32px);
          }
          &-title {
            display: flex;
            justify-content: space-between;
            .chevron {
              background: transparent url(../assets/illustrations/ic-arrow-blue.svg) center center no-repeat;
              width: 24px;
              height: 24px;
              transform: rotate(270deg);
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
      align-items: center ;
      justify-content: space-between;
      padding: $spacing-m;
      cursor: pointer;
      @include mobile {
        font-size: 1.4rem;
      }
    }
  }
  &__banner {
    padding: 16px;
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

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-36px);
  }
}
</style>
<script>
// import lineChart from './charts/LineChart'

export default {
  // components: {
  //   lineChart
  // },
  data () {
    return {
      items: [
        {
          name:'Harga Beli',
        },
        {
          name:'Harga Jual',
        }
      ],
      selectedTab: 1
    }
  },
  mounted () {
    this.selectedTab = 1
  },
  methods: {
    tabClick (index) {
      this.selectedTab = index
    }
  }
}
</script>