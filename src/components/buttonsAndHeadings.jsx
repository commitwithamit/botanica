import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// longer button
export function MainBtn({ info: { name, path } }) {
    return (
        <>
            {
                path ? (
                    <Link to={path} className="btns">
                        {name}
                    </Link>
                ) : (
                    <button className="btns">
                        {name}
                    </button>
                )
            }
        </>
    )
}

// longer button with arrow
export function MainIconBtn({ info: { name, path, img, setChangeBtn } }) {
    return (
        <>
            {
                path ? (
                    <Link to={path} className="btns">
                        {name}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
                        </svg>
                    </Link>
                ) : (
                    <button className='btns' onClick={() => setChangeBtn(true)}>
                        {name}
                        <img src={img} alt={`${name} icon`} />
                    </button>
                )
            }
        </>
    )
}

// square btn (add to cart/wishlist/view)
export function SmallBtn({ info }) {
    // info={{path:wishIcon, toolTip:true, msg:"Wishlist", link:"/abc"}}
    const { path, toolTip, msg, link } = info;
    const [tooltip, setTooltip] = useState(false);

    const handleChildClick = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        if (toolTip === true) {
            setTooltip(true);
        }
    }, []);
    return (
        <>
            {
                link ? (
                    <Link
                        to={link}
                        className={tooltip ? "btn-icon tooltip-con" : "btn-icon"}
                    >
                        <img src={path} alt="add to cart" />
                        {
                            tooltip && (
                                <div className="tooltip">
                                    {msg}
                                </div>
                            )
                        }
                    </Link>
                ) :
                    (
                        <button
                            className={tooltip ? "btn-icon tooltip-con" : "btn-icon"}
                            onClick={handleChildClick}
                        >
                            <img src={path} alt="add to cart" />
                            {
                                tooltip && (
                                    <div className="tooltip">
                                        {msg}
                                    </div>
                                )
                            }
                        </button>
                    )
            }
        </>
    )
}

// section headings
export function SectionHeading(props) {
    return (
        <h3 className="section-heading">{props.name}</h3>
    )
}