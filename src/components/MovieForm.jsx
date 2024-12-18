import React,{useState} from 'react';

const MovieForm = ({addMovie}) => {
  const [movieTitle, setMovieTitle]=useState(''); //제목 상태관리
  const [movieYear, setMovieYear]=useState(''); //날짜 상태관리
  const [titleError, setTitleError]=useState(''); //제목 입력하지 않았을때 에러 상태관리
  const [yearError, setYearError]=useState(''); //개봉년도 입력하지 않았을때 에러 상태관리

  const restForm = () =>{
    setMovieTitle('')
    setMovieYear('')
  }
  const validateForm = () =>{
    resetErrors();
    let validated=true;
    if(!movieTitle){
        setTitleError('영화제목을 입력하세요');
        validated=false;
    }
    if(!movieYear){
      setYearError('개봉년도를 입력하세요');
      validated=false;
   }
   return validated
  }
  const resetErrors= () =>{
    setTitleError('');
    setYearError('');
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    if(validateForm()){
      addMovie({
        id:Date.now(),
        title: movieTitle,
        year: movieYear
      })
      restForm();
    }
   
  }
  return (
    <div>
      <form  onSubmit={onSubmit}>
        <input type="text" placeholder='영화제목을 입력하세요' value={movieTitle} onChange={(e)=>{setMovieTitle(e.target.value)}} /> <br />
        <div className="error">{titleError}</div>
        <input type="text" placeholder='개봉연도를 입력해주세요' value={movieYear} onChange={e => setMovieYear(e.target.value)} /> <br />
        <div className="error">{yearError}</div>
        <button type="submit">영화 추가 버튼</button>
      </form>
    </div>
  );
};

export default MovieForm;