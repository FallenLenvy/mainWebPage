<template>
  <!-- Intro -->
  <section class="intro-section" id="home">
    <h1 class="intro-feature">
      <strong>Logical Reasoning</strong> Pushed to its Limits
    </h1>
    <div class="intro">
      <h2 class="section__title section__title--intro">
        Hi, I am <strong>fallenvy</strong>
      </h2>
      <p class="section__subtitle section__subtitle--intro">
        Solo Indie Game Dev
      </p>
      <div class="intro__img roundify">
        <img src="@/assets/svg/logo-back.svg" alt="" class="intro__img-back" />
        <img src="@/assets/svg/logo-front.svg" alt="" class="intro__img-front" />
      </div>
      <!-- <img src="@/assets/svg/logo.svg" alt="" class="intro__img roundify"> -->
    </div>
  </section>

  <!-- Featured Project -->
  <section class="featured" id="featured">
    <h3 class="section__title section__title--featured">Featured Project</h3>
    <div class="project">
      <a class="project__banner" href="#">
        <img src="@/assets/img/RashNullCover.png" alt="">
      </a>
      <div class="project__details">
        <a href="#"><h2>Rash Null</h2></a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus totam asperiores! Veniam quaerat facere dolorem sed officiis perspiciatis odit dolore quibusdam dolor. Facere illum quod id, eligendi nihil veritatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus totam asperiores! Veniam quaerat facere dolorem sed officiis perspiciatis odit dolore quibusdam dolor. Facere illum quod id, eligendi nihil veritatis.
        </p>
      </div>
    </div>
    <a href="#work" class="btn" tabindex="0">Other Projects</a>
  </section>

  <!-- About me -->
  <section class="about-me" id="about">
    <h2 class="section__title section__title--about">Who I am</h2>
    <p class="section__subtitle section__subtitle--about">
      Designer & Developer based out of Lonavla
    </p>

    <div class="about-me__body">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        obcaecati debitis nulla reiciendis, et tempore dolor nobis cumque in
        temporibus dignissimos voluptates non placeat quod ullam. Tempore quis
        velit culpa.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptates
        eveniet. Nemo id necessitatibus iste eaque, animi recusandae impedit
        similique! Fuga iusto animi ipsum illum temporibus similique quae eaque
        nulla.
      </p>
    </div>

    <img src="@/assets/svg/logo.svg" alt="" class="about-me__img roundify" />
  </section>

  <!-- My services -->
  <section class="my-services" id="services">
    <h2 class="section__title section__title--services">What I do</h2>
    <div class="services">
      <div class="service">
        <h3>Design & Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          pariatur impedit suscipit ut a. Odio ducimus harum architecto
          explicabo, voluptas nisi libero, et natus aliquam est quaerat facilis
          doloremque officiis?
        </p>
      </div>
      <!-- / service -->

      <div class="service">
        <h3>E-Commerce</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tempore
          et officiis cumque ullam. Quaerat iste nihil perferendis eligendi at,
          recusandae voluptate, reiciendis quos ex optio labore amet provident
          deserunt.
        </p>
      </div>
      <!-- / service -->

      <div class="service">
        <h3>WordPress</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          accusamus reiciendis dolor impedit, reprehenderit, obcaecati, commodi
          cumque et natus facilis at voluptatibus soluta mollitia architecto
          expedita autem quidem inventore omnis!
        </p>
      </div>
      <!-- / service -->
    </div>
    <!-- / services -->
    <a href="#work" class="btn" tabindex="0">My Work</a>
  </section>

  <!-- My Work -->
  <section class="my-work" id="work">
    <h2 class="section__title section__title--work">My Work</h2>
    <p class="section__subtitle section__subtitle--work">
      A selection of my range of work
    </p>

    <div class="cards">
      <!-- Portfolio Item 01 -->
      <div class="card card-wider">
        <div class="card__screen">
          <img src="@/assets/img/2.jpg" alt="" class="card__img" />
          <p class="card__tag">devlog</p>
        </div>
        <div class="card__content">
          <h3 class="card__title">This is title</h3>
          <p class="card__detail">
            This should be the details which the card is supposed to show. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
            voluptatum itaque velit fuga aliquid numquam dolores sunt inventore
            rem quia. Vel reprehenderit quo libero animi alias excepturi, sed
            voluptatem facere.
          </p>
        </div>
      </div>
      <!-- Portfolio Item 02 -->
      <div class="card card-wide">
        <div class="card__screen">
          <img src="@/assets/img/4.jpg" alt="" class="card__img" />
          <p class="card__tag">devlog</p>
        </div>
        <div class="card__content">
          <h3 class="card__title">This is title</h3>
          <p class="card__detail">
            This should be the details which the card is supposed to show. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Molestiae esse
            laborum ratione tempora odio ullam incidunt saepe earum expedita
            natus quis, tempore amet est consequuntur, pariatur nihil illum.
            Consequatur, corrupti?
          </p>
        </div>
      </div>
      <!-- Portfolio Item 03 -->
      <div class="card card-high">
        <div class="card__screen">
          <img src="@/assets/img/3.png" alt="" class="card__img" />
          <p class="card__tag">devlog</p>
        </div>
        <div class="card__content">
          <h3 class="card__title">This is title</h3>
          <p class="card__detail">
            This should be the details which the card is supposed to show. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio
            expedita magni ullam delectus beatae a rem facilis. Possimus,
            commodi quo eaque neque cumque officiis repellat unde blanditiis
            dolor tempora.
          </p>
        </div>
      </div>
      <!-- Portfolio Item 04 -->
      <div class="card">
        <div class="card__screen">
          <img src="@/assets/img/1.jpg" alt="" class="card__img" />
          <p class="card__tag">devlog</p>
        </div>
        <div class="card__content">
          <h3 class="card__title">This is title</h3>
          <p class="card__detail">
            This should be the details which the card is supposed to show. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci
            alias voluptas consequuntur, aut natus laborum molestias corrupti,
            ipsa consequatur error perferendis commodi quas labore eius dolores,
            repellat quia eos!
          </p>
        </div>
      </div>
      <!-- Portfolio Item 05 -->
      <div class="card">
        <div class="card__screen">
          <img src="@/assets/img/5.jpg" alt="" class="card__img" />
          <p class="card__tag">devlog</p>
        </div>
        <div class="card__content">
          <h3 class="card__title">This is title</h3>
          <p class="card__detail">
            This should be the details which the card is supposed to show. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Cum ullam
            distinctio quod minus? Commodi fugiat incidunt a minus est! Dolorem
            minus sint perspiciatis commodi tenetur provident, quas temporibus
            nihil esse?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>
