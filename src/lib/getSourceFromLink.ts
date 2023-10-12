export default function getSourceFromLink(link: string) {
  if (link === "") {
    return null;
  } else if (link.includes("twitter.com") || link.includes("x.com")) {
    return "Twitter";
  } else if (link.includes("instagram.com")) {
    return "Instagram";
  } else if (link.includes("facebook.com")) {
    return "Facebook";
  } else if (link.includes("youtu.be") || link.includes("youtube.com")) {
    return "YouTube";
  } else {
    return "Unknown";
  }
}
