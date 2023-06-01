
import Image from "next/image"
import styled from "styled-components"

const StyledWrapper = styled.div`
position:absolute;
display:flex;
flex-direction: column;
width:100%;
height:100%;
justify-content: center;
align-items: center;
color:white;
z-index:4;
`
const StyledLoading = styled(Image)`
z-index:5;
`
export default function Loading() {
    return (<>
        <StyledWrapper>
        <StyledLoading src="/assets/loading.gif" width="200" height="200" alt="loading"/>
        <p>Building Room...</p>
        </StyledWrapper>
        </>
    )
}