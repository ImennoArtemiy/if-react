import styled from "styled-components";

export const CounterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
  color: #333333;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`
export const CounterBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 108px;
  margin-left: 48px;
`
export const CounterBtn = styled.button.attrs({
    type: 'button'
})`
  width: 30px;
  height: 30px;
  color: ${
          props => props.count === props.minCount || props.count === props.maxCount ? '#CECECE' : '#3077C6'
  };
  border: ${
          props => props.count === props.minCount || props.count === props.maxCount ? ' 1px solid #CECECE' : '1px solid #3077C6'
  };
`
