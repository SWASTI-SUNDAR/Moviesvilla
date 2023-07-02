import React, { useState } from 'react'
import "../style.scss"
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/switchTabs'
import useFetch from "../../../useFetch"
import Carousel from '../../../components/carousel/Carousel'
const Popular = () => {
    const [ endpoint, setEndpoints] = useState("movie");
    const {data,loading}=useFetch(`/${endpoint}/popular`)
    const onTabChange = (tab) =>{
        setEndpoints(tab === "Movies" ? "movie" : "tv")
    };
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">
                    What's Popular
                </span>
                <SwitchTabs data={["Movies","Tv shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    )
}
export default Popular