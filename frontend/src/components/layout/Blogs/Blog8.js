import React from 'react'
import "./blog1.css"
import smoothie2 from "./blogimages/smoothie2.jpg"
import smoothie3 from "./blogimages/smoothie3.jpg"
import smoothie4 from "./blogimages/smoothie4.jpg"
import smoothie5 from "./blogimages/smoothie5.jpg"
import smoothie6 from "./blogimages/smoothie6.jpg"



const Blog8 = () => {
    return (
        <>
            <div className='blogbody'>
               <br/>
               <br/>
                <h1 className='Blogh1'>Apricot and Yoghurt Smoothie</h1>
                <br />
                <div class="recipe">
                    <p  className='Blogp' text align="center">
                        If you love smoothies, then you’re in for a treat with this cool and classic recipe
                    </p>
                    <br />
                    <h2 className='Blogh2'>Ingredients</h2>
                    <br />
                    <ul className='Blogul'>
                        <li className='Blogli'> 1/4 cup almonds</li>
                        <li className='Blogli'> 1/4 cup cashews</li>
                        <li className='Blogli'> 1/4 cup raisins</li>
                        <li className='Blogli'>1/4 cup pistachios (shelled and unsalted)</li>
                        <li className='Blogli'>7 to 8 dates</li>
                    </ul>
                    <br />

                    <h2 className='Blogh2'> Preparation Time</h2>
                    <br />
                    <p className='Blogp' text align="center">It takes just 5 minutes to get it ready and that’s the best part.</p>
                    <br />

                    <h2 className='Blogh2'>Method</h2>
                    <br />
                    <ul className='Blogul'>
                        <li className='Blogli'> Soak 3 to 4 dried figs in hot water for 30 minutes or in water at room temperature for 1 to 2 hours or more until they soften. If you have dried figs that are soft, then there is no need to soak them.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={smoothie2} alt=""/>
                        </div>

                        <li className='Blogli'>Once the figs have softened roughly chop them. Then, roughly chop the dates and discard the seeds if any.
                        </li>


                        <li className='Blogli'> Add all of the remaining nuts and dry fruitsand Add 1/2 cup chilled milk in a blender </li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={smoothie3} alt=""/>
                        </div>

                        <li className='Blogli'>Blend to a semi-fine paste. You can make a fine paste if you prefer. If making for small kids, then make a very fine paste.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={smoothie4} alt=""/>
                        </div>

                        <li className='Blogli'> Add the remaining 2 cups of milk. You can also add sugar if you like – about 1 to 2 tablespoons of raw sugar. In place of raw sugar, you can opt for coconut sugar or palm sugar.Blend again well.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={smoothie5} alt=""/>
                        </div>

                        <li className='Blogli'> Pour the dry fruits milkshake into glasses and serve straightway. You can add some sliced nuts like almond or pistachios or a couple of saffron strands for garnishing if you like.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={smoothie6} alt=""/>
                        </div>
                    </ul>

                    <h2 className='Blogh2'>Servings</h2>
                    <p  className='Blogp' text align="center">Serves about 1-2 people since it’s an instant smoothie.</p>
                </div>
                <br />
                <br />


                <div class="youtube">
                    <iframe width="50%" height="400" src="https://www.youtube.com/embed/19eIwQlp0n0">
                    </iframe>
                </div>
            </div>
           
        </>
    )

}
export default Blog8