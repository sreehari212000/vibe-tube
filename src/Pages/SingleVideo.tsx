import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchFromApi } from "../utils/fetchFromAPI"
import ReactPlayer from "react-player/lazy"
import {VIDEOTYPE} from "../utils/types"
import VideoCard from "../components/VideoCard"

type  SINGLEVIDEO = {
    adaptiveFormats: [{itag:number, url: string, mimeType: string}],
    status: string,
    description: string,
    channelTitle: string,
    title: string,
    channelId: string

}


const SingleVideo = () => {
    const {id} = useParams() 
    const [singlevideo, setSinglevideo] = useState<null | SINGLEVIDEO>(null)
    const [recommendedvideos, setRecommendedvideos] = useState<[] | VIDEOTYPE[]>([])

    useEffect(()=>{
        fetchFromApi(`dl?id=${id}`)
            .then((data)=>setSinglevideo(data))
        fetchFromApi(`related?id=${id}`)
        .then((data)=> setRecommendedvideos(data.data))
    }, [id])
    
    

    if(!singlevideo){
        return <h1 className="text-3xl w-full h-screen flex items-center justify-center">Loading...</h1>
    }else if(singlevideo.status === "fail"){
        return (<div className="mt-10 flex justify-center items-center flex-col">
            <p className="text-center text-2xl">Oops! There was an error loading your video.</p>
            <Link to={"/"} className="text-center border mt-5 p-3  rounded-md shadow-md bg-gray-200">Back Home</Link>
        </div>)
    }
    return (
        <div className="h-screen ml-20 mt-10 flex">
            <div className="flex-[75%]">
                <ReactPlayer url={singlevideo.adaptiveFormats[0].url} controls volume={0.5} width={1300} height={700} className="rounded-2xl overflow-hidden"/>
                <p className="text-xl font-semibold mt-3">{singlevideo.title}</p>
            </div>
            <div className="flex-[15%] mx-6">
                {recommendedvideos.map((video)=>{
                    const {channelId, channelThumbnail, channelTitle, description, publishedTimeText, thumbnail, title, type, videoId, viewCount} = video
                    return(
                            <VideoCard key={videoId} channelThumbnail={channelThumbnail} channelTitle={channelTitle} publishedTimeText={publishedTimeText} thumbnail={thumbnail} title={title} type={type} videoId={videoId} viewCount={viewCount}/>
                    )
                })}
            </div>
        </div>
    )
}
1
export default SingleVideo