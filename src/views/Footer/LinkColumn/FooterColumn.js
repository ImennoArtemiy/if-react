import styled from "styled-components";

const FooterColumn = styled.ul`
  width: 33.3%;

  &:not(:last-child) {
    margin-right: 16px;
  }
`
const FooterItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`
const FooterLinkItem = styled.a`
  color: ${props => props.theme.footer.text};
  font-size: 20px;
  text-decoration: none;
`


function LinkColumn({arrLinks}) {
    return <FooterColumn>
        {
            arrLinks.map((text, index) => {
                    return (
                        <FooterItem style={
                            index === 0 ? {fontWeight: 'bold'} : null}
                            key={index}>
                            <FooterLinkItem href="#">{text}</FooterLinkItem>
                        </FooterItem>
                    )
                }
            )
        }
    </FooterColumn>
}

export default LinkColumn
