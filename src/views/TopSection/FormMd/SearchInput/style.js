import styled from "styled-components";

export const TextInput = styled.input.attrs({
    id: 'searchInput',
    type: 'text',
    required: true,
    autoComplete: 'off',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 38.7%;
  height: 64px;
  font-size: 18px;
  border-radius: 8px;
  padding: 19px 24px;

  &:hover {
    border: 3px solid #dedee1;
    padding: 16px 21px;
  }

  &:focus {
    border: 3px solid #F5BD41;
    padding: 16px 21px;
  }

  &:focus + Label, &:valid + Label {
    top: -75%;
    left: 2%;
    transform: none;
    color: #FFFFFF;
  }
`
export const Label = styled.label.attrs({
    htmlFor: 'searchInput',
})`
  position: absolute;
  top: 2%;
  left: 2%;
  transform: translate(0, 100%);
  transition: .5s ease;
  font-size: 18px;
  line-height: 21px;
`
