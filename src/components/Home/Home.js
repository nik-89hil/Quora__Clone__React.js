import React from 'react'
import Header from '../Header/Header';
import Spaces from '../spaces/Spaces';
import MidTop from '../middleTop/MidTop';
import MiddleMid from '../middle/MiddleMid';
import Footer from '../footer/Fotter'
import './home.css'
import RightSpace from '../RightSide_Space/RightSpace';

const Home = () => {
  const details=[{
    name:"twitter",
    description:"With Twitter, it wasn't clear what it was. They called it a social network, they called it microblogging, but it was hard to define, because it didn't replace anything. There was this path of discovery with something like that, where over time you figure out what it is. Twitter actually changed from what we thought it was in the beginning, which we described as status updates and a social utility. It is that, in part, but the insight we eventually came to was Twitter",
    imgsrc:"https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6304a2578abd315b18c8f6e9_twitter-logo.png",
    questionis:"what is twitter?",
    upvote:52,
    updated:"updated 8 month ago",
    address:"delhi India",
    comment:1222,
    share:0
  },{
    name:"ABC sharma",
    description:"Jacqueline Fernandez (born 11 August 1985) is a Sri Lankan actress and model.[1][2][3][4] She has worked in Indian films, predominantly in Hindi, besides appearing in reality shows and music videos. Debuting with Aladin in 2009, she has since then established a career in the Hindi film industry. Fernandez was born and raised in Bahrain to a multiracial Eurasian family of Sri Lankan Burgher, Canadian, and Malaysian descent. After graduating in mass communication from the University of Sydney and working as a television reporter in Sri Lanka, she joined the modeling industry. She was crowned Miss Universe Sri Lanka in 2006, and represented her country at Miss Universe 2006.",
    imgsrc:"https://english.cdn.zeenews.com/sites/default/files/2022/03/17/1023482-jacqueline-hot.jpg",
    questionis:"What is the matter of Jacqueline Fernandez",
    upvote:1025253,
    updated:"updated 3 month ago",
    address:"Mumbai India",
    comment:122522,
    share:152356
  },{
    name:"sunny verma",
    description:"Anant finished his schooling from ‘Dhirubhai Ambani International School’ Mumbai, India and later pursued his higher education from ‘Brown University Providence,’ Rhode Island.     Anant works for his family business and is also one of the co-owner of Indian Premier League Team Mumbai Indians. He was also appointed as director of Reliance New Energy Solar and Reliance New Solar Energy. He was also inducted as a director of Reliance O2C. Anant is also one of the director in Jio Platforms",
    imgsrc:"https://images.indianexpress.com/2022/12/AnantAmbani-RadhikaMerchant.jpg",
    questionis:"What is the qualifications of Anant Ambani?",
    upvote:589,
    updated:"updated 1 month ago",
    address:"Mumbai India",
    comment:2521,
    share:48
  },]
  return (
    <>
      <Header/>
      <div className='alignHome'>
        <div>
        <Spaces />
        <Footer/>

        </div>
       
        <div>
            <MidTop/><br />
            <MiddleMid details={details} />

        </div>
        <div>
          <RightSpace/>
        </div>
       
      </div>
    </>
  )
}

export default Home
