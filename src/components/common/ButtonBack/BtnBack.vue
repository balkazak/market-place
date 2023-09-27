<template>
  <div>
    <IconBack />
    {{text}}
  </div>
</template>
<script>
import IconBack from "@/components/icons/IconBack.vue";
export default {
  props: ['text'],
  components: {IconBack}
}
</script>
