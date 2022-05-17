import LinkColumn from "./LinkColumn/FooterColumn";
import {Wrapper} from "../../styles/components";
import styled from "styled-components";
import {svgIcons} from "../../data/siteConfig";
import {leftLinks, rightLinks, middleLinks, copyright} from "../../data/footer";

const MainFooter = styled.footer`
  background-color: ${props => props.theme.footer.bg};
  transition: .5s ease;
`
const FooterLogo = styled.svg`
  display: none;
  fill: #FFFFFF;
  width: 98px;
  height: 19px;
  margin: 0 auto;
`
const FooterBody = styled.div`
  display: flex;
  margin-bottom: 64px;
`
const Copyright = styled.p`
  color: #FFFFFF;
  font-size: 14px;
`

function Footer({padding}) {
    return (
        <MainFooter>
            <Wrapper padding={padding}>
                <a href="#">
                    <FooterLogo>
                        <use href={svgIcons.siteLogo}/>
                    </FooterLogo>
                </a>
                <FooterBody>
                    <LinkColumn arrLinks={leftLinks}/>
                    <LinkColumn arrLinks={middleLinks}/>
                    <LinkColumn arrLinks={rightLinks}/>
                </FooterBody>
                <Copyright>{copyright}</Copyright>
            </Wrapper>
        </MainFooter>
    )
}

export default Footer
