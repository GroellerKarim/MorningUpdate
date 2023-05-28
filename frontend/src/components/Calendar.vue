<template>
  <div>
    <h1>{{greeting}}</h1>
  </div>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Calendar extends Vue {
  private gretting: string = "Figuring out Vue";
}
</script>
