import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

import {fill} from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
    cloud: {
      cloudName: 'dylanvdcg'
    }
});

const Cld = () => {

const myImage = cld.image('featured/IMG_20201111_134738_dzygkn')
    return (
    <div>
      <AdvancedImage cldImg={myImage}></AdvancedImage>
    </div>
  )
}

export default Cld
