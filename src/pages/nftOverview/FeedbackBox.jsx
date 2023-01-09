import styled from 'styled-components';
import React, { useState,useContext, useEffect } from "react";

function FeedbackBox() {

  return (
    <>
        <FeedbackBoxStyle>
                <Bar></Bar>
                <div style={{marginLeft:"10px", width:"78%", fontSize:"15px"}}> There may be errors in some data during the beta service period.<br/> Feedback is welcome. </div>
                <span>
                    <Wallet onClick={()=>window.open(`https://docs.google.com/forms/d/e/1FAIpQLSc45PZCpFRZtjGvYFCYPQNfpmg0PQgmDvRZCJyDLwaz_1ARYw/viewform`)}>
                        feedback
                    </Wallet>
                </span>
            </FeedbackBoxStyle>
    </>
  );
}

const Wallet = styled.div`
    align-items: center;
    background: #fff;
    border: 1px solid gray;
    border-radius: 6px;
    color: gray;
    cursor: pointer;
    display: flex!important;
    font-weight: 500;
    gap: 8px;
    margin-left: 200px;
    padding: 10px 14px;
    font-size:15px;
    @media screen and (max-width: 500px){
        margin-left: 0px;
        font-size:10px;
    }
`


const Container = styled.div`
    margin-top:30px;
    padding-left:100px;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#3366cc" : "white"};
  color: ${props => props.primary ? "white" : "#3366cc"};

  &:hover {
    background : #3366cc;
    color : white;
  }

  cursor: pointer;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #3366cc;
  border-radius: 3px;
  float:right;
  width:20%;
  height: 35px;
  @media screen and (max-width: 500px){
    width:40%;
    }
`;

const FeedbackBoxStyle = styled.div`
    width: 100%;
    margin: 0px auto;
    /* margin-top: 60px; */
    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    padding:15px;
    display:flex;
    flex-direction:row;
    -webkit-box-align: center;
    align-items: center;

    padding: 20px 25px !important;
    background: #fff;

    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    min-width: 0px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    background-clip: border-box;
    border: 0px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.75rem;
    box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
    overflow: visible;

    @media screen and (max-width: 500px){
      width: 360px;
      font-size: 15px;
    }
`


const Bar = styled.div`
    margin-left: 5px;
    width: 6px;
    height: 30px;
    background: red;
`

const Name = styled.div`
    color: #050f19;
    display: flex;
    align-items: center;
    flex-shrink: 0;

    justify-content: flex-start;
    font-size:16px;

    align-items:center;
`
const Value = styled.div`
    color: #050f19;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: flex-start;
    font-size:20px;
    align-items:center;
`

// </Innercontainer>

const InnerBoxNoclick = styled.div`

    border: 1px solid #edeff1;
    display: flex;
    padding: 16px;
    overflow: hidden;
    position: relative;
    align-items: flex-start;
    border-radius: 8px;
    flex-direction: column;
    width: 22%;
    margin: 12px;
    flex-grow:0;

    @media screen and (max-width: 500px){
        width: 100%;
        margin: 10px auto;
    }
`

const InnerBox = styled.div`

&:hover{  
    border: 1px solid blue;
  }
    cursor: pointer;
    border: 1px solid #edeff1;
    display: flex;
    padding: 16px;
    overflow: hidden;
    position: relative;
    align-items: flex-start;
    border-radius: 8px;
    flex-direction: column;
    width: 22%;
    margin: 12px;
    flex-grow:0;

    @media screen and (max-width: 500px){
        width: 100%;
        margin: 10px auto;
    }
`

const Innercontainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content:space-around;
`

const SubTemplateBlockVertical = styled.div`
     width: 900px;
    margin: 20px auto;
    padding-bottom: 10px;
    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    padding:15px;
    display:flex;
    flex-direction:column;

    padding: 20px 25px !important;
    background: #fff;

    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    min-width: 0px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    background-clip: border-box;
    border: 0px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
  overflow: visible;
    
  @media screen and (max-width: 500px){
      width: 360px;
      font-size: 12px;
    }
`;


const Tr = styled.tr`
    height: 45px;
    background: #fff;
`

const Td = styled.td`
    color: #050f19;
    padding: 12px 29px!important;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    border-bottom: 1px solid #edeff1 !important;
`

const Tdr = styled.td`
    color: #050f19;
    padding: 12px 29px!important;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-align: right;
    border-bottom: 1px solid #edeff1 !important;
`


const Thr = styled.th`
    cursor: auto;
    background: #f9fafb;
    text-align: inherit;
    color: rgba(0,0,0,.87);
    padding: 12px 29px!important;
    font-style: none;
    font-weight: 700;
    text-transform: none;
    border-bottom: 1px solid rgba(34,36,38,.1);
    border-left: none;
    text-align:right;
`

const Th = styled.th`
    cursor: auto;
    background: #f9fafb;
    text-align: inherit;
    color: rgba(0,0,0,.87);
    padding: 12px 29px!important;
    font-style: none;
    font-weight: 700;
    text-transform: none;
    border-bottom: 1px solid rgba(34,36,38,.1);
    border-left: none;
`

const Thead = styled.thead`
    color: #657795!important;
    padding: 12px 29px!important;
    font-size: 15px;
    background: transparent!important;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase!important;
`

const Table =styled.table`


    width: 100%;
    background: #fff;
    margin: 1em 0;
    border: 1px solid rgba(34,36,38,.15);
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0.28571429rem;
    color: rgba(0,0,0,.87);
    border-collapse: separate;
    border-spacing: 0;

`


export default FeedbackBox;


  