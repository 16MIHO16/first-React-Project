import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Video from './video';

function App() {
  const PosterList = [
    "https://i.ytimg.com/vi/Mw5VUdW3OBc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2SgWBX28mw7OgapnX7e2Zj33XQw",
    "https://i.ytimg.com/vi/zNbf4K8qWI8/hq720.jpg?sqp=AFwAcABBg==&rs=AOn4CLBWhCJnastaTtwaYQ8kEqYBy9l7JQ",
    "https://i.ytimg.com/vi/FPl3Unb_pIA/hq720.jpg?sqp=AFwAcABBg==&rs=AOn4CLCD0dP3gjgngw6CEffzyg5PimxQAA",    
  ];
  const ChannelList = [ 
    "https://yt3.ggpht.com/ypP_eJllFBeNwENjoPzgdcMzgCV0PM5F5rCQ9wmNoCh7Mi3X7UnBW16YAVsDor5lt61pBMdUfYU=s68-c-k-c0x00ffffff-no-rj" ,
    "https://yt3.ggpht.com/ytc/APkrFKZfaP3uvNcg1G7O7qTy6JApCvQXmXTvoXAUHr2F5w=s68-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/-F3HAHjoY--zyQF9RpxbUL_OGiVMChnFjPKJ_0XaTXQRj9bgl3IXoTbfW1zUuLktrEMpP3oDVQ=s68-c-k-c0x00ffffff-no-rj"

  ];
  const TitleList = [
    "სალერნიტანა VS ნაპოლი - მიმოხილვა",
    "3 ფოკუსი მონეტით, რომლის გაკეთებაც ყველას შეუძლია!",
    "UFC Las Vegas : იანი VS დვალიშვილი"
  ];
  const LinkList = [
    "https://www.youtube.com/watch?v=Mw5VUdW3OBc",
    "https://www.youtube.com/watch?v=zNbf4K8qWI8",
    "https://www.youtube.com/watch?v=FPl3Unb_pIA&pp=ygUdbWVyYWIgZHZhbGlzaHZpbGkgdnMgcGV0ciB5YW4%3D"
  ]

  return (
    <div className='youtube'>
      <header>
        <a href="https://www.youtube.com/"><img className='youtubeLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1024px-YouTube_Logo_%282013-2017%29.svg.png"/></a>
        <input type="text"/>
        <button className='searchButton'>Search</button>
        <button className='iconButton'><img className='icon' src="https://cdn-icons-png.flaticon.com/512/2/2144.png"/></button> 
        <button className='iconButton'><img className='icon' src="https://cdn.pixabay.com/photo/2020/10/31/06/28/youtube-bell-icon-5700371_1280.png"/></button> 
        <img className='profileImage' src="https://yt3.ggpht.com/ytc/APkrFKYSTVxIEra-SuNeHaYPavnNVA6QbI9qFoO5mAworOeAJcZ6TApREYcIri22B_Xw=s88-c-k-c0x00ffffff-no-rj"/>
      </header>

      <div className='videos'>
      {PosterList.map((p, i) => (
        <Video key={i} image={p} channel={ChannelList[i]} text={TitleList[i]} link={LinkList[i]} />
      ))}  
      </div>

    </div>
  )
}

export default App
