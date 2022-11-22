import React, { useState, useEffect } from 'react';
import {
  Photos,
  Mural,
  MuralBtn,
  Photo,
  Image,
} from './PhotoMural.style';

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

function PhotoMural({ photos, title }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const restoreMuralIndex = () => {
    if (photoIndex > (photos.length - 1)) {
      setPhotoIndex(0);   
    } if (photoIndex < 0) {
      setPhotoIndex(photos.length - 1);
    }
  };

  const muralNavigate = (direction) => {
    if (direction) {
      setPhotoIndex(photoIndex + 1);   
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  useEffect(() => {
    restoreMuralIndex(photoIndex);
  }, [photoIndex]);

        return (
            <Photos>
                <Mural>
                    <MuralBtn onClick={ () => muralNavigate(false) }>
                        <BsArrowLeftShort />       
                    </MuralBtn>

                    <Photo>
                        <Image
                          src={ photos[photoIndex] }
                          alt={ title } />
                    </Photo>

                    <MuralBtn onClick={ () => muralNavigate(true) }>
                        <BsArrowRightShort />       
                    </MuralBtn>
                </Mural>
            </Photos>
        );   
};

export default PhotoMural
