'use client'

import { motion } from "framer-motion"
import { staggerContainer,fadeIn, planetVariants } from "@/utils/motion"
import { StartSteps, TitleText, TypingText } from "@/components"
import { newFeatures } from "@/constants"
import { NewFeatures } from "@/components"
import styles from "@/styles"


function WhatsNew() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        className={`flex flex-col ${styles.innerWidth} lg:flex-row mx-auto gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.75] flex flex-col justify-center"
        >
          <TypingText
           title='| Whats New'
          />
          <TitleText
            title={<>What's new about Metaversus</>}
          />
          <div className={`flex flex-row flex-wrap justify-between gap-[36px] mt-[31px]`}>
            {newFeatures.map((feature, index)=>(
              <NewFeatures
                key={index}
                {...feature}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img 
            src="/whats-new.png" 
            alt="whats-new" 
            className="h-[90%] w-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew