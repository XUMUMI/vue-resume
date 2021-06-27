<template>
  <div>
    <Class
      v-for="content in contents"
      :key="content"
      :tag="content.name"
      :cont="content.cont"
    />
  </div>
</template>

<script src="./Body.js" />

<style scoped lang="scss" src="./Body.scss" />
