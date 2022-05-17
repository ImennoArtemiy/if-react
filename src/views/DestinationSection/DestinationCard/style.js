import styled from "styled-components";

export const Card = styled.div`
    width: calc(25% - 16px);
    margin:24px 16px 0 0;
`
export const ImageContainer = styled.div`
  position: relative;
  width: 296px;
  height: 296px;
  img {
    width: 100%;
    opacity: 1;
    transition: .5s ease;
    &:hover {
      opacity: 0.3;
    }
  }
`
export const BlackOutContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  left: 0;
  transition: .5s ease;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`
export const ReservationBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 13px 24px;
  background-color: #FFFFFF;
  border: 1px solid #3077C6;
  border-radius: 8px;
  font-size: 18px;
  transition: .2s ease;
  &:hover {
    background-color: #3077C6;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }
`
export const Text = styled.p`
  max-width: 280px;
  color: #3077C6;
  margin: 24px 0;
`
