import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useData } from '../contextFolder/dataContext';
import { useNavigate } from 'react-router-dom';
import CustomChip from '../uicomponents/avatarchip';
const images = [
    {
      url: 'https://www.thebrokebackpacker.com/wp-content/uploads/2019/02/National-Museum-Delhi.jpg',
      childurl:'https://whitepages.in/museum/nationalmuseum/national-museum-new-delhi-windows.jpg',
      title: 'National Museum, New Delhi',
      width: '33.3%',
      desc:`The National Museum in New Delhi, founded in 1949, is a prestigious institution that preserves and displays India's diverse cultural heritage.
      t plays a vital role in preserving and promoting India's heritage, offering an enriching experience for history enthusiasts, art lovers, and curious travelers, deepening their understanding of the country's multifaceted culture and history.Some of the most popular exhibits include Dancing Girl (sculpture),Ivory Carved Dashavtar,Ivory carved tusk depicting Buddha life stories,Jade collection,Akota Bronzes,Carved wood vahanas.`
    },
    {
      url: 'https://i.pinimg.com/originals/00/15/30/001530f641671b481d1511bf6ef9e3a6.jpg',
      childurl:'https://historyfinder.in/wp-content/uploads/2022/12/image-9.png',
      title: 'Indian Museum,Kolkata',
      width: '33.3%',
      desc:`The Indian Museum ( Imperial Museum of Calcutta) is the ninth oldest museum in the world and the oldest and largest museum in India as well as in Asia. The Indian Museum offers visitors an enriching exploration of India's history, art, and culture. Its well-curated exhibitions and informative signage create an engaging and educational experience suitable for visitors of all ages, making it a must-visit destination for those seeking to immerse themselves in India's cultural heritage.Some of the most popular collections in the Indian Museum are Lion Capital of Ashoka,Huge skeleton of a dinosaur,Buddha Preaching in Tushita Heaven and Showcases with different types of fossils.`
    },
    {
      url: 'https://lh6.googleusercontent.com/-p1ntwID9WL8/TWtOEASquCI/AAAAAAAAQOU/N9C89FAW_lY/s1600/museum11.jpg',
      childurl:'https://farm2.staticflickr.com/1223/5110460108_67a4925e70_z.jpg',
      title: 'Egmore Museum,Chennai',
      width: '33.3%',
      desc:`The Chennai Egmore Museum, founded in 1857 as the Madras Museum, stands as one of India's oldest and most revered cultural institutions. It was subsequently renamed the Government Museum. The museum provides an enriching and serene environment for visitors, making it an ideal place to spend a few hours exploring the past.The Museum has rich collections such as Sculpture of Vishnu in bronze from the Chola period,
      Sculpture of Bhadrakali in bronze from the 14th century CE,
      Sculpture of Dakshinamurthi from the Chola period, 12th century CE,
      Sculpture of Mahishasuramardini in bronze from the Chola period, 11th century CE,
      Tribal artifacts from Assam.      `
    },
    {
      url: 'https://imgcld.yatra.com/ytimages/image/upload/v1439894732/Jaipur_218.jpg',
      childurl:'https://i.pinimg.com/originals/4c/a9/91/4ca991a3de63dae389fc6ea827acfd01.jpg',
      title: 'Albert Hall,Jaipur',
      width: '33.3%',
      desc:`Albert Hall Museum, an iconic Jaipur landmark, is a testament to India's cultural heritage. With its grand architecture, diverse exhibits, and cultural significance, it's a must-visit for those exploring Rajasthan's rich history and artistry.Beyond being a repository of history, the Albert Hall Museum also serves as a vibrant cultural hub. It hosts various events, exhibitions, and cultural performances, making it a living testament to Jaipur's artistic and cultural legacy.The museum has a rich collection of artifacts including paintings, jewelry, carpets, ivory, stone, metal sculptures, and works in crystal. The collection includes coins from the Gupta, Kushan, Delhi Sultanate, Mughal and British periods. It also has a collection of musical instruments, textiles, and arms and armour.`
    },
    {
      url: 'https://andareincentives.com/wp-content/uploads/2020/12/Chhatrapati-Shivaji-Maharaj-Vastu-Sangrahalaya-or-Prince-of-Wales-Museum-in-Mumbai-India.jpg',
      childurl:'https://th.bing.com/th/id/R.077df616141d6552550c23fc8a7b96ca?rik=IQ4X%2bu7RIr56Pg&riu=http%3a%2f%2fcdn.allrefer.com%2fimages%2f2015%2f07%2fthe-gallery-of-sculptures-700x467.jpg&ehk=yJ6Rof7FDoc47yMjI7Epv8j%2fqAXQdOXaFSadTc3PPHs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
      title: 'Price Of Wales Museum,Mumbai',
      width: '33.3%',
      desc:`The Prince of Wales Museum, now named Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, is a living testament to India's diverse heritage, not merely an artifact repository. Its historical importance, stunning Indo-Saracenic architecture by George Wittet, and comprehensive collections make it a must-visit for those exploring India's cultural richness. Established in 1922, it was later renamed in 1998 to honor Chhatrapati Shivaji Maharaj.The collection of the museum is categorised primarily into three sections: art, archaeology and natural history.The library has over 50,000 books and journals, and the archives have over 100,000 photographs, documents, and other materials.`
    },
    {
      url: 'https://photos.wikimapia.org/p/00/02/94/57/98_full.jpg',
      childurl:'https://sothebys-com.brightspotcdn.com/dims4/default/8c72375/2147483647/strip/true/crop/4368x2912+0+0/resize/2880x1920!/quality/90/?url=https:%2F%2Fsothebys.brightspotcdn.com%2Fb7%2F68%2F504560fe4c298a73510baf5f351c%2Findustrial-arts-gallery-dr.%20Bhau%20Daji%20Lad%20Mumbai%20City%20Museum.jpg',
      title: 'Dr Bhau Daji Lad, Mumbai',
      width: '33.3%',
      desc:`The Dr. Bhau Daji Lad Museum, formerly the Victoria and Albert Museum, is a cultural cornerstone of Mumbai, honoring the city's history and heritage. Established in 1855 and named after Dr. Bhau Daji Lad,who was an Indian Physician, Sanskrit scholar and an antiquarian.The Museum has rich collections such as models of the earliest boats in the city's harbour, the first textile mills in Worli and a diorama of Bombay Castle, the administrative headquarters at the heart of the British Fort. The Museum's collection of glass negatives is a visual record of 19th century Mumbai.
`
    },
    {
      url: 'https://lh6.googleusercontent.com/-p1ntwID9WL8/TWtOEASquCI/AAAAAAAAQOU/N9C89FAW_lY/s1600/museum11.jpg',
      childurl:'https://farm2.staticflickr.com/1223/5110460108_67a4925e70_z.jpg',
      title: 'Egmore Museum-Chennai',
      width: '33.3%',
      desc:`The Chennai Egmore Museum, founded in 1857 as the Madras Museum, stands as one of India's oldest and most revered cultural institutions. It was subsequently renamed the Government Museum. The museum provides an enriching and serene environment for visitors, making it an ideal place to spend a few hours exploring the past.The Museum has rich collections such as Sculpture of Vishnu in bronze from the Chola period,
      Sculpture of Bhadrakali in bronze from the 14th century CE,
      Sculpture of Dakshinamurthi from the Chola period, 12th century CE,
      Sculpture of Mahishasuramardini in bronze from the Chola period, 11th century CE,
      Tribal artifacts from Assam.      `
    },
    {
      url: 'https://imgcld.yatra.com/ytimages/image/upload/v1439894732/Jaipur_218.jpg',
      childurl:'https://i.pinimg.com/originals/4c/a9/91/4ca991a3de63dae389fc6ea827acfd01.jpg',
      title: 'Albert Hall-Jaipur',
      width: '33.3%',
      desc:`Albert Hall Museum, an iconic Jaipur landmark, is a testament to India's cultural heritage. With its grand architecture, diverse exhibits, and cultural significance, it's a must-visit for those exploring Rajasthan's rich history and artistry.Beyond being a repository of history, the Albert Hall Museum also serves as a vibrant cultural hub. It hosts various events, exhibitions, and cultural performances, making it a living testament to Jaipur's artistic and cultural legacy.The museum has a rich collection of artifacts including paintings, jewelry, carpets, ivory, stone, metal sculptures, and works in crystal. The collection includes coins from the Gupta, Kushan, Delhi Sultanate, Mughal and British periods. It also has a collection of musical instruments, textiles, and arms and armour.`
    },
    {
      url: 'https://andareincentives.com/wp-content/uploads/2020/12/Chhatrapati-Shivaji-Maharaj-Vastu-Sangrahalaya-or-Prince-of-Wales-Museum-in-Mumbai-India.jpg',
      childurl:'https://th.bing.com/th/id/R.077df616141d6552550c23fc8a7b96ca?rik=IQ4X%2bu7RIr56Pg&riu=http%3a%2f%2fcdn.allrefer.com%2fimages%2f2015%2f07%2fthe-gallery-of-sculptures-700x467.jpg&ehk=yJ6Rof7FDoc47yMjI7Epv8j%2fqAXQdOXaFSadTc3PPHs%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
      title: 'Price Of Wales Museum-Mumbai',
      width: '33.3%',
      desc:`The Prince of Wales Museum, now named Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, is a living testament to India's diverse heritage, not merely an artifact repository. Its historical importance, stunning Indo-Saracenic architecture by George Wittet, and comprehensive collections make it a must-visit for those exploring India's cultural richness. Established in 1922, it was later renamed in 1998 to honor Chhatrapati Shivaji Maharaj.The collection of the museum is categorised primarily into three sections: art, archaeology and natural history.The library has over 50,000 books and journals, and the archives have over 100,000 photographs, documents, and other materials.`
    },

  ];
  

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Explore() {
  const navigate = useNavigate();
  const {setUrl,setMname,setDesc}=useData();


  const handleMuseum = (museum,msrc,mdesc) => {
   navigate('/explore/museum')
   console.log(museum,msrc)
   setUrl(msrc)
   setMname(museum)
   setDesc(mdesc)
  };
  return (
  <div className='museum-container'>
   <div className='chipos'> <CustomChip/></div>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
       
       {images.map((image) => (
         <ImageButton
           focusRipple
           key={image.title}
           style={{
             width: image.width,
             height:255,
           }}
           className='mobile-imgbtn'
           onClick={() => handleMuseum(image.title,image.childurl,image.desc)}
         >
           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
           <ImageBackdrop className="MuiImageBackdrop-root" />
           <Image>
             <Typography
               component="span"
               variant="subtitle1"
               color="inherit"
               sx={{
                 position: 'relative',
                 p: 4,
                 pt: 2,
                 pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
               }}
             >
               {image.title}
               <ImageMarked className="MuiImageMarked-root" />
             </Typography>
           </Image>
         </ImageButton>
       ))}
     </Box>
  </div>
  );
}