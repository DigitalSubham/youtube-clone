export const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;
// console.log(GOOGLE_API_KEY);

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/comments?key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" +
  GOOGLE_API_KEY;

export const WATCHPAGE_VIDEO =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=  " +
  "&key=" +
  GOOGLE_API_KEY;

export const LIVECHATCOUNT = 25;
