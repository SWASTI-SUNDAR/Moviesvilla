import React, { useState } from 'react'
import "../style.scss"
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/switchTabs'
import useFetch from "../../../useFetch"
import Carousel from '../../../components/carousel/Carousel'
const Trending = () => {
    const [ endpoint, setEndpoints] = useState("day");
    const {data,loading}=useFetch(`/trending/all/${endpoint}`)
    const onTabChange = (tab) =>{
        setEndpoints(tab === "Day" ? "day" : "week")
    };
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">
                    Trending
                </span>
                <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}
export default Trending
