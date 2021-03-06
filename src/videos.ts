export interface Video {
  timestamp: string,
  thumbnail: string,
  video: string,
  id: string,
}

export const videos: Video[] = [];
export const videoLookup: {[name:string]: Video} = {};
export const looseThumbnails: {[name:string]: string} = {};