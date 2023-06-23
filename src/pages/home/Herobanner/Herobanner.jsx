import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.scss"
import useFetch from '../../../useFetch';
import { useSelector } from 'react-redux';
import ContentWrapper from "../../../components/contentwarpper/contentWrapper"
import Img from "../../../components/lazyloading/Img"
const Herobanner = () => {
  const [background, setBackground] = useState("");

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming")
  const { url } = useSelector((state) => state.home)
  useEffect(() => {
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg);
  }, [data])
  const searchHandeler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  return (
    <div>
      <div className="heroBanner">
        {!loading &&
          <div className="backdrop_img">
            <Img src={background} />
          </div>
        }
        <div className="opacity-layer">

          <ContentWrapper>
            <div className="heroBannerContent">
              <span className='title'>Welcome.</span>
              <span className='subTitle'>
                Millions of movies, TV shows and people to discover.
                Explore now.
              </span>
              <div className="searchInput">
                <input type="text"
                  onKeyUp={searchHandeler}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder='Search for a movie or tv show'
                />
                <button>Search</button>
              </div>
            </div>
          </ContentWrapper>
        </div>
      </div>
    </div>
  )
}

export default Herobanner
