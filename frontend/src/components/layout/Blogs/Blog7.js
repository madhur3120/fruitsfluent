import React from 'react'
import "./blog1.css"
import pineapple1 from "./blogimages/pineapple1.jpg"
import pineapple2 from "./blogimages/pineapple2.jpg"
import pineapple3 from "./blogimages/pineapple3.jpg"
import pineapple4 from "./blogimages/pineapple4.jpg"
import pineapple from "./blogimages/pineapple.jpg"

const Blog7 = () => {
    return (
        <>
            <div className='blogbody'>
                <br/>
                <br/>
                <h1 className='Blogh1'>Pineapple and Apricot Jam</h1>
                <div class="recipe">
                    <p className='Blogp'>
                        How would you like some pineapple and apricot jam with that breakfast toast? Here’s how to make it.
                    </p>
                    <br />
                    <h2 className='Blogh2'>Ingredients</h2>
                    <ul className='Blogul'>
                        <li className='Blogli'> Dried apricots</li>
                        <li className='Blogli'> 1 pineapple (whole)</li>
                        <li className='Blogli'>A pouch of liquid pectin</li>
                        <li className='Blogli'>7 cups of sugar</li>
                        <li className='Blogli'>1/4 cup of lemon juice</li>
                    </ul>

                    <h2 className='Blogh2'> Preparation Time</h2>
                    <br />
                    <p className='Blogp' text align="center"> Takes about 2 hours to prepare and a day to finish</p>
                    <br />
                    <h2 className='Blogh2'>Method</h2>
                    <br />
                    <ul className='Blogul'>
                        <li className='Blogli'> Soak the dried apricots overnight in a large bowl, the day before you plan to make the jam.</li>
                        <br />
                        <li> Drain the fluid in a colander and reserve 1/4 of soaking liquid.</li>
                        <br />

                        <li className='Blogli'>Sterilize some half-pint jars to use them. Get a serrated knife and skin the whole pineapple and measure and cut into four diced cups.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={pineapple1} alt="" />
                        </div>

                        <li className='Blogli'> In a pot, add apricots, soaking liquid, and the pineapple. Heat on medium flame and stir. Lower the flame, cover and cook for 5 minutes until the mix softens.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={pineapple2} alt="" />
                        </div>
                        <li className='Blogli'> Take out the mix and pour into an immersion blender to blend to the desired consistency. Mix in lemon juice, pectin, and sugar. Add the mix to the pot and boil for about 2 minutes. Switch off the flame and skim the foam using a spoon.
                        </li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={pineapple3} alt="" />
                        </div>
                        <li className='Blogli'> Pour your jam into the jars and place those on a canning kettle. Add water up to 1-inch less than the neck of the jars and boil for 10 minutes. Remove with a jar lifter and allow to cool, as long as it takes.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={pineapple4}alt="" />
                        </div>
                        <li className='Blogli'> Store your jam in the refrigerator after the jars cool down and use the jam whenever you want on toasts, salads, and other dishes.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={pineapple}alt="" />
                        </div>
                    </ul>

                    <h2 className='Blogh2'>Servings</h2>
                    <br />
                    <p className='Blogp' text align="center">If you use 11 pint-sized jars, you get enough servings to last a few weeks!</p>
                </div>
                <br />
                <br />

                <div class="youtube">
                    <iframe width="50%" height="400" src="https://www.youtube.com/embed/Qsu3rdTAKXc">
                    </iframe>
                </div>

            </div>

        </>
    )

}
export default Blog7