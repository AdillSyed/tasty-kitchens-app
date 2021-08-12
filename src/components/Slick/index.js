import {Component} from 'react'
import Slider from 'react-slick'
import SliderImg from '../SliderImg'
import './index.css'

class Slick extends Component {
  state = {
    carouselImgs: [],
  }

  componentDidMount() {
    this.getCarousalImages()
  }

  getCarousalImages = async () => {
    const response = await fetch('https://apis.ccbp.in/restaurants-list/offers')
    const data = await response.json()
    console.log(data)

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
    }))
    this.setState({carouselImgs: formattedData})
  }

  render() {
    const {carouselImgs} = this.state
    const settings = {
      dots: true,
    }

    return (
      <div className="container">
        <Slider {...settings}>
          {carouselImgs.map(eachImg => (
            <SliderImg details={eachImg} key={eachImg.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default Slick
