import './index.css'

const SliderImg = props => {
  const {details} = props
  const {imageUrl} = details

  return (
    <div>
      <img src={imageUrl} className="slider-img" alt="slider" />
    </div>
  )
}

export default SliderImg
