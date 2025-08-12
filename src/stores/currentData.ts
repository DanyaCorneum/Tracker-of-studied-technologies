import { defineStore } from 'pinia'
import { ref, computed, type Reactive } from 'vue'
import type { Ref } from 'vue'
import type CurrentStats from '@/types/StatsType.ts'
import { reactive } from 'vue'

export const useCurrentData = defineStore('currentData', () => {
  const name: Ref<string> = ref('')
  const description: Ref<string> = ref('')
  const progress: Ref<number> = ref(0)
  const stats: Reactive<CurrentStats> = reactive({
    name: name.value,
    description: description.value,
    progress: progress.value,
  })
  const isValid = computed(() => {
      return name.value && description.value && progress.value !== 0
  })
  const getData = computed<CurrentStats>(() => {
    return stats
  })

  const changeData = (key: string, value: string): void => {
    if (key === 'name') {
      name.value = value
      stats[key] = value
    } else if (key === 'description') {
      stats[key] = value
      description.value = value
    } else if (key === 'progress') {
      progress.value = Number(value)
      stats[key] = Number(value)
    }
  }
  return { name, description, progress, getData, changeData, isValid }
})
