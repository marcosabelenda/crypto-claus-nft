import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--cremita);
  overflow-x: hidden !important;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const TextTitle = styled.p`
  color: #fffeed;
  font-size: 60px !important;
  font-weight: 700;
  line-height: 1.6;
  @media (max-width: 1275px) {
    font-size: 30px !important;
  }
`;

export const TextTitle2 = styled.p`
  font-family: 'Poller One', sans-serif;
  color: #6ac9e1;
  font-size: 60px !important;
  font-weight: 700;
  line-height: 1.6;
   @media (max-width: 1275px) {
    font-size: 30px !important;
  }
`;

export const TextDescription2 = styled.p`
  color: #000000;
  font-size: 30px !important;
  line-height: 1.6;
   @media (max-width: 1275px) {
    font-size: 15px !important;
  }
`;

export const TextDescription3 = styled.p`
  color: #000000;
  font-size: 25px !important;
  line-height: 1.2;
   @media (max-width: 1275px) {
    font-size: 14px !important;
  }
  
`;

export const TextRoadMapTitle = styled.p`
  color: #fffeed;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.6;
  @media (max-width: 1275px) {
    font-size: 30px !important;
  }
`;

export const TextDescription = styled.p`
  color: #fffeed;
  font-size: 30px !important;
  line-height: 1.6;
   @media (max-width: 1275px) {
    font-size: 15px !important;
  }
`;

export const TextRoadMapDescription = styled.p`
  color: #fffeed;
  font-size: 30px !important;
  line-height: 1.6;
  @media (max-width: 1275px) {
    font-size: 18px !important;
  }
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const slickSlide = styled.div`
    background: "#00cc00";
    padding: 40px 0;
    margin: 10px;
    margin-top: 50px;
    width: 300px !important;
    height: 305px !important;
    @media (min-width: 3840px) {
      width: 500px !important;
      height: 505px !important;
    }
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`;

export const gif = styled.div`
    background: "#00cc00";
    margin-bottom: 100px;
    width: 400px;
    height: 400px;   
    @media (min-width: 3840px) {
      width: 600px !important;
      height: 600px !important;
    }  
    @media (max-width: 540px) {
      width: 300px !important;
      height: 300px !important;
      margin-bottom: 0px;
    }
     @media (max-width: 458px) {
      width: 250px !important;
      height: 250px !important;
      margin-bottom: 0px;
    }
     @media (max-width: 1275px) {
      width: 350px !important;
      height: 350px !important;
      margin-bottom: 0px;
    }

    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`;
