import React from 'react'
import "./About.css"
import pratham from './blogimages/pratham.jpg'
import pratik from './blogimages/prathik.jpg'
import madhur from './blogimages/madhur.jpg'
import raj from './blogimages/raj.jpg'
import nithin from './blogimages/Nithin.jpg'
import bg from './blogimages/aboutusbg.jpeg'
const About = () => {
    return (
        <>
            <div className='aboutuspage'>
                <div className='aboutusrow'>
                    <div className='aboutimagesection'>
                        <img className='aboutimagepart' src={bg} />
                    </div>
                    <div className='aboutuscontent'>
                        <h1 className='aboutustag'>About Us</h1>
                        <h2 className='aboutussubtag'>Our NutKart</h2>
                        <p className='aboutuspara'>
                            100% PURE NUTKART DRY FRIUTS</p>
                        <p className='aboutuspara'>
                            "Our journey began in the winter of 2021 when our promoters from IT and banking background started working on Nutkhut. We launched Nutkhut January 2021 as a healthier alternative to snacking."
                        </p>
                        <p className='aboutuspara'> Yes, we do have some of our favourites Pistachio, Walnut, California Almonds, Red and Black Raisinare delicious and we snack on them daily.</p>
                    </div>
                </div>
            </div>


            <div className='about'>
                <h1 className="abouth1">Our Team</h1>

                <div className="aboutcontainer1">
                    <div className="aboutrow">

                        <div className="aboutcol-11">
                            <img src={madhur} alt="" className='aboutimg' />
                            <br />
                            <h4 className="abouth">Madhur Saxena </h4>
                            <h4 className="abouth">Roll no: S20200010115 </h4>
                            <h4 className="abouth">Email : madhur.s20@iiits.in</h4>
                        </div>

                        <div className="aboutcol-11">
                            <img src={pratik} alt="" className='aboutimg' />
                            <br />
                            <h4 className="abouth">Pratik Bhagat </h4>
                            <h4 className="abouth">Roll no: S20200010172 </h4>
                            <h4 className="abouth">Email : pratik.b20@iiits.in</h4>
                        </div>

                        <div className="aboutcol-11">
                            <img src={pratham} alt="" className='aboutimg' />
                            <br />
                            <h4 className="abouth">Pratham Garg </h4>
                            <h4 className="abouth">Roll no: S20200010171 </h4>
                            <h4 className="abouth">Email : pratham.g20@iiits.in</h4>
                        </div>

                        <div className="aboutcol-11">
                            <img src={raj} alt="" className='aboutimg' />
                            <br />
                            <h4 className="abouth">Kuber Raj Kunal</h4>
                            <h4 className="abouth">Roll no: S20200010105 </h4>
                            <h4 className="abouth">Email : rajkunal.k20@iiits.in</h4>
                        </div>

                        <div className="aboutcol-11">
                            <img src={nithin} alt="" className='aboutimg' />
                            <br />
                            <h4 className="abouth">Nithin Angoth</h4>
                            <h4 className="abouth">Roll no: S20200010105 </h4>
                            <h4 className="abouth">Email : nithin.a20@iiits.in</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default About