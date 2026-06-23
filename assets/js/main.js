document.querySelectorAll('.tab-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const dataset = button.dataset.dataset;
    document.querySelectorAll('.tab-btn').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('.dataset-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.panel === dataset);
    });
  });
});

document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

const copyButton = document.querySelector('.copy-btn');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const target = document.querySelector(copyButton.dataset.copyTarget);
    if (!target) return;
    await navigator.clipboard.writeText(target.textContent.trim());
    const oldText = copyButton.textContent;
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = oldText; }, 1400);
  });
}
