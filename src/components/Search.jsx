import React, {useState} from 'react'; //훅 useState-상태관리
import { CiSearch } from "react-icons/ci"; //아이콘
import axios from 'axios'; //비동기식 데이터 불러오기
import {Link} from 'react-router-dom'; //하이퍼링크 가져와서 사용하기
import SearchDetail from '../pages/SearchDetail';

const Search = () => {
  //자바스크립트 코드
  const imgPath='http://image.tmdb.org/t/p/original';// tmdb의 이미지경로
  const [searchWord, setSearchWord]=useState(''); 
  //배열안에 들어있는 첫번째 변수는 초기값을 받아오는 변수, 두번째 있는 변수는 변경되는 변수값
  //사용자가 검색창에 입력한 영화 제목을 저장하는 상태

  const [movies, setMovies]=useState([]) //검색어에 맞는 영화 목록 저장
  const [mode, setMode]=useState('list'); //화면관리 list일경우, detail일경우 상세정보
  
  const [selecteMovieID, setSelecteMovieID]=useState(null); //사용자가 선택한 영화의 ID를 저장


  //입력처리 영화검색하는 함수
  const search = () =>{
    const APIKEY=process.env.REACT_APP_API_KEY;
   // 기본문법 axios.get().then(()=>{}).catch(()=>{})
   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=ko&page=1&include_adult=false&query=${searchWord}`) //요청하는 주소
   .then((response)=>{ //요청한 값이 반환
    //console.log(response.data.results)
    setMovies(response.data.results)
   })
   .catch((error)=>{ //에러가 났을떄
    console.error('Error fetching movies:', error)
   })
  }
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      search()
    }
  }
  const showDetail = (movieID) =>{
    setMode('detail');
    setSelecteMovieID(movieID);

   
  }

  return (
    <div className='search'>
      <div className="search-box">
        <input 
        type="text" 
        value={searchWord}
        onChange={(e)=>{setSearchWord(e.target.value)}}
        onKeyPress={handleKeyPress}
        placeholder='영화제목을 입력해주세요' 
         />
        <button className="search-btn" onClick={search}><CiSearch /></button>
      </div>
      <div className="search-result" style={{display:mode ==='list'? 'block':'none'}}>
        <ul className="search-movieList">
          {
            movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/search/${movie.id}`} onClick={()=>{showDetail(movie.id)}}>
                  <div className="search-list">
                    <div className="img">
                        <img src={`${imgPath}${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <div className="info">
                        <p className="title">{movie.title}</p>
                        <p className="release">{movie.release_date}</p>
                    </div>
                  </div>
                </Link>
              </li> 
            ))
          }
        </ul>
      </div>
      {mode==='detail' &&  <SearchDetail selecteMovieID />}
    </div>
  );
};

export default Search;