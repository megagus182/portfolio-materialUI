import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import game from "../images/Game1.PNG";
import game2 from "../images/Game2.PNG";
import game3 from "../images/Game3.PNG";
import game5 from "../images/Game5.PNG";
import game8 from "../images/Game8.PNG";
import game9 from "../images/Game9.PNG";

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
    img: game,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: game2,
    title: 'Burger',
  },
  {
    img: game9,
    title: 'Camera',
  },
  {
    img: game5,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: game8,
    title: 'Hats',
    cols: 2,
  },
  {
    img: game3,
    title: 'Honey',
    rows: 2,
    cols: 2,
    featured: true,
  }
];