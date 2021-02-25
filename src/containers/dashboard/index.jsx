import React, {useRef} from 'react';
import {Landing} from '../../components/landing'
import {CopyButton} from '../../components/button/copy'
import styled from "styled-components";
import orbit from '../../assets/img/orbit.png'
import orbit2 from '../../assets/img/orbit2.png'
import electron from '../../assets/img/electron.png'
import react from '../../assets/img/react.png'
import ipfs from '../../assets/img/ipfs.png'

export const Dashboard = () => {
    let pdmRef = useRef(null);

    function copyCodeToClipboard(ref) {
        ref.current.select();
        document.execCommand("copy")
    }

    return (
        <DashboardContainer>
            <Landing/>
            <Content>
                <Section>
                    <Title>Public Keys Available</Title>
                    <HashesContainer>
                        <HashOption>
                            <HashTitle>PDM</HashTitle>
                            <HashClipboard>
                                <Hash type='text' ref={pdmRef} value={process.env.REACT_APP_PDM_HASH} readOnly/>
                                <CopyButton copy={() => copyCodeToClipboard(pdmRef)}/>
                            </HashClipboard>
                        </HashOption>
                    </HashesContainer>
                </Section>
                <Section>
                    <Title>A movie platform with a decentralized network approach</Title>
                    <Cite>
                        For a long time watching movies has overwhelmed me, I am simply limited by my time to go to the
                        cinema. I am a movie fan but a developer with very little time to travel hours to buy a ticket
                        and see the "latest" release of the Avengers (plus pandemic factors). <br/><br/>
                        Somehow the internet today helps us to cope with some of these problems, the other problem is
                        that the internet offers very few resources to see good quality movies and those who offer it do
                        so with movies that are definitely not the "last" launch of the Avengers (sarcasm). <a href="https://dev.to/geolffreym/watchit-2b88">Read More...</a>
                    </Cite>
                </Section>
                <SectionWhite>
                    <Title>A Huge Network</Title>
                    <SectionContent>
                        <SubSection>
                            <ImageWrapper href="https://orbitdb.org/">
                                <Image src={orbit2}/>
                            </ImageWrapper>
                            <ImageWrapper href="https://ipfs.io/">
                                <Image src={ipfs}/>
                            </ImageWrapper>
                        </SubSection>
                        <SubSection>
                            <TextContent>
                                We are part of <a href="https://awesome.ipfs.io/">Awesome ipfs</a> and <a href="https://github.com/orbitdb/awesome-orbitdb">Awesome OrbitDb</a> collections of really cool projects!
                                You can be part of watchit also collaborating with the community, you can check our <a href="https://github.com/ZorrillosDev/watchit-desktop">github</a> page for more information
                            </TextContent>
                        </SubSection>
                    </SectionContent>
                </SectionWhite>
                <Section>
                    <Title>Stack</Title>
                    <ImagesContainer>
                        <ImageWrapper href="https://orbitdb.org/">
                            <Image src={orbit}/>
                        </ImageWrapper>
                        <ImageWrapper href="https://ipfs.io/">
                            <Image src={ipfs}/>
                        </ImageWrapper>
                        <ImageWrapper href="https://es.reactjs.org/">
                            <Image src={react}/>
                        </ImageWrapper>
                        <ImageWrapper href="https://www.electronjs.org/">
                            <Image src={electron}/>
                        </ImageWrapper>
                    </ImagesContainer>
                </Section>
            </Content>
            <Footer>© 2021 ZorrillosDev Community.</Footer>
        </DashboardContainer>
    );
};

const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #141518;
  overflow: hidden;
  
  &,
  & *,
  :before,
  :after {
    box-sizing: border-box;
  }
`;

const Footer = styled.div`
  width: 100%;
  padding: 3rem 0 3rem;
  margin-top: 3rem;
  text-align: center;
  color: #eee;
  font-family: 'Oswald', 'Nunito Sans',sans-serif;
  box-shadow: 0 0px 17px 0 rgba(0,0,0,0.2), 0 36px 94px 0 rgba(0,0,0,0.19);
  font-size: 0.8rem;
  word-spacing: 2px;
  background-color: #14161b;
`;

const Content = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Image = styled.img`
  width: auto;
  height: 6rem;
  margin: 1.5rem;
`;

const HashesContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const HashOption = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 7px 0 rgba(0,0,0,0.2), 0 5px 22px 0 rgba(0,0,0,0.19);
  margin: 1rem;
  border-radius: 1rem;
  width: 100% !important;
  padding: 1rem;
  
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const HashTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  color: #e58e26;
  text-transform: uppercase;
  font-family: 'Oswald', 'Nunito Sans',sans-serif;
  margin: 1rem 2rem 1rem 1rem;
`;

const HashClipboard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 1rem
`;


const Hash = styled.input`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  color: white;
  font-family: 'Oswald', 'Nunito Sans',sans-serif;
  margin: 1rem;
  padding: 0.5rem 4rem 0.5rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid white;
  background: transparent;
  box-shadow: none !important;
  outline: none !important;
  cursor: text;
  width: 100%;
`;

const Section = styled.div`
  width: 60%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 900px) {
    width: 90%;
    padding: 1rem 0;
  }
`;

const SectionContent = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 900px) {
    width: 90%;
  }
`;

const SubSection = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  p {
    min-width: auto;
  }
  
  a {
    color: #e58e26;
    text-decoration: none;
  }
`;

const SectionWhite = styled.div`
  width: 100%;
  padding: 7rem 0;
  margin: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.9);
  
  span {
    color: #444;
  }
  
  p {
    color: #555;
  }
  
  @media (max-width: 900px) {
    padding: 3rem 0;
  }
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: white;
  text-transform: capitalize;
  font-family: 'Oswald', 'Nunito Sans',sans-serif;
  margin-bottom: 2rem;
`;

const TextContent = styled.p`
  width: 80%;
  min-width: 36rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: justify;
  color: #ddd;
  text-transform: none;
  font-family: 'Oswald', 'Nunito Sans',sans-serif;
  
  @media (max-width: 650px) {
    width: 90%;
    min-width: auto;
    font-size: 1rem;
  }
`;

const Cite = styled.p`
  width: 80%;
  min-width: 36rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: justify;
  color: #ddd;
  text-transform: none;
  font-family: 'Oswald', 'Nunito Sans',sans-serif;

  a {
    color: #e58e26;
    text-decoration: none;
  }
  
  &:before {
    color: #fff;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  
  &:after {
    color: #fff;
    content: close-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-left: 0.25em;
    vertical-align: -0.6em;
  }
  
  @media (max-width: 650px) {
    width: 90%;
    min-width: auto;
    font-size: 1rem;
  }
`;