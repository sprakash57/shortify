<template>
  <nav class="navbar">
    <a href="https://suprdev.netlify.app" target="__blank" :class="iconClass"
      >About Dev</a
    >
    <a href="#">
      <button class="btn" @click="setMode()" :title="currentTheme">
        <Icon :class="iconClass" :icon="iconType" />
      </button>
    </a>
  </nav>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped src="./index.css"></style>