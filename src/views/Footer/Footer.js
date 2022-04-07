import './Footer.css'
import LinkColumn from "./FooterColumn/FooterColumn";

function Footer({wrapper}) {
    const leftLinks = ['About', 'How Triphouse works', 'Careers', 'Privacy', 'Terms']
    const middleLinks = ['Property types', 'Guest houses', 'Hotels', 'Apartments', 'Villas', 'Holiday homes', 'Hostels']
    const rightLinks = ['Support', 'Contact Customer Service', 'FAQ']

    return <footer className="footer">
        <div style={wrapper} className="wrapper">
            <a href="#">
                <svg className='footerTrip-houseLogo'>
                    <use xlinkHref='#logo'/>
                </svg>
            </a>
            <div className="footerBody">
                <LinkColumn arrLinks={leftLinks}/>
                <LinkColumn arrLinks={middleLinks} />
                <LinkColumn arrLinks={rightLinks} />
            </div>
            <p className="copyright">&copy; 2020 Triphouse, Inc. All rights reserved</p>
        </div>
    </footer>
}

export default Footer
