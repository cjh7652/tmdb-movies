import React, {useEffect, useState} from 'react';
import MainUpComing from '../components/MainUpComing';
import Search from '../components/Search';
import axios from 'axios';

const Home = () => {
  const [appMovie, setAppMovie]=useState([]);
  const [isLoading, setLoading]=useState(true);

  const getMovies= async () => {
		try{
			const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko`);
			setAppMovie(response.data.results)
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
    <div className='home'>
		  <MainUpComing />
      <Search />
      <div className="mainContainer mt30">
          <h2>상영작</h2>
          <div className="mainMovie">
            {
              isLoading ? (<div className='loding'> 로딩중... </div>) : (
                <div className='movie'>
                  {
                    appMovie.map((aM, i) => (
                      <div className="aMovie">
                        <div className="aMovie-card">
                          <div className="aMovieimgBox">
                            <img src={`https://image.tmdb.org/t/p/w300/${aM.poster_path}`} alt={aM.title} />
                          </div>
                          <div className="aMovieInfo">
                            <h2 className="aMovieTitle">{aM.title}</h2>
                            <p className="aMovieDate">{aM.release_date}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                    
                </div>
              )
            }
          </div>
      </div>
    </div>
  );
};

export default Home;