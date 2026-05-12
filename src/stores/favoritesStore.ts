import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Recipe } from '@/types'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<Recipe[]>([])

  const favoritesCount = computed(() => favorites.value.length)

  function addFavorite(recipe: Recipe) {
    if (!favorites.value.some(r => r.id === recipe.id)) {
      favorites.value.push(recipe)
    }
  }

  function removeFavorite(recipeId: number) {
    favorites.value = favorites.value.filter(r => r.id !== recipeId)
  }

  function toggleFavorite(recipe: Recipe) {
    const exists = favorites.value.some(r => r.id === recipe.id)
    if (exists) removeFavorite(recipe.id)
    else addFavorite(recipe)
  }

  return { favorites, favoritesCount, addFavorite, removeFavorite, toggleFavorite }
})
