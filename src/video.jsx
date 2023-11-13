import './Video.css'

const Video = (props) =>{
    return (
        <div className='container'>
                <a href={props.link}>
                    <img className='thamnail' src={props.image}/>
                </a>
                <div className='miniContainer'>
                    <img className='channel' src={props.channel}/>
                    <p className='title'>{props.text}</p> 
                </div>
        </div>
    )
}

export default Video