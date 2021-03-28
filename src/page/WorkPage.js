import React from 'react';
import PortfolioLayout from '../layout/PortfolioLayout/PortfolioLayout';
import { ThemeConfig } from '../config/ThemeConfig';
import Slider from "react-slick";
import OneColumn from '../layout/PortfolioLayout/PortfolioContentLayouts/OneColumn';

class WorkPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: this.importAll(require.context('../../public/pics', false, /\.(png|jpe?g|svg)$/))
        }
    }

    importAll(r) {
        let imageCollection = [];
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        for (let key in images) {
            if (images.hasOwnProperty(key)) {
                imageCollection.push(<img src={images[key].default} />);
            }
        }
        return imageCollection;
    }




    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            centerMode: true,
            pauseOnHover: true,
            adaptiveHeight: false,
            className: "slider",
            lazyLoad: "progressive"
        };
        const mobileSettings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            centerMode: true,
            pauseOnHover: true,
            adaptiveHeight: false,
            className: "slider",
            lazyLoad: "progressive"
        };

        return (
            <PortfolioLayout ThemeConfig={ThemeConfig}>
                <div className="my-work-page-wrapper py-5">
                    <div className="personal-statement-wrapper background-theme-main py-4 mb-5">
                        <h2 className="text-theme-light personal-statement-header caviar-dreams">My Work</h2>
                    </div>
                    <div className="slider-wrapper d-none d-md-flex">
                        <Slider {...settings}>
                            {this.state.images}
                        </Slider>
                    </div>
                    <div className="slider-wrapper d-md-none">
                        <Slider {...mobileSettings}>
                            {this.state.images}
                        </Slider>
                    </div>
                </div>
            </PortfolioLayout>
        );
    }
}

export default WorkPage;