<template>
  <section>
    <div class="container">
    <NuxtLink to="/" class="btn btn-back">
      Go Back
    </NuxtLink>
    <div class="card card-page">
      <h1 class="post-title">{{page.title}}</h1>
      <div class="post-date">Posted on {{page.date}}</div>
      <img :src="page.cover_image" alt='' />
      <div class="post-body">
        <ContentDoc />
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { navigation, page, surround, globals } = useContent()
</script>
