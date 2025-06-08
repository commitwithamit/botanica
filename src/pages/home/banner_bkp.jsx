import { useEffect, useState, useRef } from "react";
import { MainBtn, SectionHeading, SmallBtn } from "../../components";
import BannerSlider from "./bannerSlider";
// image
import play from "../../assets/img/play.svg";
import plant from "../../assets/porducts/32.png";
import cartIcon from "../../assets/img/cart.svg";

function Banner() {
    const [active, setActive] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        // This function is called by the YouTube IFrame API when it's ready
        const onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                videoId: 'uSOOO3KBKDY',
                events: {
                    onReady: onPlayerReady,
                },
            });
        };

        const onPlayerReady = (event) => {
            // Player is ready
        };

        // Load the YouTube IFrame API script
        console.log(window.YT);
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady();
        } else {
            onYouTubeIframeAPIReady();
        }

        // Clean up function
        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
                playerRef.current = null;
            }
        };
    }, []);

    const handlePlayClick = () => {
        setActive(true);
    };

    const handleCloseClick = () => {
        setActive(false);
        if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
            playerRef.current.pauseVideo();
        }
    };
    return (
        <>
            <div className="site-width row-con">
                <div className="col">
                    <h1>Breath Natural</h1>
                    <p>Explore our wide selection of vibrant, healthy plants delivered right to your door. Transform your space with lush greenery and enjoy the benefits of nature indoors, every day.</p>
                    <div className="btns-con">
                        <MainBtn info={{ name: "Explore", path: "/" }} />
                        <div className="play-con" onClick={handlePlayClick}>
                            <span className="play-btn">
                                <img src={play} alt="play video" />
                            </span>
                            View Demo...
                        </div>
                    </div>
                    {active && (
                        <div className="video-con active">
                            <div id="youtube-player-container">
                                <iframe
                                    id="youtube-player"
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/uSOOO3KBKDY?enablejsapi=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="bg-close" onClick={handleCloseClick}></div>
                            <div className="btn-close" onClick={handleCloseClick}>Close</div>
                        </div>
                    )}
                </div>
                <div className="col">
                    <BannerSlider />
                </div>
            </div>
            <div className="site-width padding-tb trendy">
                <SectionHeading name="Our Trendy Plants" />
                <div className="long-box">
                    <div className="col">
                        <img  loading="lazy" src={plant} alt="trendy plant" />
                    </div>
                    <div className="col long-box-text">
                        <h4>For Small Decs Ai Plat</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <h4>₹499/-</h4>
                        <div className="btn-con">
                            <MainBtn info={{ name: "Buy Now", path: "/" }} />
                            <SmallBtn info={{path:cartIcon, toolTip:true, msg:"Add to cart"}} />
                        </div>
                    </div>
                </div>
                <div className="long-box order-reverse">
                    <div className="col">
                        <img  loading="lazy" src={plant} alt="trendy plant" />
                    </div>
                    <div className="col long-box-text">
                        <h4>For Small Decs Ai Plat</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <h4>₹499/-</h4>
                        <div className="btn-con">
                            <MainBtn info={{ name: "Buy Now", path: "/" }} />
                            <SmallBtn info={{path:cartIcon, toolTip:true, msg:"Add to cart"}} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Banner;