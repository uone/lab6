<template>
  <div class="favorites-page">
    <h2>❤️ Обрані рецепти</h2>
    <div v-if="favoritesStore.favorites.length === 0" class="empty">
      <p>У вас ще немає обраних рецептів. Додайте їх зі сторінки "Рецепти"!</p>
    </div>
    <div v-else class="recipe-list">
      <div v-for="recipe in favoritesStore.favorites" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" :alt="recipe.title" class="recipe-img" />
        <div class="card-content">
          <h3>{{ recipe.title }}</h3>
          <p>⏱ {{ recipe.time }} хв | 🍽 {{ recipe.servings }} порції</p>
          <p class="category">{{ recipe.category }}</p>
          <button @click="favoritesStore.removeFavorite(recipe.id)" class="btn-remove">Видалити з обраного</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favoritesStore'

const favoritesStore = useFavoritesStore()
</script>

<style scoped>
.favorites-page { padding: 20px; }
.recipe-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px,1fr)); gap: 24px; }
.recipe-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.recipe-img { width: 100%; height: 180px; object-fit: cover; }
.card-content { padding: 16px; }
.btn-remove { background: #b45f2b; color: white; border: none; padding: 6px 12px; border-radius: 40px; cursor: pointer; }
.empty { text-align: center; padding: 40px; color: #888; }
</style>
