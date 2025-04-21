import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Food from "../images/Food1.PNG";
import Food2 from "../images/Food2.PNG";
import Food3 from "../images/Food3.PNG";
import Food6 from "../images/Food6.PNG";

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
    img: Food,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Food2,
    title: 'Burger',
  },
  {
    img: Food3,
    title: 'Camera',
  },

  {
    img: Food6,
    title: 'Honey',
    rows: 2,
    cols: 2,
    featured: true,
  }
];