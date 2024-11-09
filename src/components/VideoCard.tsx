import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
const  DEADPOOL = "https://rukminim2.flixcart.com/image/850/1000/juu4jgw0/poster/h/2/p/large-newposter8092-movie-deadpool-hd-wallpaper-background-original-imaf5z67bevpfdwj.jpeg?q=20&crop=false"

type PROPTYPE = {
    type: string,
    videoId: string,
    viewCount: string,
    title: string,
    channelThumbnail: [{url: string, width: number, height:number}],
    channelTitle: string,
    thumbnail: [{url: string, width: number, height:number}],
    publishedTimeText: string
}
function formatNumber(number: number):string {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K';
    }
    return number.toString();
}

const VideoCard = ({ title, videoId, viewCount, channelThumbnail, channelTitle, thumbnail, publishedTimeText}: PROPTYPE) => {    
  return (
    <Link to={`/video/${videoId}`} className="p-3 w-80 overflow-hidden mb-10 cursor-pointer"> 
        <div>
            <img src={thumbnail[0].url} alt="" className="rounded-lg"/>
        </div>
        <div>
            <div className="flex items-center gap-3 mt-2 justify-between">
                <div className="self-start rounded-full border mt-2">
                    <img src={channelThumbnail ? channelThumbnail[0].url: DEADPOOL} alt="" className="w-8 rounded-full self-start"/>
                </div>
                <div>
                    <p>{title.length > 30 ? title.substring(0, 50) + "..." : title}</p>
                    <h3 className="text-sm text-gray-500">{channelTitle}</h3>
                    <div className="flex gap-3 text-sm text-gray-500">
                        <p>{formatNumber(Number(viewCount))} views</p>
                        <p>{publishedTimeText}</p>
                    </div>
                </div>
                <CiMenuKebab className="self-start cursor-pointer" size={20}/>
            </div>
        </div>
    </Link>
  )
}

export default VideoCard