import React from "react";
import "../Styles/Slider.css"
class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                "https://www.pngmart.com/files/12/Stay-Safe-Transparent-PNG.png",
                "https://www.foodsafetystrategies.com/ext/resources/Images/news/2020-05/Gold-Medal-Hand-Sanitizer-Offering-1.png?1589305305",
                "https://news.llu.edu/sites/news.llu.edu/files/styles/featured_image_755x425/public/screen_shot_2020-08-11_at_9.15.07_am.png?itok=4wgL0Fl1&c=d840cfde9df530f5582918792e0040a0",
                "https://www.gannett-cdn.com/presto/2020/12/02/USAT/4b0cb531-58e2-496b-bc17-729ef23ce810-VPC_COVID_VACCINE_SIDE_EFFECTS_DESK_THUMB.jpg?width=660&height=371&fit=crop&format=pjpg&auto=webpg",
                "https://www.sciencenews.org/wp-content/uploads/2020/06/060920_JL_cough_feat-1028x579.jpg",
                "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_5304,w_7952,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_1677529075_fubww6.jpg",
                "https://i.ytimg.com/vi/tGboG1l9tOw/maxresdefault.jpg",
                "https://npr.brightspotcdn.com/dims4/default/0ce2b58/2147483647/strip/true/crop/1500x788+0+106/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkwmu%2Ffiles%2F202003%2F032920_DK_CovidStayHome.png",
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }
    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }
    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }
    render() {
        return (
            <div className="slider">
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>
                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
        );
    }
}
const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}
const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow" onClick={props.goToPrevSlide}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}
const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}
export default Slider;