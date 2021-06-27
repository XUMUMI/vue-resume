<template>
  <div class="item">
    <div class="top-bar">
      <p class="title">{{ tag }}</p>
      <p class="time">{{ time }}</p>
    </div>
    <div class="cont"><slot /></div>
  </div>
</template>

<script src="./Item.js" />

<style scoped lang="scss" src="./Item.scss" />
