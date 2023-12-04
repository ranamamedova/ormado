import React from 'react'

const WorkingOrmado = () => {
    return (
        <div  className="Myform">

            <div className="writeforms">

                <div className="title">
                    <h3>Ormado</h3>
                    <h4>Working in Ormado Kaffeehaus</h4>
                </div>

                <div className="mainpart">

                    <div className="first">

                        <label htmlFor="branch"> Branch
                            <select id='branch' style={{ border: "none", width: "400px", }} classname="form-select no-outline" aria-label="Default select example">
                                <option id='as' selected>Select branch</option>
                                <option value="{1}">One</option>
                                <option value="{2}">Two</option>
                                <option value="{3}">Three</option>
                            </select>
                        </label>

                        <div className="borderrad"></div>

                        <label className='mt-3' > Position <input style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>


                     <div className="cat d-flex">
                     <label className='mt-3' >Full name<input style={{ border: "none", width: "200px" }} type="text" />Enter your full name </label>
                        <div className="borderrad1"></div>

                        <label className='mt-3' >Phone number<input style={{ border: "none", width: "200px" }} type="text" /> </label>
                        <div className="borderrad1"></div>
                     </div>



                        <label className='mt-3' htmlFor="second"> The reason why you left your former workplace? <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > Marital status <input style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > Education <input style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > Do you have any experience in the job you are applying for? <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > What languages do you speak? <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > Is there any criminal responsibility <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > Have you worked in any of our branches? <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > How long would you like to work with us? <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > How would you describe your availability? <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > Your feedback <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > Do you have any chronic diseases, and if so, which ones? <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > How did you know about us? <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > Longest term work where and how long did it last? <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>

                        <label className='mt-3' > Additional Information <input id='second' style={{ border: "none", width: "400px" }} type="text" /></label>
                        <div className="borderrad"></div>


                    </div>

                </div>

            </div>
        </div>

    )
}

export default WorkingOrmado