
// //task 1 src/App.jsx

// import React from 'react'; 
// import './App.css';
// const StudentCard = ({ name, rollNo, batch, favLang, theme = 'light' }) => {
//   return (
//     <div className={`theme-card ${theme} rounded-lg shadow-lg p-6 m-4 transition-all duration-300`}>
//       <h3 className="text-xl font-bold mb-2">{name}</h3>
//       <p className="text-gray-600 dark:text-gray-300">Roll No: {rollNo}</p>
//       <p className="text-gray-600 dark:text-gray-300">Batch: {batch}</p>
//       <p className="text-gray-600 dark:text-gray-300">Favorite Language: {favLang}</p>
//       <div className="mt-3">
//         <span className={`inline-block px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-blue-700' : 'bg-blue-100 text-blue-800'}`}>
//           {theme} theme
//         </span>
//       </div>
//     </div>
//   );
// };

// function Task1() {
//   const students = [
//     { name: 'Ali Khan', rollNo: '2023001', batch: '2023', favLang: 'JavaScript' },
//     { name: 'Sara Ahmed', rollNo: '2023002', batch: '2023', favLang: 'Python' },
//     { name: 'Usman Riaz', rollNo: '2023003', batch: '2023', favLang: 'React' },
//     { name: 'Fatima Malik', rollNo: '2023004', batch: '2023', favLang: 'TypeScript' },
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Task 1: Student Cards</h1>
//       <div className="flex flex-wrap justify-center">
//         {students.map((student, index) => (
//           <StudentCard 
//             key={student.rollNo} 
//             {...student} 
//             theme={index % 2 === 0 ? 'light' : 'dark'}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Task1;


//task 2 src/App.jsx

// import React, { useState } from 'react';

// function Task2() {
//   const [count, setCount] = useState(0);
//   const [emoji, setEmoji] = useState('😊');

//   const emojis = ['😊', '😂', '🎉', '❤️', '🔥', '⭐', '🚀', '💻'];

//   const increment = () => {
//     setCount(count + 1);
//     if (count % 3 === 0) {
//       setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
//     }
//   };

//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   const reset = () => {
//     setCount(0);
//     setEmoji('😊');
//   };

//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-3xl font-bold mb-6">Task 2: Emoji Counter Game</h1>
      
//       <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-auto">
//         <div className="text-8xl mb-6">{emoji}</div>
        
//         <div className="text-6xl font-bold mb-8">
//           Count: {count}
//         </div>

//         {count >= 10 && (
//           <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded">
//             <p className="font-bold">🎉 Achievement Unlocked!</p>
//             <p>You reached {count} clicks!</p>
//           </div>
//         )}

//         <div className="flex justify-center space-x-4 mb-8">
//           <button 
//             onClick={decrement}
//             className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
//           >
//             Decrease
//           </button>
          
//           <button 
//             onClick={reset}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
//           >
//             Reset
//           </button>
          
//           <button 
//             onClick={increment}
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
//           >
//             Increase
//           </button>
//         </div>

//         <div className="text-gray-600">
//           <p>Try to reach 10 for a special message!</p>
//           <p className="text-sm mt-2">Emoji changes every 3 clicks</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Task2;




//task 3 src/App.jsx


// import React, { useState } from 'react';

// function Task3() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });
  
//   const [submittedData, setSubmittedData] = useState(null);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: ''
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
    
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const formErrors = validateForm();
    
//     if (Object.keys(formErrors).length === 0) {
//       setSubmittedData(formData);
//       setFormData({ name: '', email: '', password: '' });
//       setErrors({});
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   const isFormValid = formData.name && formData.email && formData.password && 
//                       formData.password.length >= 6;

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">Task 3: Signup Form</h1>
      
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Full Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={formData.name}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
//               placeholder="Enter your name"
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email Address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
//               placeholder="Enter your email"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`}
//               placeholder="Enter your password"
//             />
//             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//             <p className="text-gray-500 text-sm mt-1">Minimum 6 characters</p>
//           </div>

//           <button
//             type="submit"
//             disabled={!isFormValid}
//             className={`w-full py-3 px-4 rounded-lg font-bold transition duration-300 ${isFormValid ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
//           >
//             Sign Up
//           </button>
//         </form>

//         {submittedData && (
//           <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
//             <h2 className="text-xl font-bold text-green-800 mb-3">✅ Form Submitted Successfully!</h2>
//             <div className="bg-white p-4 rounded">
//               <h3 className="font-bold text-gray-700 mb-2">Submitted Data:</h3>
//               <pre className="bg-gray-100 p-4 rounded overflow-auto">
//                 {JSON.stringify(submittedData, null, 2)}
//               </pre>
//             </div>
//             <button
//               onClick={() => setSubmittedData(null)}
//               className="mt-4 text-blue-600 hover:text-blue-800"
//             >
//               Clear Results
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Task3;



//task 4 src/App.jsx


// import React, { useState } from 'react';

// function Task4() {
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Learn React', completed: true },
//     { id: 2, text: 'Build a Todo App', completed: false },
//     { id: 3, text: 'Master React Hooks', completed: false }
//   ]);
  
//   const [newTodo, setNewTodo] = useState('');
//   const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

//   const addTodo = () => {
//     if (newTodo.trim() === '') {
//       alert('Please enter a task!');
//       return;
//     }
    
//     const newTask = {
//       id: Date.now(),
//       text: newTodo,
//       completed: false
//     };
    
//     setTodos([...todos, newTask]);
//     setNewTodo('');
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const toggleTodo = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };

//   const clearCompleted = () => {
//     setTodos(todos.filter(todo => !todo.completed));
//   };

//   const filteredTodos = todos.filter(todo => {
//     if (filter === 'active') return !todo.completed;
//     if (filter === 'completed') return todo.completed;
//     return true;
//   });

//   const totalTodos = todos.length;
//   const completedTodos = todos.filter(todo => todo.completed).length;
//   const activeTodos = totalTodos - completedTodos;

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">Task 4: Todo App</h1>
      
//       <div className="bg-white rounded-xl shadow-lg p-8">
//         {/* Add Todo Section */}
//         <div className="mb-8">
//           <div className="flex gap-2">
//             <input
//               type="text"
//               value={newTodo}
//               onChange={(e) => setNewTodo(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && addTodo()}
//               placeholder="Add a new task..."
//               className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//             />
//             <button
//               onClick={addTodo}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
//             >
//               Add Task
//             </button>
//           </div>
//           <p className="text-sm text-gray-500 mt-2">
//             Press Enter or click Add to submit
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-4 mb-6">
//           <div className="bg-blue-50 p-4 rounded-lg text-center">
//             <p className="text-2xl font-bold text-blue-600">{totalTodos}</p>
//             <p className="text-gray-600">Total Tasks</p>
//           </div>
//           <div className="bg-green-50 p-4 rounded-lg text-center">
//             <p className="text-2xl font-bold text-green-600">{activeTodos}</p>
//             <p className="text-gray-600">Active</p>
//           </div>
//           <div className="bg-purple-50 p-4 rounded-lg text-center">
//             <p className="text-2xl font-bold text-purple-600">{completedTodos}</p>
//             <p className="text-gray-600">Completed</p>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex gap-2 mb-6">
//           <button
//             onClick={() => setFilter('all')}
//             className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//           >
//             All ({totalTodos})
//           </button>
//           <button
//             onClick={() => setFilter('active')}
//             className={`px-4 py-2 rounded-lg ${filter === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//           >
//             Active ({activeTodos})
//           </button>
//           <button
//             onClick={() => setFilter('completed')}
//             className={`px-4 py-2 rounded-lg ${filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//           >
//             Completed ({completedTodos})
//           </button>
//         </div>

//         {/* Todo List */}
//         <div className="mb-8">
//           {filteredTodos.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <p className="text-lg">No tasks found for this filter.</p>
//             </div>
//           ) : (
//             <ul className="space-y-3">
//               {filteredTodos.map(todo => (
//                 <li
//                   key={todo.id}
//                   className={`flex items-center justify-between p-4 rounded-lg border ${todo.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <input
//                       type="checkbox"
//                       checked={todo.completed}
//                       onChange={() => toggleTodo(todo.id)}
//                       className="h-5 w-5 rounded"
//                     />
//                     <span
//                       className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
//                     >
//                       {todo.text}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => deleteTodo(todo.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     🗑️ Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Clear Completed Button */}
//         {completedTodos > 0 && (
//           <div className="text-center">
//             <button
//               onClick={clearCompleted}
//               className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
//             >
//               Clear Completed ({completedTodos})
//             </button>
//           </div>
//         )}

//         <div className="mt-8 pt-6 border-t border-gray-200">
//           <h3 className="font-bold text-gray-700 mb-2">Rules:</h3>
//           <ul className="list-disc pl-5 text-gray-600 space-y-1">
//             <li>Cannot submit empty tasks</li>
//             <li>Mark tasks as completed</li>
//             <li>Delete unwanted tasks</li>
//             <li>Filter tasks by status</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Task4;





//task 5 src/App.jsx

// import React from 'react';

// // Layout Components
// const Layout = ({ children, className = '' }) => {
//   return (
//     <div className={`min-h-screen flex flex-col ${className}`}>
//       {children}
//     </div>
//   );
// };

// const Header = ({ children }) => {
//   return (
//     <header className="bg-blue-600 text-white p-4 shadow-lg">
//       <div className="container mx-auto">
//         {children}
//       </div>
//     </header>
//   );
// };

// const Sidebar = ({ children }) => {
//   return (
//     <aside className="bg-gray-800 text-white w-64 min-h-full p-6">
//       {children}
//     </aside>
//   );
// };

// const Main = ({ children }) => {
//   return (
//     <main className="flex-1 p-6">
//       <div className="container mx-auto">
//         {children}
//       </div>
//     </main>
//   );
// };

// const Footer = ({ children }) => {
//   return (
//     <footer className="bg-gray-900 text-white p-4 mt-auto">
//       <div className="container mx-auto">
//         {children}
//       </div>
//     </footer>
//   );
// };

// // Content Components
// const UserProfile = () => (
//   <div className="bg-white p-4 rounded-lg shadow mb-6">
//     <h3 className="font-bold text-lg mb-2">User Profile</h3>
//     <p>Welcome back, Talal!</p>
//   </div>
// );

// const DashboardStats = () => (
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//     {['Total Users', 'Revenue', 'Growth'].map((stat, idx) => (
//       <div key={idx} className="bg-white p-4 rounded-lg shadow">
//         <h4 className="font-bold">{stat}</h4>
//         <p className="text-2xl mt-2">{Math.floor(Math.random() * 1000)}</p>
//       </div>
//     ))}
//   </div>
// );

// function Task5() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Task 5: Component Composition</h1>
      
//       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <Layout>
//           <Header>
//             <h1 className="text-2xl font-bold">My Dashboard</h1>
//             <p className="text-blue-100">Using component composition with children prop</p>
//           </Header>
          
//           <div className="flex flex-1">
//             <Sidebar>
//               <h2 className="text-xl font-bold mb-4">Menu</h2>
//               <ul className="space-y-2">
//                 {['Dashboard', 'Profile', 'Settings', 'Messages', 'Reports'].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="block p-2 hover:bg-gray-700 rounded">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
              
//               <div className="mt-8">
//                 <h3 className="font-bold mb-2">Recent Activity</h3>
//                 <p className="text-sm text-gray-300">Components composed using children prop</p>
//               </div>
//             </Sidebar>
            
//             <Main>
//               <div className="mb-6">
//                 <h2 className="text-2xl font-bold">Main Content Area</h2>
//                 <p className="text-gray-600">This content is passed as children to Main component</p>
//               </div>
              
//               <UserProfile />
//               <DashboardStats />
              
//               <div className="bg-gray-100 p-6 rounded-lg">
//                 <h3 className="font-bold text-lg mb-3">Component Structure:</h3>
//                 <pre className="bg-gray-800 text-white p-4 rounded overflow-auto">
// {`<Layout>
//   <Header>...</Header>
//   <div className="flex">
//     <Sidebar>...</Sidebar>
//     <Main>
//       <UserProfile />
//       <DashboardStats />
//     </Main>
//   </div>
//   <Footer>...</Footer>
// </Layout>`}
//                 </pre>
//               </div>
//             </Main>
//           </div>
          
//           <Footer>
//             <p className="text-center">© 2024 React Tasks. All components use children prop for composition.</p>
//           </Footer>
//         </Layout>
//       </div>
      
//       <div className="mt-8 p-6 bg-blue-50 rounded-lg">
//         <h3 className="font-bold text-blue-800 mb-2">Key Concept: Children Prop</h3>
//         <p className="text-blue-700">
//           The <code>children</code> prop allows components to be composed together by passing JSX as content.
//           This makes components reusable and flexible.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Task5;



//task 6 src/App.jsx




// import React, { useState } from 'react';

// const ProductCard = ({ title, price, image, inStock, description, discount = 0 }) => {
//   const discountedPrice = discount ? price * (1 - discount / 100) : price;

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//       <div className="relative">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-48 object-cover"
//         />
//         {discount > 0 && (
//           <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//             -{discount}%
//           </div>
//         )}
//         {!inStock && (
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold">
//               OUT OF STOCK
//             </span>
//           </div>
//         )}
//       </div>
      
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        
//         {description && (
//           <p className="text-gray-600 mb-4">{description}</p>
//         )}
        
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             {discount > 0 ? (
//               <div className="flex items-center space-x-2">
//                 <span className="text-2xl font-bold text-gray-900">
//                   ${discountedPrice.toFixed(2)}
//                 </span>
//                 <span className="text-gray-500 line-through">
//                   ${price.toFixed(2)}
//                 </span>
//               </div>
//             ) : (
//               <span className="text-2xl font-bold text-gray-900">
//                 ${price.toFixed(2)}
//               </span>
//             )}
//           </div>
          
//           <div className={`px-3 py-1 rounded-full text-sm font-bold ${inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//             {inStock ? 'In Stock' : 'Out of Stock'}
//           </div>
//         </div>
        
//         <button
//           disabled={!inStock}
//           className={`w-full py-3 px-4 rounded-lg font-bold transition duration-300 ${inStock ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
//         >
//           {inStock ? '🛒 Add to Cart' : 'Out of Stock'}
//         </button>
//       </div>
//     </div>
//   );
// };

// function Task6() {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       title: 'Wireless Headphones',
//       price: 99.99,
//       image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
//       inStock: true,
//       description: 'Noise cancelling wireless headphones with 30hr battery',
//       discount: 20
//     },
//     {
//       id: 2,
//       title: 'Smart Watch Pro',
//       price: 299.99,
//       image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w-400&h=300&fit=crop',
//       inStock: true,
//       description: 'Track fitness, heart rate, and notifications',
//       discount: 10
//     },
//     {
//       id: 3,
//       title: 'Gaming Keyboard',
//       price: 89.99,
//       image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
//       inStock: false,
//       description: 'RGB mechanical gaming keyboard'
//     },
//     {
//       id: 4,
//       title: 'Laptop Stand',
//       price: 49.99,
//       image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
//       inStock: true,
//       description: 'Ergonomic aluminum laptop stand'
//     },
//     {
//       id: 5,
//       title: 'Bluetooth Speaker',
//       price: 79.99,
//       image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
//       inStock: true,
//       discount: 15
//     },
//     {
//       id: 6,
//       title: 'USB-C Hub',
//       price: 39.99,
//       image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop',
//       inStock: true
//     }
//   ]);

//   const [newProduct, setNewProduct] = useState({
//     title: '',
//     price: '',
//     image: '',
//     inStock: true,
//     description: '',
//     discount: 0
//   });

//   const addProduct = () => {
//     if (!newProduct.title || !newProduct.price || !newProduct.image) {
//       alert('Please fill in title, price, and image URL');
//       return;
//     }

//     const product = {
//       id: Date.now(),
//       ...newProduct,
//       price: parseFloat(newProduct.price),
//       discount: parseInt(newProduct.discount) || 0
//     };

//     setProducts([...products, product]);
//     setNewProduct({
//       title: '',
//       price: '',
//       image: '',
//       inStock: true,
//       description: '',
//       discount: 0
//     });
//   };

//   const toggleStock = (id) => {
//     setProducts(products.map(product =>
//       product.id === id ? { ...product, inStock: !product.inStock } : product
//     ));
//   };

//   const removeProduct = (id) => {
//     setProducts(products.filter(product => product.id !== id));
//   };

//   const inStockCount = products.filter(p => p.inStock).length;
//   const outOfStockCount = products.filter(p => !p.inStock).length;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Task 6: Product Card Generator</h1>
      
//       {/* Add Product Form */}
//       <div className="bg-gray-50 p-6 rounded-xl mb-8">
//         <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Product Title"
//             value={newProduct.title}
//             onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
//             className="px-4 py-2 border rounded"
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={newProduct.price}
//             onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
//             className="px-4 py-2 border rounded"
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={newProduct.image}
//             onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
//             className="px-4 py-2 border rounded"
//           />
//           <input
//             type="number"
//             placeholder="Discount %"
//             value={newProduct.discount}
//             onChange={(e) => setNewProduct({...newProduct, discount: e.target.value})}
//             className="px-4 py-2 border rounded"
//           />
//           <textarea
//             placeholder="Description"
//             value={newProduct.description}
//             onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
//             className="px-4 py-2 border rounded md:col-span-2"
//           />
//         </div>
//         <div className="flex items-center space-x-4">
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={newProduct.inStock}
//               onChange={(e) => setNewProduct({...newProduct, inStock: e.target.checked})}
//               className="mr-2"
//             />
//             In Stock
//           </label>
//           <button
//             onClick={addProduct}
//             className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
//           >
//             Add Product
//           </button>
//         </div>
//       </div>

//       {/* Product Stats */}
//       <div className="grid grid-cols-3 gap-4 mb-8">
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <p className="text-2xl font-bold">{products.length}</p>
//           <p className="text-gray-600">Total Products</p>
//         </div>
//         <div className="bg-green-50 p-4 rounded-lg shadow text-center">
//           <p className="text-2xl font-bold text-green-600">{inStockCount}</p>
//           <p className="text-gray-600">In Stock</p>
//         </div>
//         <div className="bg-red-50 p-4 rounded-lg shadow text-center">
//           <p className="text-2xl font-bold text-red-600">{outOfStockCount}</p>
//           <p className="text-gray-600">Out of Stock</p>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {products.map(product => (
//           <div key={product.id} className="relative">
//             <ProductCard {...product} />
//             <div className="absolute top-2 left-2 flex space-x-2">
//               <button
//                 onClick={() => toggleStock(product.id)}
//                 className={`px-3 py-1 rounded text-sm ${product.inStock ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
//               >
//                 {product.inStock ? 'Mark Out' : 'Mark In'}
//               </button>
//               <button
//                 onClick={() => removeProduct(product.id)}
//                 className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="bg-blue-50 p-6 rounded-lg">
//         <h3 className="font-bold text-blue-800 mb-2">Features:</h3>
//         <ul className="list-disc pl-5 text-blue-700 space-y-1">
//           <li>Reusable ProductCard component</li>
//           <li>Props: title, price, image, inStock, description, discount</li>
//           <li>Buy button disabled when out of stock</li>
//           <li>Discount percentage display</li>
//           <li>Stock status badge</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Task6;


//task 7 src/App.jsx



// import React, { useState, useEffect } from 'react';

// function Task7() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [category, setCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('title');

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await fetch('https://fakestoreapi.com/products');
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       setProducts(data);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching products:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Filter and sort products
//   const filteredProducts = products
//     .filter(product => {
//       if (category === 'all') return true;
//       return product.category === category;
//     })
//     .filter(product =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.description.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortBy === 'title') return a.title.localeCompare(b.title);
//       if (sortBy === 'price-low') return a.price - b.price;
//       if (sortBy === 'price-high') return b.price - a.price;
//       if (sortBy === 'rating') return b.rating.rate - a.rating.rate;
//       return 0;
//     });

//   const categories = ['all', ...new Set(products.map(p => p.category))];

//   const LoadingSkeleton = () => (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {[...Array(6)].map((_, i) => (
//         <div key={i} className="bg-white rounded-xl shadow p-6 animate-pulse">
//           <div className="h-48 bg-gray-200 rounded mb-4"></div>
//           <div className="h-6 bg-gray-200 rounded mb-2"></div>
//           <div className="h-4 bg-gray-200 rounded mb-2"></div>
//           <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//         </div>
//       ))}
//     </div>
//   );

//   const ProductCard = ({ product }) => (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-contain p-4"
//         />
//       </div>
//       <div className="p-6">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{product.title}</h3>
//           <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
//             ${product.price}
//           </span>
//         </div>
        
//         <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center">
//             <div className="text-yellow-400">★</div>
//             <span className="ml-1 font-bold">{product.rating.rate}</span>
//             <span className="text-gray-500 text-sm ml-1">({product.rating.count} reviews)</span>
//           </div>
//           <span className="text-sm text-gray-500 capitalize">{product.category}</span>
//         </div>
        
//         <button className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );

//   if (error) {
//     return (
//       <div className="p-6 text-center">
//         <h1 className="text-3xl font-bold mb-6 text-center">Task 7: Fake Store Viewer</h1>
//         <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-2xl mx-auto">
//           <div className="text-red-500 text-6xl mb-4">⚠️</div>
//           <h2 className="text-2xl font-bold text-red-700 mb-4">Error Loading Products</h2>
//           <p className="text-red-600 mb-6">{error}</p>
//           <button
//             onClick={fetchProducts}
//             className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Task 7: Fake Store Viewer</h1>
      
//       <div className="max-w-6xl mx-auto">
//         {/* Controls */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Search Products</label>
//               <input
//                 type="text"
//                 placeholder="Search by title or description..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//             </div>
            
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Filter by Category</label>
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//               >
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>
//                     {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2">Sort By</label>
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//               >
//                 <option value="title">Name (A-Z)</option>
//                 <option value="price-low">Price (Low to High)</option>
//                 <option value="price-high">Price (High to Low)</option>
//                 <option value="rating">Rating (High to Low)</option>
//               </select>
//             </div>
//           </div>
          
//           <div className="flex justify-between items-center">
//             <button
//               onClick={fetchProducts}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
//             >
//               Refresh Products
//             </button>
            
//             <div className="text-gray-600">
//               Showing {filteredProducts.length} of {products.length} products
//             </div>
//           </div>
//         </div>

//         {/* Products Grid */}
//         {loading ? (
//           <LoadingSkeleton />
//         ) : (
//           <>
//             {filteredProducts.length === 0 ? (
//               <div className="bg-white rounded-xl shadow p-12 text-center">
//                 <p className="text-2xl text-gray-500">No products found matching your criteria.</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredProducts.map(product => (
//                   <ProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       <div className="mt-8 p-6 bg-blue-50 rounded-lg">
//         <h3 className="font-bold text-blue-800 mb-2">Features Implemented:</h3>
//         <ul className="list-disc pl-5 text-blue-700 space-y-1">
//           <li>Fetches data from Fake Store API using useEffect</li>
//           <li>Shows loading state while fetching</li>
//           <li>Displays error state if fetch fails</li>
//           <li>Search, filter, and sort functionality</li>
//           <li>Product cards with ratings and categories</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Task7;


//task 8 src/App.jsx

// import React, { useState, useEffect } from 'react';

// function Task8() {
//   const [joke, setJoke] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [jokeType, setJokeType] = useState('general');
//   const [favorites, setFavorites] = useState([]);
//   const [showFavorites, setShowFavorites] = useState(false);

//   const jokeTypes = [
//     { id: 'general', name: 'General', emoji: '😊' },
//     { id: 'programming', name: 'Programming', emoji: '💻' },
//     { id: 'knock-knock', name: 'Knock Knock', emoji: '🚪' },
//     { id: 'dad', name: 'Dad Jokes', emoji: '👨' },
//   ];

//   const fetchJoke = async (type = jokeType) => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       let url;
//       switch(type) {
//         case 'programming':
//           url = 'https://official-joke-api.appspot.com/jokes/programming/random';
//           break;
//         case 'general':
//         default:
//           url = 'https://official-joke-api.appspot.com/jokes/general/random';
//           break;
//       }

//       const response = await fetch(url);
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch joke');
//       }

//       const data = await response.json();
//       const jokeData = Array.isArray(data) ? data[0] : data;
      
//       if (jokeData.setup && jokeData.punchline) {
//         setJoke({
//           setup: jokeData.setup,
//           punchline: jokeData.punchline,
//           type: type,
//           id: jokeData.id || Date.now()
//         });
//       } else if (jokeData.joke) {
//         setJoke({
//           setup: jokeData.joke,
//           punchline: '',
//           type: type,
//           id: jokeData.id || Date.now()
//         });
//       }
//     } catch (err) {
//       setError(err.message);
//       // Fallback jokes in case API fails
//       setJoke({
//         setup: "Why don't scientists trust atoms?",
//         punchline: "Because they make up everything!",
//         type: 'fallback',
//         id: Date.now()
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJoke();
//   }, []);

//   const handleTypeChange = (type) => {
//     setJokeType(type);
//     fetchJoke(type);
//   };

//   const addToFavorites = () => {
//     if (joke && !favorites.some(fav => fav.setup === joke.setup)) {
//       setFavorites([...favorites, joke]);
//     }
//   };

//   const removeFavorite = (id) => {
//     setFavorites(favorites.filter(fav => fav.id !== id));
//   };

//   const JokeDisplay = ({ joke, showPunchlineInitially = false }) => {
//     const [showPunchline, setShowPunchline] = useState(showPunchlineInitially);

//     return (
//       <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-xl shadow-lg p-8 text-center">
//         <div className="text-6xl mb-6">
//           {jokeType === 'programming' ? '💻' : 
//            jokeType === 'knock-knock' ? '🚪' : 
//            jokeType === 'dad' ? '👨' : '😊'}
//         </div>
        
//         <div className="text-2xl font-bold text-gray-800 mb-4">
//           "{joke.setup}"
//         </div>
        
//         {joke.punchline && (
//           <>
//             <button
//               onClick={() => setShowPunchline(!showPunchline)}
//               className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg mb-4 transition duration-300"
//             >
//               {showPunchline ? 'Hide Punchline' : 'Show Punchline'}
//             </button>
            
//             {showPunchline && (
//               <div className="mt-4 p-4 bg-white rounded-lg">
//                 <p className="text-xl font-bold text-red-600">{joke.punchline}</p>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Task 8: Random Joke Generator</h1>
      
//       <div className="max-w-4xl mx-auto">
//         {/* Joke Type Selector */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <h2 className="text-xl font-bold mb-4">Select Joke Type</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {jokeTypes.map(type => (
//               <button
//                 key={type.id}
//                 onClick={() => handleTypeChange(type.id)}
//                 className={`p-4 rounded-lg border-2 transition duration-300 ${jokeType === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
//               >
//                 <div className="text-3xl mb-2">{type.emoji}</div>
//                 <div className="font-bold">{type.name}</div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Joke Display */}
//         <div className="mb-8">
//           {loading ? (
//             <div className="text-center p-12">
//               <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
//               <p className="text-xl">Loading a funny joke...</p>
//             </div>
//           ) : error ? (
//             <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
//               <p className="text-red-600 mb-4">Error: {error}</p>
//               <button
//                 onClick={() => fetchJoke()}
//                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg"
//               >
//                 Try Again
//               </button>
//             </div>
//           ) : joke ? (
//             <JokeDisplay joke={joke} />
//           ) : null}
//         </div>

//         {/* Controls */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex flex-wrap gap-4 justify-center">
//             <button
//               onClick={() => fetchJoke()}
//               className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
//             >
//               🔄 Get New Joke
//             </button>
            
//             <button
//               onClick={addToFavorites}
//               disabled={!joke || favorites.some(fav => fav.setup === joke.setup)}
//               className={`font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center ${!joke || favorites.some(fav => fav.setup === joke.setup) ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'}`}
//             >
//               ⭐ Add to Favorites
//             </button>
            
//             <button
//               onClick={() => setShowFavorites(!showFavorites)}
//               className="bg-linear-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
//             >
//               {showFavorites ? 'Hide' : 'Show'} Favorites ({favorites.length})
//             </button>
//           </div>
//         </div>

//         {/* Favorites Section */}
//         {showFavorites && favorites.length > 0 && (
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <h2 className="text-2xl font-bold mb-4 text-center">⭐ Favorite Jokes</h2>
//             <div className="space-y-4">
//               {favorites.map((favJoke, index) => (
//                 <div key={favJoke.id} className="border border-gray-200 rounded-lg p-4">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className="font-bold">{favJoke.setup}</p>
//                       {favJoke.punchline && (
//                         <p className="text-gray-600 mt-1">{favJoke.punchline}</p>
//                       )}
//                       <span className="text-sm text-gray-500 mt-2 inline-block">
//                         Type: {favJoke.type}
//                       </span>
//                     </div>
//                     <button
//                       onClick={() => removeFavorite(favJoke.id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => setFavorites([])}
//               className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg"
//             >
//               Clear All Favorites
//             </button>
//           </div>
//         )}

//         {/* Stats */}
//         <div className="bg-blue-50 rounded-lg p-6 mt-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-blue-600">{favorites.length}</div>
//               <div className="text-gray-600">Favorites</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600">{jokeTypes.length}</div>
//               <div className="text-gray-600">Joke Types</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-purple-600">∞</div>
//               <div className="text-gray-600">Jokes Available</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-red-600">100%</div>
//               <div className="text-gray-600">Fun Guaranteed</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Task8;


//task 9 src/App.jsx


// import React from 'react';
// import { Routes, Route, Link, useLocation } from 'react-router-dom';

// // Page Components
// const Home = () => (
//   <div className="text-center">
//     <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
//     <p className="text-xl mb-8">I'm a React Developer passionate about creating amazing web experiences.</p>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//       <div className="bg-white p-6 rounded-xl shadow">
//         <div className="text-4xl mb-4">🚀</div>
//         <h3 className="font-bold text-lg mb-2">Fast</h3>
//         <p>Optimized React applications</p>
//       </div>
//       <div className="bg-white p-6 rounded-xl shadow">
//         <div className="text-4xl mb-4">🎨</div>
//         <h3 className="font-bold text-lg mb-2">Beautiful</h3>
//         <p>Modern and responsive designs</p>
//       </div>
//       <div className="bg-white p-6 rounded-xl shadow">
//         <div className="text-4xl mb-4">⚡</div>
//         <h3 className="font-bold text-lg mb-2">Dynamic</h3>
//         <p>Interactive user experiences</p>
//       </div>
//     </div>
//   </div>
// );

// const About = () => (
//   <div className="max-w-3xl mx-auto">
//     <h1 className="text-4xl font-bold mb-8">About Me</h1>
//     <div className="bg-white p-8 rounded-xl shadow mb-8">
//       <img 
//         src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
//         alt="Profile" 
//         className="w-32 h-32 rounded-full mx-auto mb-6"
//       />
//       <h2 className="text-2xl font-bold mb-4">Talal Ahmed</h2>
//       <p className="text-gray-600 mb-4">Frontend Developer & React Specialist</p>
//       <p className="mb-4">
//         With over 5 years of experience in web development, I specialize in creating 
//         responsive and user-friendly applications using React, JavaScript, and modern 
//         web technologies.
//       </p>
//       <div className="grid grid-cols-2 gap-4 mt-6">
//         <div>
//           <h4 className="font-bold mb-2">Skills</h4>
//           <ul className="list-disc pl-5 text-gray-600">
//             <li>React.js</li>
//             <li>JavaScript/TypeScript</li>
//             <li>HTML5/CSS3</li>
//             <li>Tailwind CSS</li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="font-bold mb-2">Experience</h4>
//           <ul className="list-disc pl-5 text-gray-600">
//             <li>5+ Years Web Dev</li>
//             <li>React Projects</li>
//             <li>Team Lead</li>
//             <li>Mentoring</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Projects = () => {
//   const projects = [
//     {
//       title: 'E-Commerce Dashboard',
//       description: 'Full-featured dashboard with analytics',
//       tech: ['React', 'Chart.js', 'Firebase'],
//       status: 'Completed'
//     },
//     {
//       title: 'Task Management App',
//       description: 'Collaborative task management tool',
//       tech: ['React', 'Node.js', 'MongoDB'],
//       status: 'In Progress'
//     },
//     {
//       title: 'Weather App',
//       description: 'Real-time weather application',
//       tech: ['React', 'API', 'Tailwind'],
//       status: 'Completed'
//     },
//     {
//       title: 'Social Media Dashboard',
//       description: 'Analytics dashboard for social media',
//       tech: ['React', 'D3.js', 'Express'],
//       status: 'Planning'
//     }
//   ];

//   return (
//     <div>
//       <h1 className="text-4xl font-bold mb-8">My Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-xl font-bold">{project.title}</h3>
//                 <span className={`px-3 py-1 rounded-full text-sm font-bold ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
//                   {project.status}
//                 </span>
//               </div>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map(tech => (
//                   <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Contact = () => {
//   const [formData, setFormData] = React.useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Message sent! (This is a demo)');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-white p-8 rounded-xl shadow">
//           <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Name</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => setFormData({...formData, name: e.target.value})}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Email</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 mb-2">Message</label>
//               <textarea
//                 value={formData.message}
//                 onChange={(e) => setFormData({...formData, message: e.target.value})}
//                 rows="4"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         <div className="bg-white p-8 rounded-xl shadow">
//           <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//           <div className="space-y-6">
//             <div className="flex items-center">
//               <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                 <span className="text-2xl">📧</span>
//               </div>
//               <div>
//                 <h3 className="font-bold">Email</h3>
//                 <p className="text-gray-600">contact@myportfolio.com</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <div className="bg-green-100 p-3 rounded-lg mr-4">
//                 <span className="text-2xl">📱</span>
//               </div>
//               <div>
//                 <h3 className="font-bold">Phone</h3>
//                 <p className="text-gray-600">+92 300 1234567</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <div className="bg-purple-100 p-3 rounded-lg mr-4">
//                 <span className="text-2xl">📍</span>
//               </div>
//               <div>
//                 <h3 className="font-bold">Location</h3>
//                 <p className="text-gray-600">Karachi, Pakistan</p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 pt-6 border-t border-gray-200">
//             <h3 className="font-bold mb-4">Connect with me</h3>
//             <div className="flex space-x-4">
//               {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map(social => (
//                 <a
//                   key={social}
//                   href="#"
//                   className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition duration-300"
//                 >
//                   {social}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const NotFound = () => (
//   <div className="text-center py-20">
//     <div className="text-9xl font-bold text-gray-300 mb-6">404</div>
//     <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
//     <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
//     <Link
//       to="/"
//       className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
//     >
//       Go Back Home
//     </Link>
//   </div>
// );

// function Task9() {
//   const location = useLocation();

//   const navItems = [
//     { path: '/task9', label: 'Home', icon: '🏠' },
//     { path: '/task9/about', label: 'About', icon: '👤' },
//     { path: '/task9/projects', label: 'Projects', icon: '💼' },
//     { path: '/task9/contact', label: 'Contact', icon: '📞' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-white shadow-lg">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center py-6">
//             <div className="flex items-center mb-4 md:mb-0">
//               <div className="text-3xl mr-3">🚀</div>
//               <h1 className="text-2xl font-bold">Portfolio SPA</h1>
//             </div>
            
//             <nav className="flex space-x-1">
//               {navItems.map(item => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`flex items-center px-4 py-2 rounded-lg transition duration-300 ${location.pathname === item.path ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
//                 >
//                   <span className="mr-2">{item.icon}</span>
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="bg-white rounded-xl shadow-lg p-8">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>

//         <div className="mt-8 bg-blue-50 rounded-lg p-6">
//           <h3 className="font-bold text-blue-800 mb-2">SPA Features:</h3>
//           <ul className="list-disc pl-5 text-blue-700 space-y-1">
//             <li>React Router DOM for navigation</li>
//             <li>Multiple pages: Home, About, Projects, Contact</li>
//             <li>404 Page for invalid routes</li>
//             <li>No page reloads - Single Page Application</li>
//             <li>Active link highlighting</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Task9;

//task 10 



// import React, { createContext, useContext, useState } from 'react';

// // Create Theme Context
// const ThemeContext = createContext();

// // Custom hook to use theme
// const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within ThemeProvider');
//   }
//   return context;
// };

// // Theme Provider Component
// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');
//   const [accentColor, setAccentColor] = useState('#3B82F6'); // blue-500

//   const toggleTheme = () => {
//     setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
//   };

//   const setLightTheme = () => setTheme('light');
//   const setDarkTheme = () => setTheme('dark');

//   const colors = [
//     { name: 'Blue', value: '#3B82F6' },
//     { name: 'Green', value: '#10B981' },
//     { name: 'Purple', value: '#8B5CF6' },
//     { name: 'Red', value: '#EF4444' },
//     { name: 'Pink', value: '#EC4899' },
//     { name: 'Orange', value: '#F59E0B' },
//   ];

//   const themeStyles = {
//     light: {
//       background: 'bg-gray-50',
//       text: 'text-gray-900',
//       card: 'bg-white',
//       border: 'border-gray-200',
//       button: 'bg-gray-800 text-white',
//     },
//     dark: {
//       background: 'bg-gray-900',
//       text: 'text-gray-100',
//       card: 'bg-gray-800',
//       border: 'border-gray-700',
//       button: 'bg-gray-100 text-gray-900',
//     }
//   };

//   const value = {
//     theme,
//     toggleTheme,
//     setLightTheme,
//     setDarkTheme,
//     accentColor,
//     setAccentColor,
//     themeStyles: themeStyles[theme],
//     colors
//   };

//   return (
//     <ThemeContext.Provider value={value}>
//       <div className={`min-h-screen transition-colors duration-300 ${themeStyles[theme].background} ${themeStyles[theme].text}`}>
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// // Themed Components
// const ThemedCard = ({ children, className = '' }) => {
//   const { themeStyles } = useTheme();
//   return (
//     <div className={`${themeStyles.card} rounded-xl shadow-lg p-6 border ${themeStyles.border} ${className}`}>
//       {children}
//     </div>
//   );
// };

// const ThemedButton = ({ children, onClick, className = '' }) => {
//   const { themeStyles, accentColor } = useTheme();
//   return (
//     <button
//       onClick={onClick}
//       className={`${themeStyles.button} font-bold py-3 px-6 rounded-lg transition duration-300 hover:opacity-90 ${className}`}
//       style={{ backgroundColor: accentColor }}
//     >
//       {children}
//     </button>
//   );
// };

// // Main App Component using Context
// const ThemeSwitcherApp = () => {
//   const { 
//     theme, 
//     toggleTheme, 
//     setLightTheme, 
//     setDarkTheme, 
//     accentColor, 
//     setAccentColor,
//     colors 
//   } = useTheme();

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold mb-2 text-center">Task 10: Theme Switcher App</h1>
//       <p className="text-center text-gray-500 mb-8">Using React Context API for Global State Management</p>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Column - Theme Controls */}
//         <ThemedCard>
//           <h2 className="text-2xl font-bold mb-6">Theme Controls</h2>
          
//           <div className="space-y-6">
//             <div>
//               <h3 className="font-bold mb-3">Current Theme: <span className="capitalize">{theme}</span></h3>
//               <div className="flex space-x-4">
//                 <ThemedButton onClick={toggleTheme}>
//                   Toggle Theme ({theme === 'light' ? '🌙 Dark' : '☀️ Light'})
//                 </ThemedButton>
//                 <button
//                   onClick={setLightTheme}
//                   className="bg-yellow-100 text-yellow-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-200 transition duration-300"
//                 >
//                   ☀️ Light
//                 </button>
//                 <button
//                   onClick={setDarkTheme}
//                   className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition duration-300"
//                 >
//                   🌙 Dark
//                 </button>
//               </div>
//             </div>

//             <div>
//               <h3 className="font-bold mb-3">Accent Color</h3>
//               <div className="flex flex-wrap gap-3">
//                 {colors.map(color => (
//                   <button
//                     key={color.value}
//                     onClick={() => setAccentColor(color.value)}
//                     className={`w-12 h-12 rounded-full border-2 ${accentColor === color.value ? 'border-white ring-2 ring-offset-2' : 'border-gray-300'}`}
//                     style={{ backgroundColor: color.value }}
//                     title={color.name}
//                   />
//                 ))}
//               </div>
//               <p className="mt-3 text-sm text-gray-500">Selected: {colors.find(c => c.value === accentColor)?.name}</p>
//             </div>
//           </div>
//         </ThemedCard>

//         {/* Right Column - Preview */}
//         <ThemedCard>
//           <h2 className="text-2xl font-bold mb-6">Theme Preview</h2>
          
//           <div className="space-y-6">
//             <div>
//               <p className="mb-3">This card shows how components look with the current theme:</p>
//               <div className="p-4 rounded-lg border mb-4" style={{ borderColor: accentColor }}>
//                 <p>This border uses the selected accent color</p>
//               </div>
//             </div>

//             <div>
//               <h3 className="font-bold mb-3">Sample Components</h3>
              
//               <div className="space-y-4">
//                 <ThemedButton>Primary Button</ThemedButton>
                
//                 <div className="p-4 rounded-lg border">
//                   <p>Form Input Example:</p>
//                   <input
//                     type="text"
//                     placeholder="Type something..."
//                     className="w-full mt-2 p-2 rounded border"
//                   />
//                 </div>

//                 <div className="p-4 rounded-lg border">
//                   <p>Checkbox Example:</p>
//                   <div className="mt-2 space-y-2">
//                     {['Option 1', 'Option 2', 'Option 3'].map(option => (
//                       <label key={option} className="flex items-center">
//                         <input type="checkbox" className="mr-2" />
//                         {option}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </ThemedCard>
//       </div>

//       {/* Demo Components using Context */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <ThemedCard>
//           <h3 className="font-bold mb-3">Card 1</h3>
//           <p>This card automatically adapts to the current theme without prop drilling.</p>
//         </ThemedCard>
        
//         <ThemedCard>
//           <h3 className="font-bold mb-3">Card 2</h3>
//           <p>All components access theme from Context API.</p>
//           <ThemedButton className="mt-4">Action Button</ThemedButton>
//         </ThemedCard>
        
//         <ThemedCard>
//           <h3 className="font-bold mb-3">Card 3</h3>
//           <p>No need to pass theme props through multiple levels.</p>
//           <div className="mt-4 text-center">
//             <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: accentColor, color: 'white' }}>
//               Accent Badge
//             </span>
//           </div>
//         </ThemedCard>
//       </div>

//       {/* Context Info */}
//       <ThemedCard className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">How Context API Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="font-bold mb-2">Without Context (Prop Drilling)</h3>
//             <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-auto">
// {`<App theme={theme}>
//   <Header theme={theme}>
//     <Nav theme={theme}>
//       <Button theme={theme}>
//         // Theme passed through all levels
//       </Button>
//     </Nav>
//   </Header>
// </App>`}
//             </pre>
//           </div>
//           <div>
//             <h3 className="font-bold mb-2">With Context API</h3>
//             <pre className="bg-gray-800 text-gray-100 p-4 rounded text-sm overflow-auto">
// {`<ThemeProvider>
//   <App>
//     <Header>
//       <Nav>
//         <Button>
//           // Theme accessed directly
//         </Button>
//       </Nav>
//     </Header>
//   </App>
// </ThemeProvider>`}
//             </pre>
//           </div>
//         </div>
//         <p className="mt-4 text-gray-600">
//           Context API eliminates prop drilling by providing a way to share values 
//           between components without explicitly passing props through every level.
//         </p>
//       </ThemedCard>
//     </div>
//   );
// };

// // Wrapper Component for Task10
// function Task10() {
//   return (
//     <ThemeProvider>
//       <ThemeSwitcherApp />
//     </ThemeProvider>
//   );
// }

// export default Task10;


//task 11 src/App.jsx


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Button as MuiButton, Card as MuiCard, CardContent, Typography } from '@mui/material';

// // Styled Components Style
// const StyledCard = styled.div`
//   background: ${props => props.variant === 'dark' ? '#1f2937' : 'white'};
//   color: ${props => props.variant === 'dark' ? 'white' : '#111827'};
//   border-radius: 12px;
//   padding: 24px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
//   border: 1px solid ${props => props.variant === 'dark' ? '#374151' : '#e5e7eb'};
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
//   }
// `;

// const StyledButton = styled.button`
//   background: ${props => props.primary ? '#3b82f6' : props.variant === 'dark' ? '#4b5563' : '#e5e7eb'};
//   color: ${props => props.primary ? 'white' : props.variant === 'dark' ? 'white' : '#111827'};
//   border: none;
//   border-radius: 8px;
//   padding: 12px 24px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: all 0.2s ease;
  
//   &:hover {
//     background: ${props => props.primary ? '#2563eb' : props.variant === 'dark' ? '#6b7280' : '#d1d5db'};
//   }
  
//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// // Component using different styling methods
// const StylingDemo = ({ title, description, styleMethod, variant = 'light' }) => {
//   const [count, setCount] = useState(0);

//   const renderCard = () => {
//     switch(styleMethod) {
//       case 'tailwind':
//         return (
//           <div className={`${variant === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-xl shadow-lg p-6 border ${variant === 'dark' ? 'border-gray-700' : 'border-gray-200'} transition-transform hover:-translate-y-1`}>
//             <h3 className="text-xl font-bold mb-2">{title}</h3>
//             <p className="mb-4">{description}</p>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => setCount(count + 1)}
//                 className={`px-4 py-2 rounded-lg font-bold transition-colors ${variant === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
//               >
//                 Count: {count}
//               </button>
//               <button
//                 onClick={() => setCount(0)}
//                 className={`px-4 py-2 rounded-lg font-bold transition-colors ${variant === 'dark' ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} ${variant === 'dark' ? 'text-white' : 'text-gray-800'}`}
//               >
//                 Reset
//               </button>
//             </div>
//             <div className="mt-4 text-sm text-gray-500">
//               Styled with: <span className="font-bold">Tailwind CSS</span>
//             </div>
//           </div>
//         );

//       case 'mui':
//         return (
//           <MuiCard 
//             sx={{ 
//               bgcolor: variant === 'dark' ? 'grey.900' : 'background.paper',
//               color: variant === 'dark' ? 'grey.100' : 'text.primary',
//               transition: 'transform 0.3s',
//               '&:hover': { transform: 'translateY(-5px)' }
//             }}
//           >
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 {title}
//               </Typography>
//               <Typography variant="body2" paragraph>
//                 {description}
//               </Typography>
//               <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
//                 <MuiButton 
//                   variant="contained" 
//                   onClick={() => setCount(count + 1)}
//                 >
//                   Count: {count}
//                 </MuiButton>
//                 <MuiButton 
//                   variant="outlined"
//                   onClick={() => setCount(0)}
//                 >
//                   Reset
//                 </MuiButton>
//               </div>
//               <Typography variant="caption" display="block" sx={{ mt: 2, color: 'grey.500' }}>
//                 Styled with: <strong>Material UI</strong>
//               </Typography>
//             </CardContent>
//           </MuiCard>
//         );

//       case 'styled':
//         return (
//           <StyledCard variant={variant}>
//             <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
//             <p style={{ marginBottom: '1rem' }}>{description}</p>
//             <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
//               <StyledButton 
//                 primary 
//                 onClick={() => setCount(count + 1)}
//               >
//                 Count: {count}
//               </StyledButton>
//               <StyledButton 
//                 variant={variant}
//                 onClick={() => setCount(0)}
//               >
//                 Reset
//               </StyledButton>
//             </div>
//             <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
//               Styled with: <strong>Styled Components</strong>
//             </div>
//           </StyledCard>
//         );

//       default:
//         return null;
//     }
//   };

//   return renderCard();
// };

// function Task11() {
//   const [variant, setVariant] = useState('light');
//   const [activeMethod, setActiveMethod] = useState('tailwind');

//   const stylingMethods = [
//     { id: 'tailwind', name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
//     { id: 'mui', name: 'Material UI', description: 'React component library' },
//     { id: 'styled', name: 'Styled Components', description: 'CSS-in-JS library' },
//   ];

//   const demos = [
//     {
//       title: 'Product Card',
//       description: 'A reusable product card component with interactive elements.',
//     },
//     {
//       title: 'User Profile',
//       description: 'Displays user information with action buttons.',
//     },
//     {
//       title: 'Notification',
//       description: 'Alert notification component with dismiss button.',
//     },
//   ];

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${variant === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//       <div className="container mx-auto p-6">
//         <h1 className="text-4xl font-bold mb-2 text-center">Task 11: Multi-Styling Challenge</h1>
//         <p className="text-center text-gray-500 mb-8">Same UI styled using different methods</p>

//         {/* Controls */}
//         <div className={`rounded-xl p-6 mb-8 ${variant === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
//             <div>
//               <h2 className="text-xl font-bold mb-2">Theme</h2>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => setVariant('light')}
//                   className={`px-4 py-2 rounded-lg font-bold ${variant === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                 >
//                   ☀️ Light
//                 </button>
//                 <button
//                   onClick={() => setVariant('dark')}
//                   className={`px-4 py-2 rounded-lg font-bold ${variant === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
//                 >
//                   🌙 Dark
//                 </button>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-xl font-bold mb-2">Styling Method</h2>
//               <div className="flex flex-wrap gap-2">
//                 {stylingMethods.map(method => (
//                   <button
//                     key={method.id}
//                     onClick={() => setActiveMethod(method.id)}
//                     className={`px-4 py-2 rounded-lg font-bold transition-colors ${activeMethod === method.id ? 'bg-green-500 text-white' : variant === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
//                   >
//                     {method.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {stylingMethods.map(method => (
//               <div 
//                 key={method.id}
//                 className={`p-4 rounded-lg cursor-pointer transition-all ${activeMethod === method.id ? 'ring-2 ring-blue-500 transform scale-105' : ''} ${variant === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}
//                 onClick={() => setActiveMethod(method.id)}
//               >
//                 <h3 className="font-bold">{method.name}</h3>
//                 <p className="text-sm text-gray-500 mt-1">{method.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Demo Cards */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">Same Component, Different Styling</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {demos.map((demo, index) => (
//               <StylingDemo
//                 key={index}
//                 title={demo.title}
//                 description={demo.description}
//                 styleMethod={activeMethod}
//                 variant={variant}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Comparison Table */}
//         <div className={`rounded-xl p-6 ${variant === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
//           <h2 className="text-2xl font-bold mb-6">Styling Method Comparison</h2>
          
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className={`border-b ${variant === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
//                   <th className="text-left py-3 px-4">Method</th>
//                   <th className="text-left py-3 px-4">Pros</th>
//                   <th className="text-left py-3 px-4">Cons</th>
//                   <th className="text-left py-3 px-4">Best For</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className={`border-b ${variant === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
//                   <td className="py-3 px-4 font-bold">Tailwind CSS</td>
//                   <td className="py-3 px-4">
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>Utility-first, rapid development</li>
//                       <li>No CSS to maintain</li>
//                       <li>Highly customizable</li>
//                     </ul>
//                   </td>
//                   <td className="py-3 px-4">
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>Learning curve for classes</li>
//                       <li>HTML can get verbose</li>
//                     </ul>
//                   </td>
//                   <td className="py-3 px-4">Prototyping, utility-based styling</td>
//                 </tr>
                
//                 <tr className={`border-b ${variant === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
//                   <td className="py-3 px-4 font-bold">Material UI</td>
//                   <td className="py-3 px-4">
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>Pre-built components</li>
//                       <li>Consistent design system</li>
//                       <li>Great documentation</li>
//                     </ul>
//                   </td>
//                   <td className="py-3 px-4">
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>Bundle size can be large</li>
//                       <li>Customization can be complex</li>
//                     </ul>
//                   </td>
//                   <td className="py-3 px-4">Enterprise apps, Material Design</td>
//                 </tr>
                
//                 <tr>
//                   <td className="py-3 px-4 font-bold">Styled Components</td>
//                   <td className="py-3 px-4">
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>Scoped styles</li>
//                       <li>Dynamic styling with props</li>
//                       <li>Full CSS power</li>
//                     </ul>
//                   </td>
//                   <td className="py-3 px-4">
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>CSS-in-JS runtime cost</li>
//                       <li>Learning curve</li>
//                     </ul>
//                   </td>
//                   <td className="py-3 px-4">Component libraries, dynamic styling</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Code Examples */}
//         <div className={`mt-8 rounded-xl p-6 ${variant === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
//           <h2 className="text-2xl font-bold mb-4">Code Examples</h2>
          
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {stylingMethods.map(method => (
//               <div key={method.id} className="relative">
//                 <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-bold ${variant === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
//                   {method.name}
//                 </div>
//                 <pre className={`text-sm p-4 rounded-lg overflow-auto h-64 ${variant === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
//                   {method.id === 'tailwind' ? 
// `<div className="bg-white rounded-lg shadow p-4">
//   <h3 className="text-lg font-bold">Title</h3>
//   <p className="text-gray-600">Description</p>
//   <button className="bg-blue-500 text-white 
//          px-4 py-2 rounded hover:bg-blue-600">
//     Click me
//   </button>
// </div>` 
// : method.id === 'mui' ?
// `<Card>
//   <CardContent>
//     <Typography variant="h6">Title</Typography>
//     <Typography>Description</Typography>
//     <Button variant="contained">
//       Click me
//     </Button>
//   </CardContent>
// </Card>`
// : 
// `const StyledCard = styled.div\`
//   background: white;
//   border-radius: 8px;
//   padding: 16px;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// \`;

// <StyledCard>
//   <h3>Title</h3>
//   <p>Description</p>
//   <button>Click me</button>
// </StyledCard>`}
//                 </pre>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Task11;




