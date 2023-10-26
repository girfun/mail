<template>
  <div class="view-switcher__position">
    <div class="view-switcher">
      <div
          v-for="option in viewSwitcherOptions"
          :key="option.type"
          :class="['switcher-item', {'active': viewType === option.type}]"
          @click="onSwitchView(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>
<script setup>

defineProps({
  viewSwitcherOptions: {
    type: Object,
    default: () => {},
  },
  viewType: {
    type: String,
    default: 'simpleMail',
  },
})

const emit = defineEmits(['on-switch-view'])


const onSwitchView = ({type}) => {
  emit('on-switch-view', type)
}

</script>

<style scoped lang="sass">
.view-switcher
  display: flex
  flex-direction: row
  padding: 4px
  background: #e9e9ec
  width: fit-content
  border-radius: 8px

  &__position
    display: flex
    justify-content: center

.switcher-item
  font-family: Gotham Pro, sans-serif
  font-weight: 500
  font-size: 10px
  padding: 8px
  background: #e9e9ec
  color: #2b3949
  border-radius: 8px

.active
  background: #2b3949
  color: white
</style>