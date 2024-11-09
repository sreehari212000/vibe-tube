import { useEffect, useState } from "react"
import { fetchFromApi } from "../utils/fetchFromAPI"
import FilterBrick from "../components/FilterBrick"
import VideoCard from "../components/VideoCard"
import {VIDEOTYPE} from "../utils/types"

type FILTERSTYPE = {
    filter: string,
    continuation?: string
}
export const Homepage = () => {
    const [filters, setFilters]  = useState<[] | FILTERSTYPE[]>([])
    const [videos, setVideos] = useState<[] | VIDEOTYPE[]>([])
    const [loading, setLoading] =  useState<Boolean>(true)

    
    useEffect(()=>{
        fetchFromApi('home')
        .then((res)=>{
            setVideos(res.data)
            setFilters(res.filters)
            setLoading(false)
        })
    }, [])
    console.log(videos);
    
    if(loading){
        return <h1 className="h-screen flex justify-center items-center text-4xl">Loading...</h1>
    }
    return (
    <div className="px-10 mt-4">
        <div className="mx-10 flex items-center gap-4 overflow-x-scroll custom-scrollbar">
            {filters.map((item)=>{
                return (
                    <FilterBrick filter={item.filter} key={item.filter} />
                )
            })}
        </div>
        <div className="mx-10 mt-6 rounded-lg flex flex-wrap gap-4 justify-between">
            {
                videos.map((item)=>{   
                    if(item.type === 'video'){
                        const { title, type, videoId, viewCount, channelThumbnail, channelTitle, thumbnail, publishedTimeText} = item
                        return(
                            <VideoCard thumbnail={thumbnail}  key={videoId}  title={title} type={type} videoId={videoId} viewCount={viewCount} channelThumbnail={channelThumbnail} channelTitle={channelTitle} publishedTimeText={publishedTimeText}/>
                        )
                    }
                    })
                        }
        </div>
    </div>
  )
}
