const menu = [
  { name: 'burger', category: 'fast food' },
  { name: 'pizza', category: 'fast food' },
  { name: 'sushi', category: 'japanese' },
  { name: 'ramen', category: 'japanese' },
  { name: 'tacos', category: 'mexican' }, 
  { name: 'burrito', category: 'mexican' },
  { name: 'salad', category: 'healthy' },
  { name: 'smoothie', category: 'healthy' },
  { name: 'fries', category: 'fast food' },
  { name: 'chicken', category: 'fast food' },
  { name: 'pasta', category: 'italian' },
  { name: 'risotto', category: 'italian' },
  { name: 'salmon', category: 'seafood' },
  { name: 'lobster', category: 'seafood' },
  { name: 'ice cream', category: 'dessert' },
]

const items = menu.map((item) => item.category);

// console.log(items);
const uniqueItems = ['all', ...new Set(items)];
// console.log(`unique items: ${uniqueItems}`);