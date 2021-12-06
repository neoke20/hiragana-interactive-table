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
    // Gets the name of the svg file
    const svg = localStorage.setItem('svgID', this.dataset.svgid);
    // Gets the name of the hiragana
    const reading = localStorage.setItem('reading', this.dataset.reading);
  });
});

function getSvgId() {
  const svgID = localStorage.getItem('svgID');
  // adds the svg name to the src
  document.querySelector('.hiragana-stroke').src=`../svgsKana/${svgID}.svg`;
  // Sets the page titke to the right hiragana reading
  document.title = `Hiragana: ${localStorage.getItem('reading')}`;
}
