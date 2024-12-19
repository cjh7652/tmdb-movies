import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Autoplay,  Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const UpComing = () => {
  const APIKEY=process.env.REACT_APP_API_KEY;
  const [nextMovies, setNextMovies]=useState([]);
  const [isLoading, setLoading]=useState(true)
  const getMovies= async () => {
		try{
			const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=ko`);
			setNextMovies(response.data.results)
			console.log(response)
			setLoading(false)

		}catch(err){
			console.error('Error:',err);
			setLoading(false)
		}
	}
	useEffect(()=>{
		getMovies();
	}, [])
  return (
    <div className='coming'>
        <h2>예정작</h2>
        {
          isLoading ? (<div className='loding'> 로딩중... </div>) : (
            <div className='swiper-navigation'>
              <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              navigation={{
                nextEl:'.swipernext',
                prevEl:'.swiperprev'
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView:2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              className='comingWrap'>
                {
                nextMovies.map((nextMovie, i)=> (
                  
              
                    <SwiperSlide
                      className='nextMovieWrap'
                    >
                      <Link to={`comming/${nextMovie.id}`}>
                        <div className="nextMovieBox">
                          <div className="nextMovieImg">
                            <img src={`https://image.tmdb.org/t/p/w500/${nextMovie.poster_path}`} alt={nextMovie.title} />
                          </div>
                          <div className="nextMovieText">
                            <p>{nextMovie.title}</p>
                            <p> {nextMovie.release_date}</p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                ))
                }
              </Swiper>
              <div className="navigationWrap">
                <div className="swipernext">next</div>
                <div className="swiperprev">prev</div>
              </div>
            </div>
          )
        }
    </div>
  );
};

export default UpComing;