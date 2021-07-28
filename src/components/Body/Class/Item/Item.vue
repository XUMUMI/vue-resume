<template>
  <div class="item">
    <div class="top-bar">
      <p class="title">{{ tag }}</p>
      <p class="add">{{ add }}</p>
    </div>
    <div class="cont"><slot /></div>
  </div>
</template>

<script src="./Item.js" />

<style scoped lang="scss" src="./Item.scss" />
