function LinkColumn({arrLinks}) {
    return <ul className="footerColumn">
        {arrLinks.map((link, index) => {

                return <li style={index === 0 ? {fontWeight: 'bold'} : null}
                           key={index}>
                    <a href="#">{link}</a>
                </li>
            }
        )}
    </ul>
}

export default LinkColumn
