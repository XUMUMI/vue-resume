<template>
  <Icon v-for="intro in intros" :key="intro" :icon="intro.icon">
    {{ intro.cont }}
  </Icon>
</template>

<script src="./Intro.js" />

<style scoped lang="scss" src="./Intro.scss" />
