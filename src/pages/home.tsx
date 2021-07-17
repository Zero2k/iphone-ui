import React from 'react';
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
const Clock = tw.div`absolute h-4 w-5 text-white text-xs font-medium top-0.5 left-8`;
const StatusBarLine = tw.div`mt-1 h-0.5 w-10 bg-gray-200 mr-7 ml-auto rounded`;
const ControlsContainer = tw.div`absolute bottom-0 inset-x-0 h-20`;
const ControlBar = tw.div`absolute px-1 py-3 w-11/12 mx-auto grid grid-cols-4 gap-1 justify-items-center bg-gray-600 bg-opacity-50 rounded-3xl bottom-3 inset-x-0`;
const ControlIcon = tw(Icon)`h-12 w-12 p-1.5 rounded-xl`;

export default function HomeScreen() {
  return (
    <Container>
      <IPhone>
        <Bg src="/bg.jpg" />
          <NotchContent>
            <Speaker/>
            <Camera />
          </NotchContent>
          <ContentContainer>
            <Clock>
              {currentTime.toLocaleString('sv-SE', {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
            </Clock>
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

          </ContentContainer>
          <ControlsContainer>
            <ControlBar>
              <ControlIcon tw="bg-phoneGreen">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </ControlIcon>
              <ControlIcon tw="bg-phoneGreen">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </ControlIcon>
              <ControlIcon tw="bg-phoneGreen">
                <svg  viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </ControlIcon>
              <ControlIcon tw="bg-red-500">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
              </ControlIcon>
            </ControlBar>
          </ControlsContainer>
      </IPhone>
    </Container>
  )
}
