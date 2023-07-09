import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActionData } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add, remove } from '../../store/cartSlice';

interface Item {
  id: number;
  title: string;
  image:string;
  category:string
  price:number;
}

const Cart: React.FunctionComponent = () => {
  const dispatch=useDispatch()
  const {posts}=useAppSelector(state=> state.cart)
  console.log("Cart", posts);

  const RemoveItem=(id:number)=>{
    dispatch(remove(id))
  }

  const cartItems=posts.map((item)=>(
    <div key={item.id} className='col-3 col-md-3 p-3'>
    <Card className='h-100' style={{ width: '16rem' }}>
      <div className='text-center'>
      <Card.Img style={{height:'150px', width:'120px'}} variant="top" src={item.image} />
      </div>
    
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      
      
      
    </Card.Body>
    <Card.Text>
        INR :{item.price}
      </Card.Text>
    <Card.Footer>
      <Button variant="primary" className='bg-danger' onClick={()=>RemoveItem(item.id)}>Remove</Button>
      </Card.Footer>
  </Card>
    
    </div>
  ))
  return (
    <>
    <h1>Cart Items</h1>
    {cartItems}
    </>
  );
};

export default Cart;
