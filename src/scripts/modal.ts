import { setYouTubeVideo, clearYouTubeVideo } from './video';
import { getElement as $ } from './utils';

export function setupModal() {
  const dialog = $('[data-dialog]') as HTMLDialogElement;
  const trigger = $('[data-video-play-button]') as HTMLButtonElement;
  const closeBtn = $('[data-dialog-close-button]', dialog) as HTMLButtonElement;
  const iframe = $('[data-iframe-video]', dialog) as HTMLIFrameElement;
  const videoId = trigger.getAttribute('data-video-id') || '';

  function closeModal() {
    clearYouTubeVideo(iframe);
    dialog.close();
  }

  trigger.addEventListener('click', () => {
    setYouTubeVideo(iframe, videoId);
    dialog.showModal();
    closeBtn.focus();
  });

  closeBtn.addEventListener('click', closeModal);
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dialog.open) closeModal();
  });
}
