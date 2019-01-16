<template functional>
  <div
    class="c-alert-box"
    :class="[`c-alert-box--is-${props.alertType}`]">
    <slot />
  </div>
</template>

