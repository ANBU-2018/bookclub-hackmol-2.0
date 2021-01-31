import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Book } from '../redux/action';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({Bookname}) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const transfer=async()=>{
        dispatch(Book(Bookname))
    }
    const [Details, setDetails] = useState([])
    useEffect(() => {
        async function bookDetail(){
            const response=await fetch(`http://localhost:9000/book?bookName=${Bookname}`,{
                method:"GET"
            })
            const {data}=await response.json()
            setDetails(data);
            console.log(data)
        }
        bookDetail();
    },[])

  return (
    <div>
    {Object.keys(Details).map((keys)=>{
        return(
        <Card className={classes.root} style={{width:"300px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Bookname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Details[0].description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/books/${Bookname}`} onClick={transfer} ><Button  size="medium" color="primary">
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>)
    })}
    </div>
  );
}