
<script setup lang="ts">
import { computed } from 'vue';
import { html as content } from "../../../assets/about.md";
import { getCategoriesAndTunes, normalizeState } from "../../state/state";

const state = normalizeState();

const categoryList = computed(() => {
  return getCategoriesAndTunes(state);
});
</script>

<template>
  <div>
    <div class="banner">
      <h1>Player</h1>
    </div>
    <div class="content">
      <div v-html="content"></div>
      <h1>The Tunes</h1>
      <div class="styled-links">
        <template v-for="({ title, tunes }, i) in categoryList" :key="i">
          <h2 v-if="title">{{ title }}</h2>
          <a 
            v-for="tuneName in tunes"
            :key="tuneName"
            :href="`#/listen/${tuneName}`"
            draggable="false"
          >
            {{ state.tunes[tuneName].displayName || tuneName }}
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-color: var(--secondary);
  padding: 80px 1.5em;
  
  h1 {
    color: var(--light);
    text-align: center;
    margin: 0;
    font-size: 4rem;
  }
}

.content {
  padding: 1.5em;
  max-width: 80rem;
  margin: 0 auto;
}

.styled-links {
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  
  h2 {
    grid-column: 1 / -1;
    margin: 1em 0 0.5em;
    font-size: 1.5rem;
    color: var(--primary);
  }
  
  a {
    display: block;
    padding: 1.5em;
    background: var(--light);
    border: 2px solid var(--secondary);
    border-radius: 8px;
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  a:hover { 
    transform: scale(1.1);
    background: var(--primary);
    color: var(--light);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>

