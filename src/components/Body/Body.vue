<template>
  <div>
    <Class
      v-for="content in contents"
      :key="content"
      :tag="content.name"
      :cont="content.cont"
    />
    <img alt="wechat" class="wechat" src="~@/assets/images/wechat.png" />
  </div>
</template>

<script src="./Body.js" />

<style scoped lang="scss" src="./Body.scss" />
