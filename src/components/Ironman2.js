import styled from "styled-components";
import { Link } from "react-router-dom";

const Ironman2 = (props)=> {
    return(
        <Container>
            {/* <h4>In the memory of Iron Man</h4> */}
            <Content>
                <Wrap>
                    <Link to="/">
                        <img src = "https://i.ytimg.com/vi/to4BN45kutE/maxresdefault.jpg" alt = "" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src = "https://images.indianexpress.com/2021/10/robert-downey-jr-1200.jpg?w=389" alt = "" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src = "https://i.insider.com/5e16567b49878c544d4f94c5" alt = "" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to="/">
                        <img src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avengers-end-game-iron-man-spiderman-reunion-1573139826.jpg?crop=1.00xw:0.756xh;0,0.0193xh&resize=640:*" alt = "" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    );
};

const Container = styled.div`
 padding: 0 0 26px; 
 `;

 const Content = styled.div`
 display: grid;
 grid-gap: 25px;
 gap: 25px;
 grid-template-columns: repeat(4, minmax(0, 1fr));

 @media(max-width: 768px){
     grid-template-columns: repeat(2, minmax(0, 1fr));
 }
 `;

 const Wrap = styled.div`
 padding-top: 56.25%;
 border-radius: 10px;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 cursor: pointer;
 overflow: hidden;
 position: relative;
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 border: 3px solid rgba(249, 249, 249, 0.1);
 img {
   inset: 0px;
   display: block;
   height: 100%;
   object-fit: cover;
   opacity: 1;
   position: absolute;
   transition: opacity 500ms ease-in-out 0s;
   width: 100%;
   z-index: 1;
   top: 0;
 }
 &:hover {
   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
     rgb(0 0 0 / 72%) 0px 30px 22px -10px;
   transform: scale(1.05);
   border-color: rgba(249, 249, 249, 0.8);
 }
`;

export default Ironman2;