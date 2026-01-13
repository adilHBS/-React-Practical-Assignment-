// // components/TodoApp.jsx
// import { useState } from 'react';

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim() === '') return;
//     setTodos([...todos, { text: newTask, completed: false }]);
//     setNewTask('');
//   };

//   const deleteTask = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   const toggleComplete = (index) => {
//     const updatedTodos = todos.map((todo, i) =>
//       i === index ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   const totalTasks = todos.length;
//   const completedTasks = todos.filter(todo => todo.completed).length;

//   return (
//     <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Todo App with Rules</h2>
      
//       {/* Add Task Section */}
//       <div className="flex gap-2 mb-8">
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Add a new task..."
//           className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={addTask}
//           disabled={newTask.trim() === ''}
//           className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 disabled:bg-gray-400 transition shadow-md"
//         >
//           Add Task
//         </button>
//       </div>

//       {/* Task Stats */}
//       <div className="flex justify-between mb-6 text-lg">
//         <p className="text-blue-600 font-semibold">
//           Total Tasks: <span className="font-bold">{totalTasks}</span>
//         </p>
//         <p className="text-green-600 font-semibold">
//           Completed: <span className="font-bold">{completedTasks}</span>
//         </p>
//       </div>

//       {/* Task List */}
//       <div className="space-y-4">
//         {todos.length === 0 ? (
//           <p className="text-center text-gray-500 py-8">No tasks yet. Add one above!</p>
//         ) : (
//           todos.map((todo, index) => (
//             <div
//               key={index}
//               className={`flex items-center justify-between p-4 rounded-lg border ${
//                 todo.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
//               }`}
//             >
//               <div className="flex items-center gap-4">
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => toggleComplete(index)}
//                   className="w-5 h-5"
//                 />
//                 <span
//                   className={`text-lg ${
//                     todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
//                   }`}
//                 >
//                   {todo.text}
//                 </span>
//               </div>
//               <button
//                 onClick={() => deleteTask(index)}
//                 className="px-4 py-2 bg-red-100 text-red-600 font-semibold rounded-lg hover:bg-red-200 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default TodoApp;