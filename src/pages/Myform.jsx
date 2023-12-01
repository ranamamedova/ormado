import React from 'react'
import logo1 from "../assets/img/logo1.png"
import logo2 from "../assets/img/logo2.png"
import logo3 from "../assets/img/logo3.png"
import logo4 from "../assets/img/logo4.png"

const Myform = () => {
    return (
        <div style={{ backgroundColor: "red" }} className="Myform">

            <div className="writeforms">

                <div className="title">
                    <h3>Ormado</h3>
                    <h4>Working in Ormado Kaffeehaus</h4>
                </div>

                <div className="mainpart">

                    <div className="first">

                        <label htmlFor="branch"> Branch
                            <select id='branch' style={{ width: "400px", }} classname="form-select no-outline" aria-label="Default select example">
                                <option id='as' selected>Select branch</option>
                                <option value="{1}">One</option>
                                <option value="{2}">Two</option>
                                <option value="{3}">Three</option>
                            </select>
                        </label>


                        <label className='mt-3' > Position <input style={{ width: "400px" }} type="text" /></label>


                        <div className="cat d-flex  ">
                            <label className='mt-3' >Full name<input style={{ width: "200px" }} type="text" /> </label>
                            <label className='mt-3' >Phone number<input style={{ width: "200px" }} type="text" /> </label>
                        </div>


                        <label className='mt-3' htmlFor="second"> The reason why you left your former workplace? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Marital status <input style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Education <input style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Do you have any experience in the job you are applying for? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > What languages do you speak? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Is there any criminal responsibility <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Have you worked in any of our branches? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > How long would you like to work with us? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > How would you describe your availability? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Your feedback <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Do you have any chronic diseases, and if so, which ones? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > How did you know about us? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Longest term work where and how long did it last? <input id='second' style={{ width: "400px" }} type="text" /></label>

                        <label className='mt-3' > Additional Information <input id='second' style={{ width: "400px" }} type="text" /></label>


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

export default Myform