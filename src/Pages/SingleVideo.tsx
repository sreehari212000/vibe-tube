import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchFromApi } from "../utils/fetchFromAPI"
import ReactPlayer from "react-player/lazy"

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

    useEffect(()=>{
        fetchFromApi(`dl?id=${id}`)
            .then((data)=>setSinglevideo(data))
    }, [])

    console.log(singlevideo);
    
    

    if(!singlevideo){
        return <h1 className="text-3xl w-full h-screen flex items-center justify-center">Loading...</h1>
    }else if(singlevideo.status === "fail"){
        return (<div className="mt-10 flex justify-center items-center flex-col">
            <p className="text-center text-2xl">Oops! There was an error loading your video.</p>
            <Link to={"/"} className="text-center border mt-5 p-3  rounded-md shadow-md bg-gray-200">Back Home</Link>
        </div>)
    }
    return (
        <div className="h-screen ml-20 mt-10 ">
            <ReactPlayer url={singlevideo.adaptiveFormats[0].url} controls volume={1} width={1300} height={700} className="rounded-2xl overflow-hidden"/>
            <p className="text-xl font-semibold mt-3">{singlevideo.title}</p>
        </div>
    )
}
1
export default SingleVideo