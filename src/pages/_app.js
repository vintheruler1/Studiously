import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />

        <motion.div 
        className="slide-in"
        initial={{ scaleY: 0}}
        animate={{ scaleY: 0}}
        exit={{ scaleY: 1}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}} 
        >

        </motion.div>
        <motion.div         
        className="slide-out"
        initial={{ scaleY: 1}}
        animate={{ scaleY: 0}}
        exit={{ scaleY: 0}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}} ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
