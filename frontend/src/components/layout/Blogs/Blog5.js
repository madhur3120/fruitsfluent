import React from 'react'
import "./blog1.css"
import blueberry from "./blogimages/blueberry.jpg"
import blueberry1 from "./blogimages/blueberry1.jpg"
import blueberry2 from "./blogimages/blueberry2.jpg"
import blueberry4 from "./blogimages/blueberry4.jpg"
import blueberry5 from "./blogimages/blueberry5.jpg"

const Blog5 = () => {
    return (
        <>
            <div className='blogbody'>
                <div className="blog">
                    <h1 className='Blogh1'>Health Benefits of Dry Blueberries.</h1>
                    <br />
                    <br />
                    <p className='Blogp'>
                        In India, we don’t really pay a lot of attention to blueberries and their health benefits. The only time you hear about its fan following is when it’s used in desserts like ice creams and cheesecakes. But what most of us don’t know is that dry blueberry
                        is actually a super food with mind blowing health benefits. Though they are difficult to find in the Indian markets, good quality dried blueberry is available online. Here is our list of benefits that will make you run out and buy dry blueberries
                        right away!
                    </p>

                    <br />
                    <h2  className='Blogh2'>Filled with antioxidants</h2>
                    <br />
                    <p className='Blogp'>
                        Blueberries are rich in antioxidants and hence helps protects our body from a variety of diseases, which includes cancer. Blueberry is the king of fruits and vegetables in the sense that it has the highest amount of antioxidants. Regular consumption of
                        it is found to protect you from neurodegenerative, digestive and cardiovascular diseases.
                    </p>
                    <br />
                    <br />
                    <div class="Blogphoto">
                        <img className="blog1img" src={blueberry} alt=""/>
                    </div>

                    <h2  className='Blogh2'> Reverses the damage of a bad diet</h2>
                    <br />
                    <p className='Blogp'>A research done on the effects of eating dry blueberries reported that they can eliminate the adverse effects of a bad diet (a high fat one). Their acidic nature also has a positive effect on blood pressure which is usually elevated in obese patients.
                    </p>

                    <br />
                    <div class="Blogphoto">
                        <img className="blog1img" src={blueberry1} alt=""/>
                    </div>

                    <h2  className='Blogh2'> A dry blueberry a day keeps the doctor a day </h2>
                    <br />
                    <p className='Blogp'>Consuming dry blueberries on a daily basis can enhance the body’s defense against bacterial infections and also reduce inflammation, reducing the risk of catching a cold or cough.</p>
                    <br />


                    <h2  className='Blogh2'>Good for nervous and cardiac system</h2>
                    <br />
                    <p className='Blogp'>
                        Happy heart, happy you As they are rich in antioxidants, they keep your cholesterol level under control, enhance blood fat balance and also stop the clogging of arteries. It also promotes heart health by lowering blood pressure and reducing the risk of
                        heart disease. Enhances brain health Regular intake of blueberries helps in enhancing brain health by improving memory and lowering the risk of cognitive diseases like Parkinson’s. This flavonoid rich fruit slows reduces the risk of developing
                        cognitive diseases by a quarter compared to those who don’t consume blueberries.
                    </p>
                    <br />
                    <div class="Blogphoto">
                        <img className="blog1img" src={blueberry2} alt=""/>
                    </div>

                    <h2  className='Blogh2'>Rich in vitamins fibers and minerals</h2>
                    <br />
                    <p className='Blogp'> Vitamin, fiber and mineral rich fruit Blueberries are high in Vitamin C and minerals like iron. Its low sugar content and bioactive compounds eliminate the negative effects of sugar on our body. Consuming dry blueberries help in digestion and
                        prevents gut issues. Also dried blueberries are high in Vitamin K that plays an important role in bone health. Include a small portion of dried blueberry in your diet and cut down the risk of fractured bones by half!
                    </p>
                    <br />
                    <div class="Blogphoto">
                        <img className="blog1img" src={blueberry4} alt=""/>
                    </div>

                    <br />
                    <h2  className='Blogh2'>Slows Down Aging</h2>
                    <br />
                    <p className='Blogp'>
                        Keeps you looking young and beautiful Ingesting dry blueberries can keep your skin looking young. As they are rich in antioxidants, they prevent the damage and dullness caused to skin due to aging and helps neutralize free radicals.</p>
                    <br />
                    <div class="Blogphoto">
                        <img className="blog1img" src={blueberry5}alt=""/>
                    </div>

                    <p className='Blogp'>
                        So what are you waiting for? Buy dry blueberries online, sprinkle them on your oatmeal porridge or make a delicious fruit salad with it. Whatever way you choose to consume these delicious, goodness filled fruits, you will reap the miraculous benefits
                        of it! Say bye to your health blues with blueberries!
                    </p>
                </div>
            </div>
        </>
    )

}
export default Blog5