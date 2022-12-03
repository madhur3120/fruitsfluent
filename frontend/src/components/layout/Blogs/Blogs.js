import React from 'react'
import "./blogs.css"

import diabetes1 from './blogimages/diabetes1.jpg'
import datesfront from "./blogimages/datesfront.jpg"
import gojiberriesfront from "./blogimages/gojiberriesfront.jpg"
import blog3front from "./blogimages/blog3front.jpg"
import blueberryfront from "./blogimages/blueberryfront.jpg"
import dryfruitsladdo from "./blogimages/dryfruitsladdo.jpg"
import pineapple from"./blogimages/pineapple.jpg"
import smoothie from  "./blogimages/smoothie.jpg" 
import qkm4 from "./blogimages/qkm4.jpg"
const Blogs = () => {
    return (
        <>
            <div className="blogcontainer1">
                <div className="blogrow">
                    <div className="col-11">
                        <img src={diabetes1} alt="" className='blogimg'/>
                        <h4 className="blogh">Complete list of dry fruits for diabetes</h4>
                        <p>Dehydrated Fruits, or, more commonly known as Dry Fruits, known for their wholesome values, really long shelf life, and great taste, have been in use since the Mesopotamia Civilization. </p>
                        <a  className = "Bloaga" href="/blog1">Read more</a>
                    </div>
                    <div className="col-11">
                        <img src={datesfront} alt="" className='blogimg'/>
                        <h4 className="blogh">Medjool king of dates</h4>
                        <p>Medjool confused right ? It is not a normal date, It’s not Coconut Tree, It’s a Palm Tree. It’s not a farm, it’s a grove.Growers call it “The labour of love” because this labour takes 7 </p>
                        <a  className = "Bloaga" href="/blog2">Read more</a>
                    </div>
                    <div className="col-11">
                        <img src={gojiberriesfront} alt=""  className='blogimg' />
                        <h4 className="blogh">Why should you eat Goji berries?</h4>
                        <p>Say hello to the super fruit known as Goji berries! You would be amazed to know that these lovely red-coloured berries can help you fight deadly diseases like cancer and diabetes. </p>
                        <a className = "Bloaga" href="/blog3">Read more</a>
                    </div>
                    <div className="col-11">
                        <img src={blog3front} alt="" className='blogimg'/>
                        <h4 className="blogh">Dry Fruits That You Must Eat For Weight Loss!</h4>
                        <p>Weight loss begins in your kitchen! An individual spends hours in the gym but they may not see positive results because everyone has a different body structure. Different weight loss techniques work </p>
                        <a className = "Bloaga" href="/blog4">Read more</a>
                    </div>
                    <div className="col-11">
                        <img src= {blueberryfront} alt="" className='blogimg'/>
                        <h4 className="blogh">Health Benefits of Dry Blueberries.</h4>
                        <p>In India, we don’t really pay a lot of attention to blueberries and their health benefits. The only time you hear about its fan following is when it’s used in desserts like ice creams and cheesecakes.
                        </p>
                        <a className = "Bloaga" href="/blog5">Read more</a>
                    </div>
                    <div className="col-11">
                        <img src={dryfruitsladdo} alt="" className='blogimg'/>
                        <h4 className="blogh">A healthy Sweet: Dry fruit Laddoos</h4>
                        <p>Today We bring you a very healthy Sweet dish with a very easy recipe and the fun part almost no sugar involved ....ahh yes we are talking about dry fruit laddoos</p>
                        <a className = "Bloaga" href="/blog6">Read more</a>
                    </div>
                    <div className="col-11">
                        <img src={pineapple} alt="" className='blogimg'/>
                        <h4 className="blogh">The New breakfast partner: Pineapple and Apricot Jam</h4>
                        <p>Tired of Eating so called natural jam which comes to your table from the shelves of supermarket with a artifical flavour.No worries we got your back we are here with recipe of Pineapple and Apricot Jam
                        </p>
                        <a className = "Bloaga" href="/blog7">Read more</a>
                    </div>

                    <div className="col-11">
                        <img src={smoothie} alt="" className='blogimg'/>
                        <h4 className="blogh">Attention Smoothie Lovers: Apricot and Yoghurt Smoothie Coming up</h4>
                        <p>Every time you think about smoothies you always remember unhealthy options like chocolate ,vanilla or strawberry but we all know how much fat it gives to us so let's see a healthier option presenting you Apricot and Yoghurt Smoothie </p>
                        <a className = "Bloaga" href="/blog8">Read more</a>
                    </div>

                    <div className="col-11">
                        <img className="blog8 blogimg" src={qkm4}alt="" />
                        <h4 className="blogh">A Premium Desert: Qubani ka Meetha </h4>
                        <p>Qubani ka Meetha also known as Khubani ka meetha is a popular sweet dish from Hyderabadi cuisine. This tangy sweet dessert is made from dried apricots, sugar and nuts having a compote like jammy consistency. Being warming to the body it
                            is a perfect dessert for a cold winter night.
                        </p>
                        <a className = "Bloaga" href="/blog9">Read more</a>
                    </div>



                </div>
            </div>




        </>
    )
}

export default Blogs
