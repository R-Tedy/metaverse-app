'use client'
import { motion } from "framer-motion"
import { navVariants } from "@/utils/motion"
import styles from "@/styles"

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative`}
    >

    </motion.nav>
  )
}

export default Navbar