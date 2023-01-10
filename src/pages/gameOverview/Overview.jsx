import React, { useState, useEffect } from 'react';
import TvlTable from "./TvlTable"
import { GamelistContext } from "components/context/GamelistContext"
import * as Styled from "./Overview.style"
import FeedbackBox from "./FeedbackBox"
import axios from 'axios';

function Overview() {

    const [isloading, setIsloading] = useState(false)
    const [gamedata, setGamedata] = useState([{
      gameName: "THE KING OF FIGHTER : ARENA",
      gameStartdate: "November 14, 2022",
      developer: "WeMade",
      dailyTrx: 1200,
      dailyTrxDiff: 30,
      chain: "MBX",
      genre: "ACADE",
      Token: ["FCT"],
      NFT: ["DDD"]
    }])

    useEffect(() => {
        loadtvl()
        // loadEvent()
        // loadchart()
    }, [])

    const loadtvl = async () => {

        // setIsloading(true)

        // const gameList = await axios.get("https://uv8kd7y3w5.execute-api.ap-northeast-2.amazonaws.com/production/gamelist")
        // console.log("gameList",gameList)
        // #	Name / Date	dailyTrx	1day	chain	genre	Token	NFT

        setGamedata([{
          gameName: "THE KING OF FIGHTER : ARENA",
          gameStartdate: "2022.11/14",
          developer: "WeMade",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          chain: "MBX",
          genre: "ACADE",
          Token: ["FCT"],
          NFT: ["FCT","FCT"]
        },
        {
          gameName: "BirdTornado on WEMIX",
          gameStartdate: "2020.12/31",
          developer: "WEMIX PTE",
          chain: "WEMIX",
          genre: "shooting",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          Token: ["FCT"],
          NFT: ["FCT","FCT"]
        },
        {
          gameName: "cq zuanshi on WEMIX",
          gameStartdate: "2021.02/04",
          developer: "WEMIX PTE",
          chain: "WEMIX",
          genre: "MMORPG",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          Token: ["FCT"],
          NFT: ["FCT","FCT"]
        },
        {
          gameName: "MIR4",
          gameStartdate: "2021.08/26",
          developer: "WEMADE",
          chain: "WEMIX",
          genre: "RPG",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          Token: ["FCT"],
          NFT: ["FCT","FCT"]
        },
        {
          gameName: "GalaxyTornado on WEMIX",
          gameStartdate: "2021.12/31",
          developer: "NTgames",
          chain: "WEMIX",
          genre: "CASUAL",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          Token: ["FCT"],
          NFT: ["FCT","FCT"]
        },
        {
          gameName: "Rise of Stars",
          gameStartdate: "2022.02/25",
          developer: "라이트컨",
          chain: "WEMIX",
          genre: "SLG",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          Token: ["FCT"],
          NFT: ["FCT","FCT"]
        },
        {
          gameName: "Gunship Battle Crypto Conflict",
          gameStartdate: "2022.02/28",
          developer: "joycity",
          chain: "WEMIX",
          genre: "SLG",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          Token: ["FCT"],
          NFT: ["FCT","FCT"]
        },
        {
          gameName: "Yulgang global",
          gameStartdate: "2022.04/01",
          developer: "타이곤모바일",
          chain: "WEMIX",
          genre: "MMORPG",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          Token: ["FCT"],
          NFT: ["FCT","FCT"]
        },
        {
          gameName: "DarkEden M on WEMIX",
          gameStartdate: "2022.05/04",
          developer: "위메이드 커넥트",
          chain: "WEMIX",
          genre: "MMORPG",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          Token: ["DEB"],
          NFT: ["FCT","FCT"]
        },
        {
          gameName: "cryptoballZ on wemix",
          gameStartdate: "2022.03/02",
          developer: "조이시티",
          chain: "WEMIX",
          genre: "MMORPG",
          dailyTrx: 1200,
          dailyTrxDiff: 30,
          Token: ["HRC"],
          NFT: ["FCT","FCT"]
        }])

        // setIsloading(false)
    }

  return (
    <>
        <GamelistContext.Provider value={{gamedata,isloading}}>
          <Styled.OverBox>
            <Styled.Wrappertitle>
              <FeedbackBox />
            </Styled.Wrappertitle>
            <Styled.Topbox>
                  <TvlTable />
            </Styled.Topbox>
          </Styled.OverBox>
        </GamelistContext.Provider>
    </>
  );
}

export default Overview;
