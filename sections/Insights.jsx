'use client'

import { motion } from "framer-motion"
import { staggerContainer } from "@/utils/motion"
import { InsightCard, TitleText, TypingText } from "@/components"
import { insights } from "@/constants"

import styles from "@/styles"

function Insights() {
  return (
    <section
      className={`${styles.paddings} relative z-10`}
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        className={`flex flex-col ${styles.innerWidth} mx-auto`}
      >
        <TypingText
          title='| Insight'
          textStyles='text-center'
        />
        <TitleText
          title='Insight about the metaverse'
          textStyles='text-center'
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, index)=>(
            <InsightCard
              key={`insight-${index}`}
              index={index+1}
              {...insight}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Insights