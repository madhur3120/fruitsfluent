import React from 'react'
import "./blog1.css"
import medjool1 from "./blogimages/medjool1.jpg"
import medjool3 from "./blogimages/medjool3.jpg"
import medjool2 from "./blogimages/medjool2.jpg"
import medjool4 from "./blogimages/medjool4.jpg" 

const Blog2 = () => {
    return (
        <>
            <div className='blogbody'>
                <div className="blog">
                    <h1 className='Blogh1'>Medjool:"King of Fruits and the Fruit of Kings"</h1>
                    <br />
                    <br />

                    <div className="Blogphoto">
                        <img className="blog1img" src={medjool1} alt="" />
                    </div>
                    <br />
                    <p className='Blogp'>
                        Medjool confused right ? It is not a normal date, It’s not Coconut Tree, It’s a Palm Tree. It’s not a farm, it’s a grove. Growers call it “The labour of love” because this labour takes 7 long years to bear fruit. But the outcome is truly an Opulence.
                        Popularly known as “King of Fruits and the Fruit of Kings”, Medjool is soft, deep amber coloured, shimery, fleshy and extremely tasty. Comparatively bigger in size and packed with lot of nutrition, Medjool is one healthy date recommended for
                        multiple reasons.
                    </p>
                    <br />
                    <h2 className='Blogh2'>A perfect replacement for your hunger pangs and instant energy booster:</h2>
                    <br />
                    <p className='Blogp'>
                        If you find yourself hungry in between meals or have been looking for snack to boost your energy levels instantly, then Medjool is one of the healthiest choice. The natural sugar Glucose and Fructose present in Medjool is quickly absorbed by the body
                        and the energy level is seen increasing. It is also used as a pre- workout snack or a supplement for caffeine.
                    </p>
                    <br />

                    <h2 className='Blogh2'> Lower Risk of Heart Disease</h2>
                    <br />
                    <p className='Blogp'>
                        Medjool dates’ soluble fiber content lowers bad (LDL) cholesterol. Fiber binds with this cholesterol and prevents its absorption into your bloodstream. This keeps cholesterol’s fatty deposits from building up in your arteries, which reduces the risk of
                        heart disease. Studies have shown that soluble fiber may also help control blood sugar levels and reduce blood pressure. Research has found that the antioxidants in Medjool dates may reduce triglycerides, a fat found in your blood. High levels
                        of triglycerides can increase your risk of heart disease.
                    </p>
                    <br />
                    <div className="Blogphoto">
                        <img className="blog1img" src={medjool3} alt="" />
                    </div>
                    <br />
                    <h2 className='Blogh2'> Digestive Function</h2>
                    <br />
                    <p className='Blogp'>
                        Medjool dates also contain insoluble fiber, which is essential for healthy digestion. Eating enough insoluble fiber helps to prevent constipation and inflammation in the digestive tract. One study also found that insoluble fiber may help prevent colorectal
                        cancer, but more research is needed.
                    </p>
                    <br />
                    <div className="Blogphoto">
                        <img className="blog1img" src={medjool2} alt="" />
                    </div>

                    <h2 className='Blogh2'> Improved Metabolism</h2>
                    <br />
                    <p className='Blogp'>
                        The B vitamins in Medjool dates like pantothenic acid, folate, and niacin help manage the metabolic processes that convert food to energy. Research shows this can help to fight tiredness and fatigue. Studies have also shown that dates may reduce sugar
                        absorption in our bodies. This can help lower blood sugar levels, which can aid in weight management and reduce the risk of diabetes.
                    </p>
                    <br />

                    <h2 className='Blogh2'> Highly Nutritious and Super food:</h2>
                    <br />
                    <p className='Blogp'>
                        Rich is Potassium, Proteins, Copper, Manganese and Iron, Medjool is rich in nutrients and minerals .Potassium reduces the risk of strokes, and also helps in growth of nervous system. High fibre levels is recommended for better digestive health and addresses
                        issues of Constipation. Proteins in Medjool helps in muscular development and weight gain.Calcium, Magnesium, Manganese and copper works miracle on bone health. For the ones suffering from deficiency of iron in the body and blood related issues
                        can consume Medjool as it is loaded with Iron.
                    </p>
                    <br />

                    <h2 className='Blogh2'>A perfect replacement for Sugar:</h2>
                    <br />
                    <div className="Blogphoto">
                        <img className="blog1img" src={medjool4} alt="" />
                    </div>
                    <p className='Blogp'>
                        Medjool is a perfect replacement for sugar. One can add this into milk shakes, smoothies, salads, purees, baking purpose and can also be consumed along with breakfast cereals.
                    </p>
                    <br />

                    <h2 className='Blogh2'>What is missing?</h2>
                    <br />
                    <p className='Blogp'>
                        Medjool is sodium and cholesterol free. Also this fruit doesn’t undergo any processing before it hits the market. It’s directly fetched from the groves and provided to the masses because it’s rich in all perspectives and doesn’t need any kind of processing.
                        Hence 100% natural, healthy, nutritious and rich.
                    </p>
                </div>
            </div>
        </>
    )

}
export default Blog2