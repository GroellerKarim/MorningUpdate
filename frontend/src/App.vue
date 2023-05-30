<template>
  <div>
    <Calendar/>
  </div>
</template>

<script lang="ts">
import Calendar from "./components/Calendar.vue";

@Component
export default class App extends Vue {
  components = {
    Calendar,
  };
}
</script>
