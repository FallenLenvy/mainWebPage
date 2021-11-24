<template>
  <!-- Intro -->
  <section class="intro item-intro" id="home">
    <h1 class="section__title section__title--intro">
      The title of <strong> my Project</strong>
    </h1>
    <p class="section__subtitle section__subtitle--intro">A short subtitle</p>
    <img src="@/assets/img/4.jpg" alt="" class="intro__img" />
  </section>

  <!-- Individual -->
  <div class="item-individual">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odio sequi.
      Corrupti aut minima libero eum! Magni iure libero eaque qui, hic voluptas
      nam dolores enim dignissimos laboriosam, doloremque ea.
    </p>
    <img src="@/assets/img/4L.jpg" alt="" />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi
      beatae obcaecati pariatur in vel culpa eos at deserunt veritatis ullam,
      temporibus ipsam. Eveniet vitae, dolore voluptates aperiam aut soluta.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam molestias
      sint autem. At maiores id cupiditate praesentium? Natus voluptate eum
      dolorem soluta, iste eos ad autem repudiandae optio blanditiis et.
    </p>
  </div>

  <Talk :pageName="pageName" />
</template>

<script>
import Talk from '@/components/Talk'

export default {
  name: 'Item',
  components: { Talk },
  data () {
    return {
      pageName: this.$route.params.item
    }
  }
}
</script>
