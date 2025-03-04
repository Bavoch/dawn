document.addEventListener('DOMContentLoaded', () => {
  // 仅在非移动设备上应用自定义光标
  if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // 鼠标移动事件
    document.addEventListener('mousemove', (e) => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    });

    // 交互元素的悬停效果
    const interactiveElements = document.querySelectorAll('a, button, .interactive, input, select, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });

    // 防止光标被选中
    cursor.addEventListener('mousedown', (e) => {
      e.preventDefault();
    });
  }
});
