<template>
  <div>
    <Post 
      v-for="post in data" 
      :key="post.slug" 
      :post="post">
    </Post>
  </div>
</template>
<script setup>

import {sortByDate } from '../utils'
let { data } = await useAsyncData('home', () => queryContent('/').find())
data._rawValue.sort(sortByDate)
</script>
<script>
import {sortByDate } from '../utils'
</script>
