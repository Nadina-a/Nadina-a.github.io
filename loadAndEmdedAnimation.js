// Вместо функции loadAndEmbedAnimation() вставить:
const animationData = {
  // Здесь вставить содержимое animation.json
};

document.addEventListener('DOMContentLoaded', function(){
  // ...остальной код...
  
  // Использовать animationData напрямую
  const anim = lottie.loadAnimation({
    container: animContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData // Используем встроенные данные
  });
  
  // ...остальной код...
});