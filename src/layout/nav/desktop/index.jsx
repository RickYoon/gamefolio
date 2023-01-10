import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { BiBook } from "react-icons/bi";
import React from 'react';
import { Link } from "react-router-dom";
// import logo from "../assets/CI/modified.svg"
import { AiFillTrophy, AiOutlineProfile } from "react-icons/ai";
import {BsCreditCard2FrontFill} from "react-icons/bs";
import {SiBitcoinsv} from "react-icons/si"
import {GiChecklist} from "react-icons/gi"
import {BiSpreadsheet} from "react-icons/bi";

function Topnav() {
    const { pathname } = useLocation();

    const moveMain = () => {
        window.location.href = "https://www.gamefolio.xyz"
    }

    const moveNFT = () => {
        window.location.href = "http://localhost:7777/nftview"
    }

    const moveDocs = () => {
        window.location.href = "https://amazing-leaf-bca.notion.site/Introduction-1fbb9ef8a0a542d18ca3351c3c88b58c"
    }

    return (
        <>
            <TemplateBlock>
                <div onClick={moveMain} style={{ display:"flex", flexDirection: "row",cursor: "pointer" }}>
                    <DecoTitle>GameFolio</DecoTitle>
                {/* <img src={logo} alt="logo" style={{ height: "40px", verticalAlign: "middle" }} /> */}
                </div>
                <div style={{display:"flex", flexDirection: "row",marginTop:"10px", fontSize:"25px", cursor: "pointer"}}>
                    {/* <div onClick={moveNFT} style={{marginRight:"15px", fontSize:"15px", lineHeight:"1.6"}}>NFT</div> */}
                    {/* <div style={{marginRight:"15px"}}><BiBook /></div> */}
                </div>
            </TemplateBlock>

            <SubTopNavBlock style={{ marginBottom: "30px", marginTop: "20px", fontSize: "15px" }}>
                {/* <Underline primary={pathname === "/"}>
                    <Link to="/game">
                        {pathname === "/game" ?
                            <Span style={{ color: "black" }}><BiSpreadsheet style={{ marginRight: "5px", verticalAlign: "middle" }} />Games </Span> :
                            <span style={{ color: "gray" }}><BiSpreadsheet style={{ marginRight: "5px", verticalAlign: "middle" }} />Games </span>
                        }
                    </Link>
                </Underline> */}
                <Underline primary={pathname === "/"}>
                    <Link to="/">
                        {pathname === "/" ?
                            <Span style={{ color: "black" }}><BiSpreadsheet style={{ marginRight: "5px", verticalAlign: "middle" }} />Tokens </Span> :
                            <span style={{ color: "gray" }}><BiSpreadsheet style={{ marginRight: "5px", verticalAlign: "middle" }} />Tokens </span>
                        }
                    </Link>
                </Underline>
                <Underline style={{ marginLeft: "5px" }} primary={pathname === "/Poolpage"}>
                    <Link to="/nft">
                        {pathname === "/nft" ?
                            <span style={{ color: "black" }}><GiChecklist style={{ marginRight: "0px", verticalAlign: "middle" }} /> NFTs </span> :
                            <span style={{ color: "gray" }}><GiChecklist style={{ marginRight: "0px", verticalAlign: "middle" }} /> NFTs </span>
                        }
                    </Link>
                </Underline>
                {/* <Underline style={{ marginLeft: "10px" }} primary={false}>
                    <BsFillPeopleFill style={{ marginRight: "5px", verticalAlign: "middle" }} />Community
                </Underline> */}
            </SubTopNavBlock>
        </>
    );
}

const DecoTitle = styled.h1`
    padding-top: 10px;
    font-size: 20px;
    background: linear-gradient(to right top, black, gray);
    color: transparent;
    -webkit-background-clip: text;
    font-weight: 900;
`

const TemplateBlock = styled.div`
    width: 1024px;
    max-height: 768px;
    vertical-align:middle;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    border-radius: 16px;

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
    font-size: 25px;

    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (max-width: 500px){
        width: 360px;
    font-size: 20px;
    }
`;



const Span = styled.span`
  /* background-color: #0a1930; */
  /* border: 1px solid #fff;
  border-radius: 999px;
  color: black;
  font-size: .75rem; */
  font-weight: 1000; 
  letter-spacing: .05rem;
  /* padding: 0.5rem 1rem;
  text-decoration: none;
  text-transform: capitalize;
  transition: all .3s ease-in-out;
  cursor: pointer; */

    &:hover {
    color:black;
  }
`

const Underline = styled.span`
  /* Adapt the colors based on primary prop */
  border-bottom: ${props => props.primary ? "2px solid black" : ""};
  color : ${props => props.primary ? "black" : "gray"};
  padding : 5px;
  font-weight : 900;
  @media screen and (max-width: 500px){
    font-size: 15px;
  }
`;

const SubTopNavBlock = styled.div`
  width: 1024px;
  max-height: 768px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 10px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  font-size: 15px;

  @media screen and (max-width: 500px){
    width: 360px;
    font-size: 12px;
  }
`;

export default Topnav;
