import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import tw from 'twin.macro';
import { currentTime } from '../utils/clock'; 

const Container = tw.div`flex min-h-screen bg-purple-50 justify-center items-center`;
const IPhone = tw.div`relative h-[712px] w-[350px] bg-black rounded-[45px] shadow-xl overflow-hidden border-[14px] border-black ring ring-purple-500`;
const Bg = tw.img`absolute inset-0 h-full w-full object-cover`;
const Notch = tw.div`absolute top-0 inset-x-0`;
const NotchContent = tw(Notch)`h-6 w-40 mx-auto bg-black rounded-b-2xl`;
const Speaker = tw.div`absolute h-2 w-14 bg-gray-800 rounded-xl top-1 left-12`;
const Camera = tw.div`absolute h-2 w-2 bg-gray-800 rounded-xl top-1 right-8 border-2 border-gray-700`;
const ContentContainer = tw.div`relative`;
const StatusBar = tw.div`mt-2 mr-6 flex justify-end space-x-1`;
const Icon = tw.svg`h-4 w-4 text-white`;
const StatusBarLine = tw.div`mt-1 h-0.5 w-10 bg-gray-200 mr-7 ml-auto rounded`;
const Clock = tw.div`mt-3 flex flex-col items-center`;
const ClockIcon = tw(Icon)`h-10 w-10`;
const Time = tw.time`mt-3 text-white text-6xl font-extralight`;
const Date = tw.p`mt-1 text-white text-lg font-light`;
const CardContainer = tw.div`relative mt-4 mx-2`;
const Card = tw.div`p-4 bg-white bg-opacity-40 backdrop-blur-md backdrop-filter rounded-3xl shadow`;
const CardHeader = tw.div`flex justify-between`;
const CardGrid = tw.div`mt-2 grid grid-cols-2 gap-3`;
const CardGridItem = tw.div``;
const CardDivider = tw.hr`mt-4 border-gray-800 opacity-20`;
const CardFooterGrid = tw.div`mt-3 grid grid-cols-3 gap-1 items-end`;
const ControlsContainer = tw.div`absolute bottom-0 inset-x-0 h-20`;
const Controls = tw.div`flex justify-between px-10`;
const ControlButton = tw.button`bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-md rounded-full p-2 focus:outline-none`;
const ControlIcon = tw.svg`h-6 w-6 text-white`;
const HomeControl = tw.div`absolute bottom-2 inset-x-0`;
const Home = tw.div`animate-bounce mx-auto h-1 w-28 bg-white rounded cursor-pointer`;

export default function Start() {
  return (
    <Container>
      <IPhone>
        <Bg src="/bg.jpg" />
          <NotchContent>
            <Speaker/>
            <Camera />
          </NotchContent>
          <ContentContainer>
            <StatusBar>
              <Icon viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </Icon>
              <Icon viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              </Icon>
              <Icon viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 8v8h-17v-8h17zm2-2h-21v12h21v-12zm1 9h.75c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-.75v6zm-4-6h-15v6h15v-6z"/>
              </Icon>
            </StatusBar>
            <StatusBarLine />

            <Clock>
              <ClockIcon viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </ClockIcon>
              <Time>
                {currentTime.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </Time>
              <Date>
                {currentTime.toLocaleDateString('en-US', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'short',
                })}
              </Date>
            </Clock>

            <CardContainer>
            <div tw="absolute -bottom-4 transform scale-[0.85] origin-bottom inset-x-0 h-full w-full bg-white opacity-10 backdrop-filter backdrop-blur-md rounded-2xl" />
            <div tw="absolute -bottom-2 transform scale-95 origin-bottom inset-x-0 h-full w-full bg-white opacity-30 backdrop-filter backdrop-blur-md rounded-3xl shadow-sm"/>

              <Card>
                <CardHeader>
                  <div>
                    <p tw="text-xs font-bold">9:30 AM</p>
                    <h2 tw="text-base font-bold">Your Moring Summary</h2>
                  </div>
                  <span tw="bg-gray-500 h-8 w-8 rounded-full text-white flex items-center justify-center">14</span>
                </CardHeader>
                  <CardGrid>
                    <CardGridItem>
                      <Image width="60" height="40" tw="rounded-lg h-24 w-full object-cover" src="/gamestop.jpeg" alt="Surfer at sunset" layout="responsive" />
                      <h3 tw="mt-2 text-xs font-bold leading-tight">Meme Stock Moves: What's Up With GME?</h3>
                      <p tw="mt-2 text-xs">Let's take a look at some of the biggest meme stock movers...</p>
                    </CardGridItem>
                    <CardGridItem>
                      <Image width="60" height="40" tw="rounded-lg h-24 w-full object-cover" src="/nft.jpeg" alt="CP3 vs the Greek Freak" layout="responsive" />
                      <h3 tw="mt-2 text-xs font-bold leading-tight">GameStop NFT Relese: 14 Things We Know...</h3>
                      <p tw="mt-2 text-xs">GME and NFT traders will just have to keep an eye on the company...</p>
                    </CardGridItem>
                  </CardGrid>
                  <CardDivider />
                  <CardFooterGrid>
                    <div tw="col-span-2">
                      <h3 tw="text-xs font-bold">More Updates</h3>
                      <p tw="mt-0.5 text-xs">Iphone 12, Macbook Pro (2022), and Apple Q1 Report</p>
                    </div>
                    <ul tw="flex -space-x-4 flex-row-reverse space-x-reverse">
                      <li><Image width="32" height="32" tw="object-cover rounded-lg" src="/apple-2.jpeg" alt=""/></li>
                      <li><Image width="32" height="32" tw="object-cover rounded-lg" src="/apple-3.jpeg" alt=""/></li>
                      <li><Image width="32" height="32" tw="object-cover rounded-lg" src="/apple-1.jpeg" alt=""/></li>
                    </ul>
                  </CardFooterGrid>
              </Card>
            </CardContainer>

          </ContentContainer>
          <ControlsContainer>
            <Controls>
              <ControlButton>
                <ControlIcon viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </ControlIcon>
              </ControlButton>
              <ControlButton>
                <ControlIcon viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </ControlIcon>
              </ControlButton>
            </Controls>
            <HomeControl>
              <Link href="/home" passHref>
                <Home />
              </Link>
            </HomeControl>
          </ControlsContainer>
      </IPhone>
    </Container>
  )
}
