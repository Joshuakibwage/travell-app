import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit' ;
    title: string ;
    icon?: string ;
    variant: 'btn_dark_green' ;
}

const Button = ({type, title, variant, icon}: ButtonProps) => {
  return (
    <button 
    className={`flexCenter rounded-full gap-3 border ${variant}`}
    type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button