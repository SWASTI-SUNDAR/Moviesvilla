import React from 'react'
import "./style.scss"
import DetailsBanner from './detailsBanner/Detailsbanner'
import { useParams } from 'react-router-dom'
import useFetch from '../../useFetch'
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data:cerdits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
    <DetailsBanner crew={cerdits?.crew} video={data?.results?.[0]}  />
    </div>
  )
}

export default Details
