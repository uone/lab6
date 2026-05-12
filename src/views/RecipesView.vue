<template>
  <div class="recipes-page">
    <h2>📖 Всі рецепти</h2>
    <div class="recipe-list">
      <div v-for="recipe in mockRecipes" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" :alt="recipe.title" class="recipe-img" />
        <h3>{{ recipe.title }}</h3>
        <p>⏱ {{ recipe.time }} хв | 🍽 {{ recipe.servings }} порції</p>
        <p class="category">{{ recipe.category }}</p>
        <p class="description-short">{{ recipe.description.substring(0, 60) }}...</p>
        <div class="card-buttons">
          <router-link :to="`/recipe/${recipe.id}`" class="btn-small">Детальніше</router-link>
          <button @click="favoritesStore.toggleFavorite(recipe)" class="btn-fav">
            {{ isFavorite(recipe.id) ? '❤️ В обраному' : '🤍 Додати' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mockRecipes } from '@/data/mockRecipes'
import { useFavoritesStore } from '@/stores/favoritesStore'

const favoritesStore = useFavoritesStore()

const isFavorite = (id: number) => favoritesStore.favorites.some(f => f.id === id)
</script>

<style scoped>
.recipes-page { padding: 20px; }
.recipe-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); gap: 24px; }
.recipe-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); display: flex; flex-direction: column; }
.recipe-img { width: 100%; height: 180px; object-fit: cover; }
.recipe-card h3 { margin: 12px 16px 0; }
.recipe-card p { margin: 6px 16px; }
.category { color: #b45f2b; font-weight: bold; }
.description-short { font-size: 0.9rem; color: #555; }
.card-buttons { display: flex; gap: 8px; margin: 12px 16px 20px; }
.btn-small, .btn-fav { display: inline-block; background: #b45f2b; color: white; padding: 6px 12px; border-radius: 40px; text-decoration: none; border: none; cursor: pointer; font-size: 0.9rem; }
.btn-fav { background: #e0b354; color: #2c3e2f; }
.btn-fav:hover, .btn-small:hover { opacity: 0.9; }
</style>
