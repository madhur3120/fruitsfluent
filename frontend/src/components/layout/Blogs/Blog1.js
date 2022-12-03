import React from 'react'
import "./blog1.css"
import walnutsb15 from "./blogimages/walnutsb15.jpg"
import almondb1 from "./blogimages/almondb1.jpg"
import berriesb13 from "./blogimages/berriesb13.jpg"
import pistab12 from "./blogimages/pistab12.jpg"
import apricotb11 from "./blogimages/apricotb11.jpg"

const  Blog1= () => {
  return (
   <>
   <div className='blogbody'>
    <div className="blog">
        <h1 className='Blogh1'>Complete list of dry fruits for diabetes</h1>
        <br/>
        <br/>
        <p className='Blogp'> Fruits, or, more commonly known as Dry Fruits, known for their wholesome values, really long shelf life, and great taste, have been in use since the Mesopotamia Civilization. Owing to their origins from the fruit family, however, there is a common
            diabetic misconception that, dry fruits for diabetic patients, is extremely harmful and should be avoided. Science today has enough material to prove that, if one has the right list of dry fruits for diabetics to eat in right quantities, it
            can actually help in controlling diabetes.
        </p>
        <br/>
        <br/>

        <h2 className='Blogh2'> What Are Dry Fruits?</h2>
        <br/>
        <p className='Blogp'>As the name suggests, dry fruits are fruits (and nuts) from which majority of the natural water is taken out, either using Sun’s natural heat (Natural Process) or using specialized tumblers to dry them quickly (called Dehydrators). Owing to the
            dehydration process, these fruits enjoy a naturally long shelf life and a very high concentration of Sugar. Also, these fruits, which either carry seeds or, are sometimes the seeds themselves that give life to plants, are a vibrant source
            of nutrients which benefit humans as well.
        </p>
        <br/>
        <br/>
        <h2 className='Blogh2'>What Is Diabetes?</h2>
        <br/>
        <p className='Blogp'> Diabetes is a disease when the blood glucose level in one’s body goes too high. This could occur
            <ul className='Blogul'>
                <li className='Blogli'>When the insulin secretion by the pancreas is not adequate to help these sugars from food get absorbed into cells to give energy to the body. This is also called the Type 1 Diabetes</li>
                <li className='Blogli'>When the pancreas does its work, however, the body itself is not able to process blood sugar. This is the standard occurrence of diabetes, also called Type 2 Diabetes</li>
                Another way of diabetes affects women during the time of their pregnancies only, called Gestational Diabetes
            </ul>
        </p>
        <br/>
        <br/>


        <h2 className='Blogh2'> How Can Dry Fruits Help Diabetic Patients?</h2>
        <br/>
        <p className='Blogp'> Dry fruits are extremely rich sources of fibers, Vitamins, Minerals, and Antioxidants. Also, the majority of dry fruits also have a low to medium level Glycemic Index (GI). This makes a majority of them to feature in the list of dry fruits for
            people with diabetes to eat. Also, know the foods that you can eat and is bread good for diabetes.Some of the benefits include
            <ul className='Blogul'>
                <li className='Blogli'>Being rich in fiber, dry fruits help in reducing the need to eat regularly, thus reducing the risk of overeating and binge eating of unhealthy food.</li>
                <li className='Blogli'>Dry fruits are packed with Vitamins and antioxidants, providing the human body with nutrients that help in functioning better.</li>
                <li className='Blogli'>Some studies even show that a small portion of nuts (also referred to as super foods) after lunch helps the body to retain the energy faster and keep one active to work.</li>
                <li className='Blogli'>Exercise is an integral part of controlling diabetes. Dry Fruits can help provide the energy to the patients in the morning so that the body can be motivated to take that extra effort.</li>
            </ul>
        </p>
        <br/>

        <p className='Blogp'>Science has shown that any dry fruit made out of soft fruits are generally great for Diabetic patients as they are high in fiber and low in GI. While Diabetes can consume the majority of dry fruits, some of the most common once are listed below
            with their benefits
        </p>
        <br/>

        <h3 className='Blogh3'>Walnuts</h3>
        <br/>
        <div class="Blogphoto">
            <img className="blog1img" src={walnutsb15} alt=""/>
        </div>

        <p className='Blogp'>A great source of Fibre, good fats, and proteins, walnuts can potentially prevent one from binging on unnecessary food. This not only helps in controlling hunger, thus helping with weight-loss, walnuts are also a great source of alpha-lipoic acid
            (ALA). This helps reduce inflammation, thus helping with managing diabetes and, in some cases, even Alzheimer’s disease.
        </p>
        <br/>

        <h3 className='Blogh3'>Almonds</h3>
        <br/>
        <div class="Blogphoto">
            <img className="blog1img" src={almondb1} alt=""/>
       </div>
        <p className='Blogp'>
            One of the greatest sources of fiber, almonds help keep a good digestive system, helping control blood sugar levels. An excellent source of magnesium, almonds also help in improving the quality of bones, muscles and nerve functioning and helps with blood
            pressure as well.
        </p>
        <br/>


        <h3 className='Blogh3'>Berries</h3>
        <br/>
        <div class="Blogphoto">
            <img className="blog1img"src={berriesb13} alt=""/>
        </div>
        <p className='Blogp'>
            Excellent source of fiber and antioxidants, berries are considered to be an excellent super food for diabetes. Just add them to non-fat yogurt, and they make an excellent dessert for people with diabetes, provided the urge to gobble these tempting cuties
            as is.
        </p>
        <br/>


        <h3 className='Blogh3'>Pistachios</h3>
        <br/>
        <div class="Blogphoto">
            <img className="blog1img" src={pistab12} alt=""/>
        </div>
        <p className='Blogp'>
            Another source for fiber, pistachios can be used as dressing over salads and soups. They also make an excellent substitute to breadcrumbs on roasted meats. The mother of a plant, these seeds are a naturally power-packed ingredient. With enough nutrients
            to provide life to plants and trees, even after many years, these seeds can be used either directly in the morning with your cereals, or as dessert ingredients with non-fat yogurt. These nutrient bundles can also be consumed as power bars
            or energy bars to help as evening snack between two meals.
        </p>
        <br/>


        <h3 className='Blogh3'>Apricots,Dried Apples, Prunes</h3>
        <br/>
        <div class="Blogphoto">
            <img  className="blog1img" src={apricotb11} alt=""/>
        </div>
        <p className='Blogp'>
            Rich in minerals and vitamins, together with fiber, these natural foods are great substitute to add some flavor to food without adding additional sugars.
        </p>


    </div>
    </div>
   </>
  )
}

export default  Blog1
