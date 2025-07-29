export function setYouTubeVideo(iframe: HTMLIFrameElement, videoId: string) {
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

export function clearYouTubeVideo(iframe: HTMLIFrameElement) {
  iframe.src = '';
}
