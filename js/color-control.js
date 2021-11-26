const inputs = document.querySelectorAll('.controls input');

function update() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

inputs.forEach(input => input.addEventListener('change', update));
