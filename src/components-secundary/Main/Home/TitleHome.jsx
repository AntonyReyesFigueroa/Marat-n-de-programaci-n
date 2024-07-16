import React, { useEffect, useState } from 'react'

const TitleHome = () => {

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const words = ['FISIOTERAPIA FIGUEROA'];
  
    useEffect(() => {
        const typingInterval = setInterval(() => {
          if (!isDeleting && index <= words.length) {
            const currentText = words[index].substring(0, text.length + 1);
            setText(currentText);
    
            if (currentText === words[index]) {
              setIsDeleting(true);
            }
          } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setIndex((index + 1) % words.length);
          } else {
            setText((prev) => prev.substring(0, prev.length - 1));
          }
        }, 150);
    
        return () => clearInterval(typingInterval);
      }, [text, index, isDeleting, words]);


    return (
        <div className="home__title">
            {/* <h1>FISIOTERAPIA FIGUEROA</h1> */}
            <h1>{text}</h1>
        </div>
    )
}

export default TitleHome















// import React, { useEffect, useState } from 'react'

// const TitleHome = () => {

//     const [text, setText] = useState('');
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [index, setIndex] = useState(0);
//     const words = ['FISIOTERAPIA FIGUEROA'];
  
//     useEffect(() => {
//         const typingInterval = setInterval(() => {
//           if (!isDeleting && index <= words.length) {
//             const currentText = words[index].substring(0, text.length + 1);
//             setText(currentText);
    
//             if (currentText === words[index]) {
//               setIsDeleting(true);
//             }
//           } else if (isDeleting && text === '') {
//             setIsDeleting(false);
//             setIndex((index + 1) % words.length);
//           } else {
//             setText((prev) => prev.substring(0, prev.length - 1));
//           }
//         }, 150);
    
//         return () => clearInterval(typingInterval);
//       }, [text, index, isDeleting, words]);


//     return (
//         <div className="home__title">
//             {/* <h1>FISIOTERAPIA FIGUEROA</h1> */}
//             <h1>{text}</h1>
//         </div>
//     )
// }

// export default TitleHome