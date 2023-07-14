import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/postSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { add } from '../../store/cartSlice'
import Navba from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'

type Item = {
  id: number
  title: string
  image: string
  category: string
  price: number
}

const Products = () => {
  const [cart, setCart] = useState<Item[]>([])
  const { posts } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()
  const history=useNavigate()

  useEffect(() => {
    dispatch(fetchPosts())
    console.log(posts)
  }, [dispatch])

  const BuyItem = (item: Item) => {
    dispatch(add(item))
    // alert('Added to cart')
    setCart((prevItem) => [...prevItem, item])
  }

  const navigateCart=()=>{
    history('/cart')
  }

  return (
    <>
      <Navba />

      <div className="container ">
        <div className="row text-center">
          {posts.map((item) => (
            <div key={item.id} className="col-3 col-md-3 p-3 ">
              <Card className="h-100" style={{ width: '16rem' }}>
                <Card.Title
                  className="mt-3"
                  style={{
                    textTransform: 'uppercase',
                    textDecoration: 'underline',
                  }}
                >
                  {item.category}
                </Card.Title>
                <div className="text-center">
                  <Card.Img
                    style={{ height: '150px', width: '120px' }}
                    variant="top"
                    src={item.image}
                  />
                </div>

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <Card.Text>INR :{item.price}</Card.Text>
                <Card.Footer>
                  {cart.find((cartItem) => cartItem.id === item.id) ? (
                    <Button variant="success" onClick={navigateCart}>
                     View Cart
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={() => BuyItem(item)}>
                      Add to Cart
                    </Button>
                  )}
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
