import React,{useState, useEffect}from 'react';
//useEffect 생명주기를 사용할수 있는 훅
import { useParams } from 'react-router-dom'; //url 주소의 파라미터값 추출
import axios from 'axios';


const SearchDetail = () => {
  const {movieId} = useParams(); //각각의 아이디값
  const [detailInfo, setDetailInfo]=useState({}); //선택된 영화의 상세정보
  const [actors, setActors]=useState([]); //선택된 영화의 출연배우정보 저장

  const fetchMovieDetails = async () => {
    try{
      const response= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`)
      setActors(response.data.cast)
    } catch(error){
      console.error('Error fetching movie details', error)
    }

    try{
      const response= await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`)
      setDetailInfo(response.data)
    } catch(error){
      console.error('Error fetching movie details', error)
    }
  }

  useEffect(()=>{
    fetchMovieDetails();
  },[])

  return (
    <div className='searchDetail'>
      <div className="movieInfo">
        <div className="search-backImg">
          <img src="" alt="" />
        </div>
        <div className="search-info">
          <p className="search-title"></p>
          <p className="search-originTit"></p>
          <p className="search-desc"></p>
          <p className="search-release"></p>
        </div>
      </div>
      <hr />
      <div className="creditInfo">
        <div className="search-actors">
          <h3>Actors</h3>
          <ul className="actor-list">
            {
              as.map((a)=> (
                <div>

                </div>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;