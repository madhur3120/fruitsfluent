import React from 'react'
import "./blog1.css"
import qkm from "./blogimages/qkm.jpg"
import qkm1 from "./blogimages/qkm1.jpg"
import qkm2 from "./blogimages/qkm2.jpg"
import qkm3 from "./blogimages/qkm3.jpg"
import qkm4 from "./blogimages/qkm4.jpg"



const Blog9 = () => {
    return (
        <>
            <div className='blogbody'>
                <br />
                <br />
                <br />
                <br />
                <h1 className='Blogh1'> Qubani ka Meetha</h1>

                <div class="recipe">
                    <p className='Blogp' text align="center">
                        A history of Hyderabadi cuisine.
                    </p>
                    <br />
                    <h2 className='Blogh2'>Ingredients</h2>
                    <br />
                    <ul className='Blogul'>
                        <li className='Blogli'>25 to 28 dried apricots (khubani)</li>
                        <li className='Blogli'> 1 to 1.5 cup strained water from the soaked apricots</li>
                        <li className='Blogli'>1/2 cup cream cheese</li>
                        <li className='Blogli'>2 to 3 teaspoon sugar as required</li>
                        <li className='Blogli'>sliced almonds</li>

                    </ul>
                    <br />

                    <h2 className='Blogh2'> Preparation Time</h2>
                    <br />
                    <p className='Blogp' text align="center">Takes about 15 minutes to get it ready and cooked</p>
                    <br />
                    <h2 className='Blogh2'>Method</h2>
                    <br />
                    <ul className='Blogul'>
                        <li className='Blogli'> Rinse a few times in fresh water and then soak 25 to 28 dried apricots overnight in 2 cups of water at room temperature or for 4 to 5 hours in 2 cups of warm water.</li>

                        <li className='Blogli'>Remove the apricots with a slotted spoon and keep the water aside. We will be using this water to make the khubani ka meetha. Press the softened apricots with your fingers and remove the seeds. You can also chop them if you prefer. Keep the
                            hard kernels aside too.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={qkm} alt="" />
                        </div>

                        <li className='Blogli'> In a frying pan, add 1 cup of water which we have kept aside. The water has a beautiful golden color. Add the apricots to the water and allow to cook on a low flame.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={qkm1} alt="" />
                        </div>
                        <li className='Blogli'> The apricots in the meantime have started becoming soft and changing color. Stir occasionally and keep an eye on the apricots whilst they slow cook.You can mash the apricots while stirring.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={qkm2} alt="" />
                        </div>
                        <li className='Blogli'>Add 2 to 3 teaspoons sugar or as needed after 22 to 25 minutes. Stir and continue to cook till the mixture thickens a bit, approx 5 to 6 minutes on a low flame.Lastly add the almond like nuts got from the hard kernels. Instead of these nuts
                            from the kernels you can also garnish with sliced almonds that have been blanched
                        </li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={qkm3} alt="" />
                        </div>

                        <li className='Blogli'> Mix well. The Khubani ka Meetha is ready now. The consistency is neither too dry nor too runny. Serve Khubani ka Meetha, warm or chilled, plain or with some whipped cream.</li>
                        <br />
                        <div class="Blogphoto">
                            <img className="blog1img" src={qkm4} alt="" />
                        </div>


                    </ul>
                    <br />


                    <h2 className='Blogh2'>Servings</h2>
                    <p className='Blogp' text align="center">It serves around 4 to 8 people.</p>
                    <br />
                    <br />
                    <div class="youtube">
                        <iframe width="50%" height="400" src="https://www.youtube.com/embed/HWXkpBzw_Jo">
                        </iframe>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Blog9