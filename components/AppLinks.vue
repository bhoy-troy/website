<template>
  <ul class="nav-list">
    <li class="nav-item">
      <nuxt-link to="/about">
        <font-awesome-icon icon="id-badge"/>
        About
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/services">
        <!--      <font-awesome-icon icon="computedIcon" />-->

        <font-awesome-icon icon="coffee"/>
        Services
      </nuxt-link>
    </li>
    <li class="nav-item">


      <nuxt-link to="/contact">
        <font-awesome-icon icon="id-badge"/>
        Contact
      </nuxt-link>
    </li>
  </ul>

</template>
<script>

  import {faIdBadge} from '@fortawesome/free-solid-svg-icons'
  import {faMobile} from '@fortawesome/free-solid-svg-icons'
  import {faCheck} from '@fortawesome/free-solid-svg-icons';
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faCoffee} from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(faCoffee, faIdBadge)

  export default {
    name: "AppLinks",
    components: {FontAwesomeIcon},
    data() {
      return {
        show: false,
        // chevronUp: faChevronUp,
        chevronDown: faMobile,
      }
    },
    computed: {
      computedIcon() {
        return faCheck
      }
    }
  }
</script>

<style scoped>
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    margin: 0 10px;
  }

  .nav-item a {
    text-decoration: none;
    color: #fefefe;
  }

  .nav-item a:hover,
  .nav-item a:active {
    color: #b4b4b4;
  }

  @media (max-width: 767px) {
    .nav-list {
      display: block;
    }

    .nav-item {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }

  @media (min-width: 768px) {
    .nav-list {
      display: flex;
    }
  }
</style>
