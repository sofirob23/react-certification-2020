export default function filterVideos(videoList, category) {
  return videoList.items.filter((video) => {
    return video.id.kind === category;
  });
}
