<template>
  <div class="detail-container" v-if="recipe">
    <div class="detail-card">
      <img :src="recipe.image" :alt="recipe.title" class="detail-img" />
      <h1>{{ recipe.title }}</h1>
      <div class="stats">
        <span>⏱ {{ recipe.time }} хв</span>
        <span>🍽 {{ recipe.servings }} порції</span>
        <span>📂 {{ recipe.category }}</span>
      </div>
      <p class="description">{{ recipe.description }}</p>
      <h3>🛒 Інгредієнти:</h3>
      <ul class="ingredients-list">
        <li v-for="ing in recipe.ingredients" :key="ing">{{ ing }}</li>
      </ul>
      <div class="actions">
        <button @click="toggleFavorite" class="fav-btn" :class="{ active: isFavorite }">
          {{ isFavorite ? '❤️ В обраному' : '🤍 Додати в обране' }}
        </button>
        <router-link to="/recipes" class="back-btn">← Назад до рецептів</router-link>
      </div>
    </div>
  </div>
  <div v-else class="not-found">
    <h2>❌ Рецепт не знайдено</h2>
    <router-link to="/recipes">Повернутися до списку</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { mockRecipes } from '@/data/mockRecipes'
import { useFavoritesStore } from '@/stores/favoritesStore'
import type { Recipe } from '@/types'

const route = useRoute()
const favoritesStore = useFavoritesStore()
const recipe = ref<Recipe | null>(null)

onMounted(() => {
  const id = Number(route.params.id)
  recipe.value = mockRecipes.find(r => r.id === id) || null
})

const isFavorite = computed(() => {
  if (!recipe.value) return false
  return favoritesStore.favorites.some(r => r.id === recipe.value?.id)
})

const toggleFavorite = () => {
  if (recipe.value) {
    favoritesStore.toggleFavorite(recipe.value)
  }
}
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.detail-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}
.detail-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
}
.detail-card h1 {
  margin: 20px 24px 10px;
  color: #2c3e2f;
}
.stats {
  display: flex;
  gap: 20px;
  margin: 0 24px 20px;
  color: #b45f2b;
  font-weight: bold;
}
.description {
  margin: 0 24px 20px;
  line-height: 1.6;
  color: #444;
}
.ingredients-list {
  margin: 0 24px 20px;
  padding-left: 20px;
}
.ingredients-list li {
  margin: 8px 0;
  color: #2c3e2f;
}
.actions {
  display: flex;
  gap: 16px;
  margin: 20px 24px 30px;
}
.fav-btn {
  background: #e0b354;
  color: #2c3e2f;
  border: none;
  padding: 10px 24px;
  border-radius: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}
.fav-btn.active {
  background: #b45f2b;
  color: white;
}
.back-btn {
  background: #ddd;
  color: #333;
  padding: 10px 24px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: bold;
}
.not-found {
  text-align: center;
  padding: 60px;
}
</style>
