import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Art1 from "../images/Art1.PNG";
import Art2 from "../images/Art2.PNG";
import Art3 from "../images/Art3.PNG";
import Art4 from "../images/Art4.PNG";

export default function TitlebarImageList() {
  return (
    <ImageList variant="masonry" cols={2} gap={8}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
      <ImageListItemBar position="below" title={item.author} />
    </ImageListItem>
  ))}
</ImageList>
  );
}

const itemData = [
  {
    img: Art1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Art2,
    title: 'Burger',
  },
  {
    img: Art3,
    title: 'Camera',
  },

  {
    img: Art4,
    title: 'Honey',
    rows: 2,
    cols: 2,
    featured: true,
  }
];