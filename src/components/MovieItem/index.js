import './index.css'
import 'reactjs-popup/dist/index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

const MovieItem = props => {
  const {eachItem} = props

  const contentStyle = {background: '#000'}
  const overlayStyle = {background: 'rgba(0,0,0,0.5)'}
  const width = {width: '100%'}

  return (
    <Popup
      trigger={
        <div className="eachItemCard">
          <img src={eachItem.thumbnailUrl} alt="img" className="eachImg" />
        </div>
      }
      className="popup-content videoPla"
      modal
      closeOnDocumentClick
      {...{contentStyle, overlayStyle, width}}
    >
      <ReactPlayer
        url={eachItem.videoUrl}
        className="videoPla custom-video-player"
      />
    </Popup>
  )
}

export default MovieItem
