// export function getYouTubeBaseUrl(url: string) {
//   const match = url.match(
//     /^(https?:\/\/(?:www\.)?youtube\.com\/watch\?.*v=[\w-]+)/
//   );
//   return match ? match[1] : null;
// }

// export function getTwitterXBaseUrl(url: string) {
//   const match = url.match(
//     /(https?:\/\/(?:www\.)?(twitter\.com|x\.com)\/[\w/]+\/(\d+))/
//   );
//   return match ? match[1] : null;
// }

// export function getInstagramBaseUrl(url: string) {
//   const match = url.match(
//     /https?:\/\/(?:www\.)?instagram\.com\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+/
//   );
//   return match ? match[0] : null;
// }

// export function getFacebookBaseUrl(url: string) {
//   const match = url.match(/(https?:\/\/(?:www\.)?facebook\.com\/[^?]+)/);
//   return match ? match[1] : null;
// }

export function getYouTubeBaseUrl(url: string) {
  return new Promise((resolve, reject) => {
    try {
      const match = url.match(
        /^(https?:\/\/(?:www\.)?youtube\.com\/watch\?.*v=[\w-]+)/
      );
      resolve(match ? match[1] : null);
    } catch (error) {
      reject(error);
    }
  });
}

export function getTwitterXBaseUrl(url: string) {
  return new Promise((resolve, reject) => {
    try {
      const match = url.match(
        /(https?:\/\/(?:www\.)?(twitter\.com|x\.com)\/[\w/]+\/(\d+))/
      );
      resolve(match ? match[1] : null);
    } catch (error) {
      reject(error);
    }
  });
}

export function getInstagramBaseUrl(url: string) {
  return new Promise((resolve, reject) => {
    try {
      const match = url.match(
        /https?:\/\/(?:www\.)?instagram\.com\/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+/
      );
      resolve(match ? match[0] : null);
    } catch (error) {
      reject(error);
    }
  });
}

export function getFacebookBaseUrl(url: string) {
  return new Promise((resolve, reject) => {
    try {
      const match = url.match(/(https?:\/\/(?:www\.)?facebook\.com\/[^?]+)/);
      resolve(match ? match[1] : null);
    } catch (error) {
      reject(error);
    }
  });
}
