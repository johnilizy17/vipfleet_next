import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../asset/SlideImage/image1.jpg'
import image3 from '../../asset/SlideImage/image3.jpg'
import image4 from '../../asset/SlideImage/image4.jpg'
import Image from 'next/image';
import { GoCalendar } from 'react-icons/go'
import { MdLocalAirport, MdOutlineLocationOn } from 'react-icons/md'
export default function Slide() {
    return (
        <div>
            <div className="flex flex-row h-20 z-50 " style={{ position: "relative", width: "96vw" }}>
                <div className="basis-2/4 sm:basis-3/4 flex bg-brand-color justify-center items-center mt-10 " style={{ marginBottom: -40 }}>

                    <div className="flex justify-around w-3/4" style={{color:"#ffffff"}}>
                        <div className="flex items-center flex-col">
                            <MdLocalAirport style={{color:"#ffffff"}} />
                            <div style={{color:"#ffffff"}}>Airport</div>
                        </div>
                        <div className="flex items-center flex-col">
                            <GoCalendar style={{color:"#ffffff"}} />
                            <div >24/7</div>
                        </div>
                        <div className="flex items-center flex-col">
                            <MdOutlineLocationOn style={{color:"#ffffff"}} />
                            <div>Any place</div>
                        </div>
                    </div>
                </div>
                <div className=" basis-2/3 sm:basis-1/3  border-white-color mt-5  flex p-10 items-center">
                    gallery
                </div>
            </div>
            <Carousel
                showStatus={false}
                showArrows={false}
                autoPlay={true}
                infiniteLoop={true}
            >
                <div style={{ width: "100vw" }}>
                    <Image alt="image1" src={image1} />
                </div>
                <div style={{ width: "100vw" }}>
                    <Image alt="image1" src={image3} />
                </div>
                <div style={{ width: "100vw" }}>
                    <Image alt="image1" src={image4} />
                </div>
            </Carousel>
        </div>
    )
}