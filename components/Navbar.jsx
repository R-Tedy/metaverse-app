'use client'
import { motion } from "framer-motion"
import { navVariants } from "@/utils/motion"
import styles from "@/styles"
import Image from "next/image"

function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01"/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
          <Image
           src='/search.svg'
           alt="search icon"
           width={24}
           height={24}
           className="object-contain"
          />
          <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
            METAVERSUS
          </h2>

          {/* make this into a clickable link with lonks to different parts of the page. */}
          <Image
          src='/menu.svg'
          alt="menu"
          height={24}
          width={24}
          className="object-contain"
          />
        </div>
    </motion.nav>
  )
}

export default Navbar