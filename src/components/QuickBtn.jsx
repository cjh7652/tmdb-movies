import React,{useState, useEffect} from 'react';
import { BiUpArrowAlt } from "react-icons/bi";

const QuickBtn = () => {
  const [isVisible, setIsVisible]=useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      setIsVisible(window.scrollY > 300); // 스크롤 탑의 위치가 300이상이면 true
    }
    window.addEventListener("scroll", handleScroll)
    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);
  const scrollTop = () => {
    window.scrollTo({top:0, behavior:"smooth"})
  }

  return isVisible && (
    <div className='quickBtn' onClick={scrollTop}>
      <button className='quick-top' type="button">
       <BiUpArrowAlt className='upArrowBtn' style={{}} />
      </button>
    </div>
  );
};

export default QuickBtn;