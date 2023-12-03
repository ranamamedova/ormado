import React from 'react'
import logo1 from "../assets/img/logo1.png"
import logo2 from "../assets/img/logo2.png"
import logo3 from "../assets/img/logo3.png"
import logo4 from "../assets/img/logo4.png"

const WorkingOrmado = () => {
    return (
        <div className="Myform">

            <div className="writeforms">

                <div className="title">
                    <h3>Ormado</h3>
                    <h4>Working in Ormado Kaffeehaus</h4>
                </div>

                <div className="mainpart">
                    <div className="first">
                        <label className='ones' htmlFor="branch"> <h1>Branch</h1> <input placeholder='Select branch' id='branch' type="text" />
                            <div className="dropdown">
                                <button style={{ border: "none", width: "50", height: "50", backgroundColor: "rgb(253, 251, 245)" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg className='buttonarrow' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 58 58" fill="none">
                                        <path d="M6.73794 19.1862C7.40073 18.5236 8.29955 18.1514 9.23674 18.1514C10.1739 18.1514 11.0727 18.5236 11.7355 19.1862L29.2307 36.6813L46.7258 19.1862C47.3924 18.5424 48.2852 18.1861 49.2119 18.1942C50.1386 18.2022 51.0251 18.5739 51.6804 19.2292C52.3357 19.8845 52.7074 20.771 52.7154 21.6977C52.7235 22.6244 52.3672 23.5172 51.7234 24.1838L31.7295 44.1777C31.0667 44.8403 30.1679 45.2125 29.2307 45.2125C28.2935 45.2125 27.3947 44.8403 26.7319 44.1777L6.73794 24.1838C6.07535 23.521 5.70312 22.6222 5.70312 21.685C5.70312 20.7478 6.07535 19.849 6.73794 19.1862Z" fill="#979797" />
                                    </svg>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </label>


                        <label className='mt-3' > <h1>Position</h1> <input type="text" /></label>
                        <div className="cat ">
                            <label className='mt-3' ><h1>Full name</h1><input id='one' placeholder='enter your fullname' type="text" /></label>
                            <label className='mt-3 ' ><h1>Phone number</h1><input id='two' placeholder='enter your phone' type="text" /> </label>
                        </div>
                        <div className="cat2">
                            <label className='mt-3' ><h1>Email</h1><input id='one' placeholder='Enter your email address' type="text" /></label>
                            <label className='mt-3 ' ><h1>Age</h1><input id='two' type="text" /> </label>
                        </div>

                        <div className="cat3">
                            <label className='mt-3' ><h1>Nationality</h1><input id='one' type="text" /></label>
                            <label className='mt-3 ' ><h1>Gender</h1><input placeholder='Male' id='two' type="text" />   </label>
                            <div className="dropdown">
                                <button style={{ border: "none", width: "50", height: "50", backgroundColor: "rgb(253, 251, 245)" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg className='buttonarrow' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 58 58" fill="none">
                                        <path d="M6.73794 19.1862C7.40073 18.5236 8.29955 18.1514 9.23674 18.1514C10.1739 18.1514 11.0727 18.5236 11.7355 19.1862L29.2307 36.6813L46.7258 19.1862C47.3924 18.5424 48.2852 18.1861 49.2119 18.1942C50.1386 18.2022 51.0251 18.5739 51.6804 19.2292C52.3357 19.8845 52.7074 20.771 52.7154 21.6977C52.7235 22.6244 52.3672 23.5172 51.7234 24.1838L31.7295 44.1777C31.0667 44.8403 30.1679 45.2125 29.2307 45.2125C28.2935 45.2125 27.3947 44.8403 26.7319 44.1777L6.73794 24.1838C6.07535 23.521 5.70312 22.6222 5.70312 21.685C5.70312 20.7478 6.07535 19.849 6.73794 19.1862Z" fill="#979797" />
                                    </svg>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>

                        </div>

                        <label className='mt-3' htmlFor="second"> <h1>The reason why you left your former workplace?</h1> <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > <h1>Marital status </h1><input type="text" /></label>

                        <label className='mt-3' > <h1>Education</h1> <input type="text" /></label>

                        <label className='mt-3' > <h1>Do you have any experience in the job you are applying for?</h1> <input id='second' type="text" /></label>

                        <label className='mt-3' > <h1>What languages do you speak?</h1> <input id='second' type="text" /></label>

                        <label className='mt-3' > <h1>Is there any criminal responsibility</h1> <input id='second' type="text" /></label>

                        <label className='mt-3' > <h1>Have you worked in any of our branches?</h1> <input id='second' type="text" /></label>

                        <label className='mt-3' > <h1>How long would you like to work with us?</h1> <input id='second' type="text" /></label>

                        <label className='mt-3' > <h1>How would you describe your availability?</h1> <input id='second' type="text" /></label>

                        <label className='mt-3' > <h1>Your feedback</h1> <input placeholder='Enter information about you' id='second' type="text" /></label>

                        <label className='mt-3' > <h1>Do you have any chronic diseases, and if so, which ones?</h1> <input id='second' type="text" /></label>

                        <label className='mt-3' > <h1>How did you know about us?</h1> <input id='second' type="text" /></label>

                        <label className='mt-3' > <h1>Longest term work where and how long did it last?</h1> <input id='second' type="text" /></label>

                        <label className='mt-3' > <h1>Additional Information</h1> <input id='second' type="text" /></label>

                    </div>


                    <div className="footicon mt-3">
                        <div className="box1"><img src={logo1} alt="" /></div>
                        <div className="box2"><img src={logo2} alt="" /></div>
                        <div className='writing'><h3 >Send</h3></div>
                        <div className="box3"><img src={logo3} alt="" /></div>
                        <div className="box4"><img src={logo4} alt="" /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkingOrmado