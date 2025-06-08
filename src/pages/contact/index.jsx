import { Link } from "react-router-dom";
import { MainBtn, TitleBanner } from "../../components";
import mailIcon from "../../assets/img/mail.svg";
import phoneIcon from "../../assets/img/phone.svg";
import locationIcon from "../../assets/img/location.svg";


export function ContactUs() {
    return (
        <>
            <TitleBanner name="Contact Us"/>

            <section className="site-width padding-tb">
                <div className="contact-container">
                    <div className="contact-col">
                        <div className="contact-details">
                            <div>
                                <h1>Contact Information</h1>
                                <p>Fill the form and we will reach to you within 24hr</p>
                            </div>
                            <div>
                                <div className="contact-info">
                                    <div>
                                        <span className="flex-center">
                                            <img src={mailIcon} alt="mail icon" />
                                        </span>
                                        <span>
                                            <Link href="mailto:info@brillicaservices.com">
                                                info@botanica.com
                                            </Link>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="flex-center">
                                            <img src={phoneIcon} alt="Phone Icon" />
                                        </span>
                                        <span>
                                            <Link href="tel:7879737889" className="phone_no_contact_us">7879737879</Link>
                                            &nbsp;
                                            |
                                            &nbsp;
                                            <Link href="tel:8770211802" className="phone_no_contact_us">7358976494</Link>
                                        </span>
                                    </div>
                                    <div className="flex-start">
                                        <span>
                                            <img src={locationIcon} alt="Location icon" />
                                        </span>
                                        <span>
                                            2nd &amp; 3rd Floor, Near Windlass, Saharanpur Rd, Mohhobewala, Dehradun, Uttarakhand 248001
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="social-details">
                            {/* <Link href="https://www.linkedin.com/in/amitkumar-web/" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M26.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V26.5C4.5 27.0523 4.94772 27.5 5.5 27.5H26.5C27.0523 27.5 27.5 27.0523 27.5 26.5V5.5C27.5 4.94772 27.0523 4.5 26.5 4.5Z"
                                        stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M15 14V22" stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path d="M11 14V22" stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path
                                        d="M15 17.5C15 16.5717 15.3687 15.6815 16.0251 15.0251C16.6815 14.3687 17.5717 14 18.5 14C19.4283 14 20.3185 14.3687 20.9749 15.0251C21.6313 15.6815 22 16.5717 22 17.5V22"
                                        stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M11 11.5C11.8284 11.5 12.5 10.8284 12.5 10C12.5 9.17157 11.8284 8.5 11 8.5C10.1716 8.5 9.5 9.17157 9.5 10C9.5 10.8284 10.1716 11.5 11 11.5Z"
                                        fill="#D7EBFF"></path>
                                </svg>
                            </Link> */}

                            <Link to="https://www.facebook.com/" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                                        stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M21 11H19C18.6056 10.9984 18.2147 11.0748 17.85 11.225C17.4853 11.3752 17.1539 11.5961 16.875 11.875C16.5961 12.1539 16.3752 12.4853 16.225 12.85C16.0748 13.2147 15.9984 13.6056 16 14V28"
                                        stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12 18H20" stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </Link>

                            <Link to="https://www.instagram.com/" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
                                        stroke="#D7EBFF" strokeWidth="2" strokeMiterlimit="10"></path>
                                    <path
                                        d="M21.5039 4.5H10.5039C7.1902 4.5 4.50391 7.18629 4.50391 10.5V21.5C4.50391 24.8137 7.1902 27.5 10.5039 27.5H21.5039C24.8176 27.5 27.5039 24.8137 27.5039 21.5V10.5C27.5039 7.18629 24.8176 4.5 21.5039 4.5Z"
                                        stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z"
                                        fill="#D7EBFF"></path>
                                </svg>
                            </Link>

                            <Link to="https://www.x.com/" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.0007 11.0005C16.0007 8.25045 18.3132 5.96295 21.0632 6.00045C22.0262 6.01157 22.9656 6.3006 23.7683 6.8328C24.571 7.365 25.203 8.11771 25.5882 9.00045H30.0007L25.9632 13.038C25.7026 17.0937 23.9073 20.8979 20.9422 23.6773C17.9771 26.4566 14.0648 28.0025 10.0007 28.0005C6.00068 28.0005 5.00068 26.5005 5.00068 26.5005C5.00068 26.5005 9.00068 25.0005 11.0007 22.0005C11.0007 22.0005 3.00068 18.0005 5.00068 7.00045C5.00068 7.00045 10.0007 12.0005 16.0007 13.0005V11.0005Z"
                                        stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>

                            {/* <Link href="https://www.youtube.com/" target="_blank">
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 16L14 12V20L20 16Z" stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path
                                        d="M3 15.9999C3 19.7249 3.3875 21.8999 3.675 23.0249C3.75427 23.3301 3.90418 23.6125 4.11262 23.8491C4.32106 24.0858 4.58221 24.2702 4.875 24.3874C9.0625 25.9874 16 25.9499 16 25.9499C16 25.9499 22.9375 25.9874 27.125 24.3874C27.4178 24.2702 27.6789 24.0858 27.8874 23.8491C28.0958 23.6125 28.2457 23.3301 28.325 23.0249C28.6125 21.8999 29 19.7249 29 15.9999C29 12.2749 28.6125 10.0999 28.325 8.97488C28.2457 8.66963 28.0958 8.38729 27.8874 8.15062C27.6789 7.91395 27.4178 7.72958 27.125 7.61238C22.9375 6.01238 16 6.04988 16 6.04988C16 6.04988 9.0625 6.01238 4.875 7.61238C4.58221 7.72958 4.32106 7.91395 4.11262 8.15062C3.90418 8.38729 3.75427 8.66963 3.675 8.97488C3.3875 10.0999 3 12.2749 3 15.9999Z"
                                        stroke="#D7EBFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link> */}
                        </div>
                    </div>
                    <div className="contact-col">
                        <div className="form-container">
                            <h2>Get In Touch</h2>
                            <form>
                                <div>
                                    <input type="text" name="name" placeholder="Full Name" />
                                </div>
                                <div>
                                    <input type="tel" name="phone" placeholder="Phone" />
                                </div>
                                <div>
                                    <input type="email" name="email" placeholder="Email" />
                                </div>
                                <div>
                                    <textarea name="message" placeholder="Your Message"></textarea>
                                </div>
                                <div>
                                    <MainBtn info={{ name: "Submit" }} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}