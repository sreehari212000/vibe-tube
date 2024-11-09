export type VIDEOTYPE = {
    type: string,
    videoId: string,
    viewCount: string,
    title: string,
    description: string,
    channelId: string,
    channelThumbnail: [{url: string, width: number, height:number}],
    channelTitle: string,
    thumbnail: [{url: string, width: number, height: number}],
    publishedTimeText: string
}