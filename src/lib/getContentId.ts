export function getYouTubeVideoId(url: string) {
  const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z-_]{11})(?:[%#?&]|$)/);
  return match ? match[1] : null;
}

export function getTweetIdFromUrl(url: string) {
  const match = url.match(
    /(https?:\/\/(?:www\.)?(twitter\.com|x\.com)\/[\w/]+\/(\d+)).*/
  );
  return match ? match[3] : null;
}

export function getInstagramIdFromUrl(url: string) {
  const match = url.match(
    /https?:\/\/(?:www\.)?instagram\.com\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+\/?/
  );
  return match ? match[0] : null;
}

export function getFacebookContentIdFromUrl(url: string) {
  // Check if the URL matches the pattern for Facebook posts or watch links
  const postMatch = url.match(
    /https?:\/\/(?:www\.)?facebook\.com\/[^/]+\/posts\/(\d+)/
  );
  const watchMatch = url.match(/https?:\/\/fb\.watch\/([a-zA-Z0-9_-]+)/);

  if (postMatch) {
    // Extract the content ID from Facebook posts
    return postMatch[1];
  } else if (watchMatch) {
    // Extract the content ID from Facebook watch links
    return watchMatch[1];
  } else {
    return null; // Not a Facebook link
  }
}
