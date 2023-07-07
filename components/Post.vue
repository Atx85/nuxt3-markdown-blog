<template>
  <div class='card'>
    <img :src="post.cover_image" />

    <div class="post-date">
      Posted on {{post.date}}
    </div>
    <h3>{{post.title}}</h3>
    <p>{{post.excerpt}}</p>
  
    <NuxtLink :to="post._path" class="btn">Read more</NuxtLink>
  </div>
</template>
<script>
  export default {
    props: ['post'],
  }
</script>