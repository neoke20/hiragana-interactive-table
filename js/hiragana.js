const elements = document.getElementsByClassName("hiragana-card");

Array.from(elements).forEach(function(element) {
  element.addEventListener('click', function(e) {
    const audio = document.querySelector(`audio[data-id="${e.path[0].id}"]`);
    audio.currentTime = 0;
    audio.play();
  })
});

const urls = document.querySelectorAll(".pen");
urls.forEach(function(item) {
  item.addEventListener('click', function() {
    const svg = localStorage.setItem('svgID', this.dataset.svgid);
    console.log(svg);
  });
});

function getSvgId() {
  const svgID = localStorage.getItem('svgID');
  document.querySelector('.hiragana-stroke').src=`../svgsKana/${svgID}.svg`;
}
