import * as Styled from "./TvlTable.style"
import { GamelistContext } from 'components/context/GamelistContext';
import React, {useState, useEffect, useContext} from "react";
import icons from "../../assets/tokenIcons"
// import ReactTooltip from "react-tooltip"
import styled from "styled-components";
import { Button } from 'semantic-ui-react'


function TvlTable() {

  const skeletonArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  const { gamedata, isloading } = useContext(GamelistContext);

  return (
    <Styled.TodoTemplateBlock>
      <div style={{marginTop:"10px",marginLeft:"10px"}}>
      <span>
        <Button style={{width:"120px", fontSize:"13px"}}>released</Button>
        <Button style={{width:"120px", fontSize:"13px"}}>coming soon</Button>
      </span>
      </div>
        <div className="tablecss" style={{ margin: "20px" }}>
        <div style={{marginTop:"10px"}}></div>
      <Styled.Table>
        <thead>
          <Styled.TrHead>
            <Styled.Th>#</Styled.Th>
            <Styled.Tdpd>Name / Date</Styled.Tdpd>
            <Styled.Td>dailyTrx</Styled.Td>
            <Styled.Td>1day</Styled.Td>
            <Styled.Td>chain</Styled.Td>
            <Styled.Td>
                genre
            </Styled.Td>
            <Styled.Td>
                developer
            </Styled.Td>
            <Styled.Td>
                <DesktopFont>Token</DesktopFont>
                <MobileFont>Token</MobileFont>
            </Styled.Td>
            <Styled.Td>
                <DesktopFont>NFT</DesktopFont>
                <MobileFont>NFT</MobileFont>
            </Styled.Td>
          </Styled.TrHead>
        </thead>
        <tbody>
        {isloading ?
            skeletonArray.map((index)=>(
            <tr key={index} style={{ height: "40px", borderBottom: "0.06em solid #D4D4D4 " }}>
                 <Styled.Th className="head" style={{ width: "30px", textAlign: "left" }}>{index+1}</Styled.Th>
                 <Styled.Tdpd className="head" style={{ width: "30px", textAlign: "left", whiteSpace: "nowrap" }}>
                     <Styled.IconSkeleton style={{ padding: "1px",borderRadius: "15px",  verticalAlign: "bottom" }}/>
                     <Styled.ProductSkeleton marginTop="10px" style={{ padding: "7px", whiteSpace: "nowrap", paddingLeft:"10px"}}/>
                </Styled.Tdpd>
                 <Styled.Tdc className="head" style={{ width: "100px", fontSize:"14px", color:"#3f3f3f"}}><Styled.ProductSkeleton/></Styled.Tdc>
                 <Styled.Tdc className="head" style={{ width: "100px", fontSize:"14px", color:"#3f3f3f"}}><Styled.ProductSkeleton/></Styled.Tdc>
                 <Styled.Td className="content" style={{ width: "200px", textAlign: "right" }}><Styled.ProductSkeleton/></Styled.Td>
                <Styled.Td className="content" style={{ width: "50px", textAlign: "right" }}><Styled.ProductSkeleton/></Styled.Td>
                <Styled.Td className="content" style={{ width: "100px", textAlign: "right", color: "red" }}><Styled.ProductSkeleton/>%</Styled.Td>
                <Styled.Td className="content" style={{ width: "200px", textAlign: "right", color: "red" }}><Styled.ProductSkeleton/>%</Styled.Td>
                <Styled.Tdc className="content" style={{ width: "200px", textAlign: "right" }}><Styled.ProductSkeleton/>%</Styled.Tdc>
            </tr>
            )) :
            gamedata.map((element, index) => (
              <Tr style={{ height: "60px", borderBottom: "0.06em solid #D4D4D4 " }}>
                <Styled.Th className="head" style={{ width: "50px", textAlign: "left" }}> {index+1}
                </Styled.Th>
                <Styled.Th>
                    <PoolinfoBox>
                      <Iconbox>
                        <Iconwrapper>
                          <Img src={icons["FCT"]} alt="logo" fontSize="20px" />
                        </Iconwrapper>
                      </Iconbox>
                      <Explainbox>
                        <Protocol>
                          <Span>{element.gameName}</Span>
                        </Protocol>
                        <Token>
                        {element.gameStartdate}
                        </Token>
                      </Explainbox>
                    </PoolinfoBox>
                  </Styled.Th>
                  <Styled.Td className="content" >
                  {element.dailyTrx}
                </Styled.Td>
                <Styled.Td className="content">
                  {element.dailyTrxDiff}
                </Styled.Td>

                <Styled.Td>
                <Iconwrapper>
                  <Img src={icons[element.chain]} alt="logo" fontSize="20px"/>
                  </Iconwrapper>
                </Styled.Td>
                <Styled.Td className="content">
                  {element.genre}
                </Styled.Td>
                <Styled.Td className="content">
                  {element.developer}
                </Styled.Td>
                {element.Token.map((res)=>
                <Styled.Td className="content">
                  <Iconwrapper>
                  <Img src={icons[res]} alt="logo" fontSize="20px"/>
                  </Iconwrapper>
                </Styled.Td>
                )}
                <Styled.Td className="content">
                  <div style={{display:"flex", flexDirection:"row"}}>
                  {element.NFT.map((res)=>
                    <Iconwrapper>
                    <Img src={icons[res]} alt="logo" fontSize="20px"/>
                    </Iconwrapper>                  
                  )}
                  </div>
                </Styled.Td>
            </Tr>
            ))
        }
        </tbody>
      </Styled.Table>
      </div>
  </Styled.TodoTemplateBlock>
  );
}


const Tr = styled.tr`
height : 40px;
line-height: 40px;
  &:hover {
    height : 40px;
    background-color: #E8E8E8;
    border-radius:10px;
    line-height: 40px;
  }
`


const DesktopFont = styled.span`
  @media screen and (max-width: 500px){
    display: none;
  }
`

const MobileFont = styled.span`
  display: none;
  @media screen and (max-width: 500px){
    display: inline;
  }
`


const Span = styled.span`
  cursor: pointer;
  font-weight: 600;
  /* color: gray;
  float: right; */

  &:hover {
    color: blue;
    text-decoration: underline;
  };
`


const Protocol = styled.div`
  padding-left: 15px;
  text-decoration: underline;
  font-size: 12px;
  height: 15px;
`

const Token = styled.div`
  padding-left: 15px;
    color: #657795;
    font-size: 11px;
    text-align: left;
`

const Explainbox = styled.div`
  /* height: 30px; */
  display : flex;
  flex-direction : column;
`

const PoolinfoBox = styled.div`
  text-align: left;
  display : flex;
  flex-direction : row;
  align-items: center;
`

const Img = styled.img`
    /* width: 100%; */
    height: 100%;
    /* width: */
    /* height:25px; 
    width:25px;  */
    border:1px solid #eaeaea;
    border-radius:50%;
    background-color: #f5f5f5;
    /* padding: 1px; */
    /* background-color:ㅎㄱ묘; */
  `

const Imgs = styled.img`
  width: 20px;
  height: 20px;
  border: 0.5px solid #eaeaea;
  border-radius:50%;
`

const Iconwrapper = styled.div`
    width: 15px;
    height: 25px;
    /* overflow: hidden; */
`

const Iconbox = styled.div`
  display: flex;
  flex-direction: row;
`


export default TvlTable;
  