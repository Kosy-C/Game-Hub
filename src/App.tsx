import { useState } from 'react';

function App() {
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      {id: 1, title: 'product1', quantity: 1 },
      {id: 2, title: 'product2', quantity: 1 }
    ]
  })
  const handleClick = ()=>{
    setCart({...cart, items: cart.items.map(item=>item.id === 1 ? {...item, quantity: item.quantity + 1} : item)})
  }
  return (
    <div>

    </div>
  )
}

export default App
