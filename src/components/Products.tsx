import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store/postSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../store/cartSlice';

type Item={
  id: number;
  title: string;
  image:string;
  category:string
  price:number;
}

const Products = () => {
  // const [data, setData]=useState([])
  const {posts}=useAppSelector((state)=> state.posts)
  const dispatch=useAppDispatch()
  
  useEffect(()=>{
    dispatch(fetchPosts())
    // console.log(posts)
    console.log(posts)
  },[])

  const BuyItem=(item:Item)=>{
    dispatch(add(item))

  }
  return (
    <div className='container '>
    <div className='row text-center'>
      {posts.map((item)=>(
        <div key={item.id} className='col-3 col-md-3 p-3 '>
        <Card className='h-100' style={{ width: '16rem' }}>
        <Card.Title className='mt-3' style={{textTransform:'uppercase', textDecoration:'underline'}}>{item.category}</Card.Title>
          <div className='text-center' >
          <Card.Img style={{height:'150px', width:'120px'}} variant="top" src={item.image} />
          </div>
        
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          
          
          
          
        </Card.Body>
        <Card.Text>
            INR :{item.price}
          </Card.Text>
        <Card.Footer>
          <Button variant="primary" onClick={()=>BuyItem(item)}>Buy Item</Button>
          </Card.Footer>
      </Card>
        
        </div>
      ))}
    </div>
    </div>
  )
}

export default Products