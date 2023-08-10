import Navbar from "../../components/navbar/Navbar"
import './home.css';
import box1 from '../../assets/box1.png'
import coin from '../../assets/coin.png'
import thorchain from '../../assets/thorchain.svg'
import axelar from '../../assets/axelar.svg'
import flare from '../../assets/flare.svg'
import arkhia from '../../assets/arkhia.svg'
import squid from '../../assets/squid.svg'
import avax from '../../assets/avax.png'
import songbird from '../../assets/sgb.png'
import hedera from '../../assets/hedera.png'
import evmos from '../../assets/evmos.png'

const Home = () => {
    return (
        <div className="home">
            <div className="navbar"><Navbar /></div>
            <div className="box">
                <div className="box1">
                    <div className="textarea">
                        <h1>Your Digital Asset Gateway</h1>
                        <p>Pangolin is a multichain decentralized digital assets exchange(DEX). 
                            Through advanced tooling, deep liquidity, and smooth onboarding, 
                            Pangolin offers easy swaps and great tools for projects and traders.</p>
                    </div>
                    <div className="image"><img src={box1} alt="" /></div>
                </div>
                <div className="box2">
                    <div className="textarea2">You have to see it to believe it</div>
                    <div className="launch-app-btn2">Launch App</div>
                </div>
                <div className="box3">
                    <div className="heading">Backed By World-Class Partners</div>
                    <div className="backed-partners">
                        <a href="https://www.coinbase.com" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={coin} alt="" /><div className="company-text">Coinbase</div>
                        </a>
                        <a href="https://thorchain.org/" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={thorchain} alt="" /><div className="company-text">Thorchain</div>
                        </a>
                        <a href="https://axelar.network/" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={axelar} alt="" /><div className="company-text">Axelar</div>
                        </a>
                        <a href="https://flare.network/" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={flare} alt="" /><div className="company-text">Flare</div>
                        </a>
                        <a href="https://www.arkhia.io/" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={arkhia} alt="" /><div className="company-text">Arkhia</div>
                        </a>
                        <a href="https://www.squidrouter.com/" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={squid} alt="" /><div className="company-text">Squid</div>
                        </a>
                    </div>
                </div>
                <div className="box3">
                    <div className="heading">We are live on these networks</div>
                    <div className="backed-partners">
                        <a href="https://www.avax.network/" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={avax} alt="" /><div className="company-text">Avalanche</div>
                        </a>
                        <a href="https://flare.network/songbird/" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={songbird} alt="" /><div className="company-text">Songbird</div>
                        </a>
                        <a href="https://hedera.com/" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={flare} alt="" /><div className="company-text">Flare</div>
                        </a>
                        <a href="https://evmos.org/" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={hedera} alt="" /><div className="company-text">Hedera</div>
                        </a>
                        <a href="http://" target="_self" rel="noopener noreferrer" className="company-box">
                            <img src={evmos} alt="" /><div className="company-text">Evmos</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;