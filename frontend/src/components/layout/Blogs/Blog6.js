import React from 'react'
import "./blog1.css"
import dryfruitsladdo1 from "./blogimages/dryfruitsladdo1.jpg"
import dryfruitsladdo2 from "./blogimages/dryfruitsladdo2.jpg"
import dryfruitsladdo3 from "./blogimages/dryfruitsladdo3.jpg"
import dryfruitsladdo4 from "./blogimages/dryfruitsladdo4.jpg"
import dryfruitsladdo from "./blogimages/dryfruitsladdo.jpg"

const Blog6 = () => {
    return (
        <>
            <div className='blogbody'>
                <div class="recipe">
                    <h1 className='Blogh1'>Dry Fruit Laddoos</h1>
                    <p className='Blogp'>A healthy recipe that involves no added sugar, it’s the perfect one for kids and serves ideally as a tasty mid-morning snack.
                    </p>
                    <br />
                    <br />
                    <h2 className='Blogh2'>Ingredients</h2>
                    <br />
                    <ul className='Blogul'>
                        <li  className='Blogli'> 1/4 cup of cashews</li>
                        <li className='Blogli'> 1/4 cup of almonds</li>
                        <li className='Blogli'>1/4 cup of walnuts</li>
                        <li className='Blogli'>7 dates</li>
                        <li className='Blogli'>6 dried apricots</li>
                        <li className='Blogli'>4 dried figs</li>
                        <li className='Blogli'>Dried coconut (optional)</li>
                        <li className='Blogli'>Poppy seeds(optional)</li>
                        <li className='Blogli'>Sesame Seeds(optional)</li>
                    </ul>

                    <h2 className='Blogh2'> Preparation Time</h2>
                    <br />
                    <p className='Blogp' text align="center"> Prep time takes 10 minutes while you’ll need another 5 minutes to make the laddoos.</p>
                    <br />
                    <h2 className='Blogh2'>Method</h2>
                    <br />
                    <ul className='Blogul'>
                        <li className='Blogli'>For the prepping, you have to roast 1/4 cup almonds and 1/4 cup cashews on a medium flame for 2 minutes and dry roast the nuts in a microwave for 1 minute.
                        </li>
                        <br />
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={dryfruitsladdo1} alt="" />
                        </div>


                        <li className='Blogli'>
                            Let them cool and roast seeds until you get the aroma. Heat 7 dates, 6 apricots, and 4 figs in a pan and after cooling.
                        </li>
                        <br />
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={dryfruitsladdo2} alt="" />
                        </div>


                        <li className='Blogli'>
                            Put them in a blender and keep it on until you notice the texture changing. You can add 1/4 cup walnuts to the mix and remove later, adding the cashews and almonds.
                        </li>
                        <br />
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={dryfruitsladdo3} alt="" />
                        </div>


                        <li className='Blogli'>
                            For these dry fruit laddu recipes, all you do is take your prepared ingredients and knead them well. Divide the mix into 6 to 8 portion sizes and shape em’ into balls.
                        </li>
                        <br />
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={dryfruitsladdo4} alt="" />
                        </div>

                        <li className='Blogli'>
                            For the garnish, roll up the balls on dried coconut powder or sesame seeds and you’re done.
                        </li>
                        <br />
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={dryfruitsladdo} alt="" />
                        </div>
                    </ul>

                    <h2 className='Blogh2'>Servings</h2>
                    <p className='Blogp'>You get about 6 to 8 laddoos which are fairly good for snack times. Just remember to store in a food grade airtight jar though.</p>
                    <br />
                    <br />
                    <div class="youtube">
                        <iframe width="50%" height="400" src="https://www.youtube.com/embed/wx7Dk4gQy5c"> </iframe>
                    </div>
                    <br />
                    <br /><br />

                </div>

            </div>
        </>
    )

}
export default Blog6