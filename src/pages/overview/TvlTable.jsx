import * as Styled from "./TvlTable.style"
import { OverviewContext } from 'components/context/OverviewContext';
import React, {useState, useEffect, useContext} from "react";
import icons from "../../assets/tokenIcons"
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import ReactTooltip from "react-tooltip"
import styled from "styled-components";
import { Dropdown } from 'semantic-ui-react'
import styles from "./TvlTable.module.css";
import {CgArrowDown} from "react-icons/cg"

function TvlTable() {

  const skeletonArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  const { tvldata, isloading, ovfilter, setOvfilter } = useContext(OverviewContext);

  const categoryOption = [
    {
      key: 0,
      text: 'Wemix',
      value: 'Wemix',
      style: { fontSize:'13px'}
    },
    {
        key: 1,
        text: 'Bora',
        value: 'Bora',
        style: { fontSize:'13px'}
    },
    {
        key: 2,
        text: 'Klaytn',
        value: 'Klaytn',
        style: { fontSize:'13px'}
    },
    {
        key: 3,
        text: 'Neopin',
        value: 'Neopin',
        style: { fontSize:'13px'}
    }
  ]  

  const handleCatOnChange = (e, data) => {
    // console.log(data.value);
    // setOvfilter(data.value)
    setOvfilter({
        ...ovfilter,
        category : data.value
    })
  }
  const handleTvlOrder = (e, data) => {
    // console.log(data.value);
    // setOvfilter(data.value)
    setOvfilter({
        ...ovfilter,
        tvlOrder : true,
        onedayOrder: false,
        sevendayOrder: false
    })
  }

  const handleOnedayOrder = (e, data) => {
    // console.log(data.value);
    // setOvfilter(data.value)
    setOvfilter({
        ...ovfilter,
        tvlOrder : false,
        onedayOrder: true,
        sevendayOrder: false
    })
  }

  const handleSevendayOrder = (e, data) => {
    // console.log(data.value);
    // setOvfilter(data.value)
    setOvfilter({
        ...ovfilter,
        tvlOrder : false,
        onedayOrder: false,
        sevendayOrder: true
    })
  }
  
  return (
    <Styled.TodoTemplateBlock>
        <div className="tablecss" style={{ margin: "20px" }}>
        <div style={{marginTop:"10px"}}></div>
      <Styled.Table>
        <thead>
          <Styled.TrHead>
            <Styled.Th>#</Styled.Th>
            <Styled.Tdpd>Token / Game</Styled.Tdpd>
            {/* <Styled.Tdc width="200px">Game</Styled.Tdc> */}
            <Styled.Td>chain</Styled.Td>
            <Styled.Tdk textAlign="right" onClick={handleTvlOrder} style={{cursor: "pointer"}}>
                {/* {ovfilter.tvlOrder ? <CgArrowDown style={{verticalAlign:"bottom"}}/> : <></>} */}
                price($)
            </Styled.Tdk>
            <Styled.Tdk textAlign="right" onClick={handleOnedayOrder} style={{cursor: "pointer"}}>
                {/* {ovfilter.onedayOrder ? <CgArrowDown style={{verticalAlign:"bottom"}}/> : <></>} */}
                <DesktopFont>1day</DesktopFont>
                <MobileFont>1D</MobileFont>
            </Styled.Tdk>
            <Styled.Tdk textAlign="right" onClick={handleOnedayOrder} style={{cursor: "pointer"}}>
                {/* {ovfilter.onedayOrder ? <CgArrowDown style={{verticalAlign:"bottom"}}/> : <></>} */}
                <DesktopFont>MarketCap($)</DesktopFont>
                <MobileFont>MCap($)</MobileFont>
            </Styled.Tdk>
            <Styled.Tdk textAlign="right" onClick={handleSevendayOrder} style={{cursor: "pointer"}}>
                {/* {ovfilter.sevendayOrder ? <CgArrowDown style={{verticalAlign:"bottom"}}/> : <></>} */}
                <DesktopFont>Transaction</DesktopFont>
                <MobileFont>Trx</MobileFont>
            </Styled.Tdk>
            <Styled.Tdk textAlign="right">Holders</Styled.Tdk>
          </Styled.TrHead>
        </thead>
        <tbody>
        {isloading ?
            skeletonArray.map((skelton,index)=>(
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
            tvldata.data.map((tvld, index) => (
              <Tr style={{ height: "60px", borderBottom: "0.06em solid #D4D4D4 " }}>
                <Styled.Th className="head" style={{ width: "50px", textAlign: "left" }}> {index+1}
                </Styled.Th>
                <Styled.Th>
                    <PoolinfoBox>
                      <Iconbox>
                        <Iconwrapper>
                        <Img src={icons[tvld.tokenSymbol]} alt="logo" fontSize="20px"/>
                        </Iconwrapper>
                      </Iconbox>
                      <Explainbox>
                        <Protocol>
                          <Span>{tvld.tokenName} ({tvld.tokenSymbol})</Span>
                        </Protocol>
                        <Token>
                        {tvld.relatedGame}
                        </Token>
                      </Explainbox>
                    </PoolinfoBox>
                  </Styled.Th>
                    {/* <Link to={`/project/${tvld.proj}`}>
                        <img src={icons[tvld.tokenSymbol]} alt="logo" height="25px" width="25px" style={{ padding: "1px", verticalAlign: "middle", borderRadius: "15px" }} />
                        <span style={{ padding: "0px", whiteSpace: "nowrap", paddingLeft:"5px" }}>{tvld.tokenName}</span>
                    </Link> */}
                {/* <Styled.Tdc className="head" style={{ width: "100px", fontSize:"14px", color:"#3f3f3f"}}>{tvld.relatedGame}</Styled.Tdc> */}
                <Styled.Td className="head" style={{ width: "100px", fontSize:"14px", color:"#3f3f3f"}}>
                <Iconwrapper>
                  <Img src={icons[tvld.blockchain]} alt="logo" fontSize="20px"/>
                  </Iconwrapper>
                  {/* {tvld.blockchain} */}
                </Styled.Td>
                <Styled.Td className="content" style={{ width: "200px", textAlign: "right" }}>
                    {tvld.pricePerUSD.toFixed(3)}
                </Styled.Td>
                <Styled.Td className="content" style={{ width: "200px", textAlign: "right", color: "red" }}>-%</Styled.Td>
                <Styled.Td className="content" style={{ width: "200px", textAlign: "right" }}>
                    {tvld.marketCap > 0 ? Number(tvld.transferNumber).toLocaleString() : "-"}</Styled.Td>
                <Styled.Td className="content" style={{ width: "200px", textAlign: "right" }}>{Number(tvld.transferNumber).toLocaleString()}</Styled.Td>
                <Styled.Td className="content" style={{ width: "200px", textAlign: "right" }}>{Number(tvld.holderNumber).toLocaleString()}</Styled.Td>

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
  