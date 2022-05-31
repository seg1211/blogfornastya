import styled, {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    
}`
export default GlobalStyle
export const Land = styled.div`
position: absolute;
height: 99vh;
width: 100%;
z-index: -1;

`
export const Vidos = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center center;
opacity: 1; 
transform: translateY(1vh);
`
export const Container = styled.div`
width:100vw;
height:100vh;
position: relative;
`
export const Flex_col = styled.div`
position: absolute;
top: 50%;
left: 10%;
right: 0;
margin: auto;
transform: translateY(-50%);
display:flex;
flex-direction: column;
justify-content:center;
align-content:center;
column-gap:1rem;    
h2 {
    font-size:3rem;
    color:#fff;
}
p{
    color:#fff;
    ont-size:1.5rem;
}


div {
    display:flex;
flex-direction: row;
gap: 2rem;
align-items: center;
}
`
export const GButton = styled.button`
    appearance: none;
    backface-visibility: hidden;
    background-color: #27ae60;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    padding: 13px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  
  
  :hover {
    background-color: #1e8449;
    opacity: 1;
    transform: translateY(0);
    transition-duration: .35s;
  }
  
  :active {
    transform: translateY(2px);
    transition-duration: .35s;
  }
  
  :hover {
    box-shadow: rgba(39, 174, 96, .2) 0 6px 12px;
  }
`
export const TomatoButton = styled(GButton)`
background-color: tomato;
  border-color: tomato;
  :hover {background-color: #b44633;}
`;
