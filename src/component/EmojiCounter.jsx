// // components/EmojiCounter.jsx
// import { useState } from 'react';

// const EmojiCounter = () => {
//   const [count, setCount] = useState(0);
//   const emoji = "😊";

//   const increase = () => setCount(count + 1);
//   const decrease = () => count > 0 && setCount(count - 1);
//   const reset = () => setCount(0);

//   return (
//     <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Emoji Counter Game</h2>
      
//       <div className="text-center mb-8">
//         <div className="text-9xl mb-6">{emoji}</div>
//         <p className="text-5xl font-bold text-blue-600 mb-2">{count}</p>
//         {count >= 10 && (
//           <p className="text-lg text-green-600 font-semibold animate-pulse">
//             🎉 Wow! You reached 10 or more!
//           </p>
//         )}
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 justify-center">
//         <button
//           onClick={increase}
//           className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition shadow-md"
//         >
//           Increase ➕
//         </button>
//         <button
//           onClick={decrease}
//           disabled={count === 0}
//           className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 disabled:bg-gray-400 transition shadow-md"
//         >
//           Decrease ➖
//         </button>
//         <button
//           onClick={reset}
//           className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-md"
//         >
//           Reset 🔄
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmojiCounter;