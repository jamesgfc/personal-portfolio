<template functional>
  <div class="c-highlighted-area" :class="props.modifierClass">
    <h1 class="c-highlighted-area__title">{{props.title}}</h1>
    <slot></slot>
  </div>
</template>
