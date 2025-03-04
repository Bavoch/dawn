document.addEventListener('DOMContentLoaded', () => {
  // 创建自定义光标元素
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  // 鼠标移动事件处理
  function updateCursor(e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }

  // 添加鼠标移动监听器
  document.addEventListener('mousemove', updateCursor);

  // 交互元素悬停效果
  const interactiveElements = document.querySelectorAll('a, button, .interactive');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });

  // 确保光标始终可见
  cursor.style.display = 'block';
});
