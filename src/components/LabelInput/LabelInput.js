import styled from "styled-components";

const Label = styled.label`
  display: block;
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 8px;
`
const Input = styled.input`
  display: block;
  width: 100%;
  height: 41px;
  padding: 12px;
  border: 2px solid #CECECE;
  border-radius: 8px;
  margin-bottom: ${props => props.mb};
`


function LabelInput({
                        labelText,
                        inputMb,
                        inputId,
                        inputType,
                        inputOnChange
}) {
    return (
        <>
            <Label htmlFor={inputId}>{labelText}</Label>
            <Input mb={inputMb} id={inputId} type={inputType} onChange={inputOnChange}/>
        </>
    )
}

export default LabelInput
