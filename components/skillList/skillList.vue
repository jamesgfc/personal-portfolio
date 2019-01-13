<template functional>
  <section>
      <h2 class="c-title--is-xl">{{ props.title }}</h2>
      <div
        v-for="(skill, index) in props.skills"
        :key="index">
        <h3 class="c-title--is-l">{{ skill.name }}</h3>
        <p>{{ skill.description }}</p>
      </div>
  </section>
</template>
