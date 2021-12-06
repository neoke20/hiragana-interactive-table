const elements = document.getElementsByClassName("hiragana-card");

Array.from(elements).forEach(function(element) {
  element.addEventListener('click', function(e) {
    const audio = document.querySelector(`audio[data-id="${e.path[0].id}"]`);
    audio.currentTime = 0;
    audio.play();
  })
});

svg = ""

const urls = document.querySelectorAll(".pen");
urls.forEach(function(item) {
  item.addEventListener('click', function() {
    svg = this.dataset.svgid;
    console.log(svg);
  });
});
