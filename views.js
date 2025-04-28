// Получение просмотров
function getViews(id) {
    return parseInt(localStorage.getItem(`views_${id}`)) || 0;
  }
  
  // Обновление DOM
  function updateViewsInDOM() {
    document.querySelectorAll('[data-article-id]').forEach(el => {
      const id = el.dataset.articleId;
      const count = getViews(id);
      const viewsSpan = el.querySelector('.views-count');
      if (viewsSpan) {
        viewsSpan.textContent = `${count.toLocaleString()} ${getDeclension(count, ['просмотр', 'просмотра', 'просмотров'])}`;
      }
    });
  }
  
  // Склонение "просмотр"
  function getDeclension(number, words) {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[
      (number % 100 > 4 && number % 100 < 20)
        ? 2
        : cases[(number % 10 < 5) ? number % 10 : 5]
    ];
  }
  
  // Инициализация
  document.addEventListener('DOMContentLoaded', () => {
    updateViewsInDOM();
  
    document.querySelectorAll('.article-link').forEach(link => {
      link.addEventListener('click', e => {
        const container = link.closest('[data-article-id]');
        if (!container) return;
  
        const articleId = container.dataset.articleId;
        const currentViews = getViews(articleId);
        localStorage.setItem(`views_${articleId}`, currentViews + 1);
      });
    });
  });
  