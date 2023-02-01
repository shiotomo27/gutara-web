<script lang="ts">
  import { VBtn } from 'vuetify/components'
  const defaultProps = {
    size: {
      default: 'large',
    },
    color: {
      default: 'secondary',
    },
  }
  export default {
    name: VBtn.name,
    extends: VBtn,
    props: {
      ...VBtn.props,
      ...defaultProps,
    },
    setup: VBtn.setup,
  }
</script>

<style lang="scss">
  .v-btn {
    font-weight: bold;
    font-family: 'Righteous';
    border-radius: 10px;
  }
</style>
