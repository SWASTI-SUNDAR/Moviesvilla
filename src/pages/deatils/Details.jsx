import React from 'react'
import "./style.scss"
import DetailsBanner from './detailsBanner/Detailsbanner'
import { useParams } from 'react-router-dom'
import useFetch from '../../useFetch'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Recommendation from './carousels/Recommendation'
import Similar from './carousels/similar'
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data:cerdits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
    <DetailsBanner crew={cerdits?.crew} video={data?.results?.[0]}  />
    <Cast data={cerdits?.cast} loading={creditsLoading}/>
    <VideosSection data={data} loading={loading}/>
    <Recommendation mediaType={mediaType} id={id}/>
    <Similar mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details
