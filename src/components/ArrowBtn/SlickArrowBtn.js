import arrow from '../../assets/arrow.png'

const SlickArrowBtn = (props) => {
    const {className, onClick} = props;
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
