<template>
  <div id="app">
    <header>
      <div class="header-content">
        <h1>🍲 Кулінарний блог</h1>
        <p class="subtitle">Рецепти на будь-який смак</p>
      </div>
      <nav>
        <RouterLink to="/">🏠 Головна</RouterLink>
        <RouterLink to="/recipes">📖 Рецепти</RouterLink>
        <RouterLink to="/favorites" class="favorites-link">
          ❤️ Обрані 
          <span v-if="favoritesCount > 0" class="badge">{{ favoritesCount }}</span>
        </RouterLink>
      </nav>
    </header>
    
    <main>
      <RouterView />
    </main>
    
    <footer>
      <p>Кулінарний блог | Лабораторна робота №6 | Студент: Сергійчук Ілля</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFavoritesStore } from './stores/favoritesStore'

const favoritesStore = useFavoritesStore()
const favoritesCount = computed(() => favoritesStore.favoritesCount)
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fef5e8;
  color: #2c3e2f;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background: #2c3e2f;
  color: white;
  padding: 20px;
  text-align: center;
}

.header-content h1 {
  font-size: 2rem;
}

.subtitle {
  opacity: 0.8;
  margin-top: 5px;
}

nav {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

nav a {
  color: #e0b354;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 40px;
  transition: background 0.2s;
  position: relative;
}

nav a:hover {
  background: rgba(224, 179, 84, 0.2);
}

nav a.router-link-active {
  background: #e0b354;
  color: #2c3e2f;
}

.favorites-link {
  display: flex;
  align-items: center;
  gap: 8px;
}

.badge {
  background: #e0b354;
  color: #2c3e2f;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

main {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
}

footer {
  background: #2c3e2f;
  color: #e0b354;
  text-align: center;
  padding: 16px;
  margin-top: 40px;
}
</style>
