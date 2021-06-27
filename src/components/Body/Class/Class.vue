<template>
  <div class="class">
    <div class="header">
      <div class="title">{{ tag }}</div>
    </div>
    <Item
      v-for="items in cont"
      :key="items.title"
      :tag="items.title"
      :time="items.time"
    >
      <p v-for="item in items.cont" :key="item" class="cont">{{ item }}</p>
    </Item>
  </div>
</template>

<script src="./Class.js" />

<style scoped lang="scss" src="./Class.scss" />
