import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function MediaCard({title, description, url="/", image}) {
  return (
    <Link to={url} style={{zIndex:1}}>
    <div className='transform transition duration-500 hover:scale-110'>
    <Card sx={{ 
        width: 345,
        borderWidth: 1,
        boxShadow: 0,
        borderColor: "#343434",
        height:375,
        marginBottom: 10,
        }}>
      <CardMedia
        sx={{ height: 250 }}
        image={`../../assets/${image}`}
        title="project"
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div" className='font-playfiar'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="font-opensans">
          {description}
        </Typography> */}
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-1">
          {description}
        </p>
      </CardContent>
      {/* <CardActions>
        <Button size="small" href={`${url}`}>View Project</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
    </Link>
  );
}