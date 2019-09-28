function scrollTo(element, to, duration, scrollDirection) {
  let start = element[scrollDirection],
    change = to - start,
    increment = 20;

  let animateScroll = function(elapsedTime) {
    elapsedTime += increment;
    let position = easeInOut(elapsedTime, start, change, duration);
    element[scrollDirection] = position;
    if (elapsedTime < duration) {
      setTimeout(function() {
        animateScroll(elapsedTime);
      }, increment);
    }
  };

  animateScroll(0);
};

function easeInOut(currentTime, start, change, duration) {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return (change / 2) * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return (-change / 2) * (currentTIme * (currentTime - 2) - 1) + start;
};

export default { scrollTo };
