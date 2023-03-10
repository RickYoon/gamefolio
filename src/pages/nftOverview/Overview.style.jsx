import Styled from 'styled-components';

export const Title = Styled.h1`
  font-weight: 600;
  font-size: 20px;
`

export const Wrappertitle = Styled.div`
  margin: 10px auto 20px auto;
  width: 1024px;
  @media screen and (max-width: 950px){
    width: 100%;
  }
`
export const OverBox = Styled.div`

  position: relative;
  width: 100%;
  /* width: -moz-calc(100%);
  width: -webkit-calc(100%); */
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  height: 100vh;
  /* 여기가 스크롤 위에 남기는 핵심임 */
  /* overflow: auto; */ 
  padding: 30px;

  @media screen and (max-width: 950px){
    /* width: 360px; */
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    width: calc(100% );
    width: -moz-calc(100%);
    width: -webkit-calc(100%);
    padding: 0px;
    margin-Top: 10px;
  }
`


export const Topbox = Styled.div`
  width: 1024px;
  /* margin-left: 32px;
  margin-right: 32px; */
  margin: 0px auto;
  gap: 24px;
  display: flex;
  /* overflow: hidden; */

  flex-direction: row;
  /* margin: 220px; */

  @media screen and (max-width: 500px){
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
  }
`



export const Leftcolumn = Styled.div`
  width: 788px;
  /* background: gray; */
  @media screen and (max-width: 500px){
    width: 100%;
  }
`

export const Rightcolumn = Styled.div`
  width: 324px;
  /* background: gray; */
  @media screen and (max-width: 500px){
    width: 100%;
  }

`