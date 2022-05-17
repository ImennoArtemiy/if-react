import arrow from '../../assets/arrow.png'

const SlickArrowBtn = ({className, onClick}) => {
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <img src={arrow} alt="arrow"/>
        </div>
    )
}

export default SlickArrowBtn
