import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('admin01'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('user01'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Pepperoni pizza',
      slug: 'pepperoni-1',
      category: 'Pepperoni',
      image: '/images/pizza.png',
      price: 10,
      brand: 'Pepperoni',
      rating: 4.5,
      numReviews: 4.5,
      countInStock: 20,
      description: 'A popular pizza is Pepperoni pizza',
      isFeatured: true,
      banner: '/images/pizza.png',
    },
  ],
}

export default data
