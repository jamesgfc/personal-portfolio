<template functional>
  <div class="c-page-intro">
    <div>
      <span class="c-title c-title--is-white">{{ props.titleLight }} <span class="c-title c-title--is-xxxl c-title--is-bold c-title--is-white">{{ props.titleStrong }}</span></span>
      <p><slot /></p>
    </div>
  </div>
</template>
