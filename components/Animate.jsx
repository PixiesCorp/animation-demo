import { motion, AnimatePresence } from "framer-motion"
import styles from '../styles/Animate.module.css'
import { useState } from "react"
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose'

export default function Animate(){
  const [isOpen, setIsOpen] = useState(false)
    return(
      <div className={styles.container}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
            key="modal"
            initial={{
              opacity: 0,
              y: -200
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}
            exit={{
              opacity: 0,
              y: -200
            }} 
            className={styles.modal}>
              <motion.button 
              whileTap={{
                scale: 1.2
              }}
              className={styles.exitbtn}
              onClick={() => setIsOpen(false)}
              >
                <IoMdClose 
                size="2em"/>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button 
        whileTap={{
          scale: 1.1
        }}
        onClick={() => setIsOpen(true)} className={styles.btn}>
          Animate
        </motion.button>
      </div>
    )
}