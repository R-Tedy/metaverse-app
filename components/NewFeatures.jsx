import styles from "@/styles"

function NewFeatures({imgUrl, title, subtitle}) {
  return (
    <div className={`${styles.flexStart} flex-col gap-4 sm:max-w-[250px] min-w-[225px]`}>
      <div className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d]`}>
        <img
          src={imgUrl}
          alt={title}
          className="w-1/2 h-1/2 object-contain"
        />
      </div>
      <h2 className="text-white font-bold text-[20px]">{title}</h2>
      <p className="font-normal text-[#B0B0B0] leading-[32px] text-[18px] flex-1 flex">{subtitle}</p>
    </div>
  )
}

export default NewFeatures