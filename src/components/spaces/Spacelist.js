import React from 'react'
import Header from '../Header/Header'

const Spacelist = () => {
    const spacLIst = [{
        name:"https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/31/0dfe05d1f843d2705c096b93ccb80e54_original.jpg?impolicy=abp_cdn&imwidth=650",
        title:"YouTube is an American global online video sharing and social media platform headquartered in San Bruno, California, United States. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the second most visited website, after Google Search. YouTube has more than 2.5 billion monthly users."
    },{
        name:"https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg",
        title:"American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence,[9] and consumer electronics. It has been referred to as the most powerful company in the world[10] and one of the world's most valuable brands."
    },{
        name:"https://techcrunch.com/wp-content/uploads/2021/01/facebook-earnings-2021.jpg?w=1024",
        title:"Facebook is an online social media and social networking service owned by American technology giant Meta Platforms. Created in 2004 by Mark Zuckerberg with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, its name derives from the face book directories often given to American university students"
    },{
        name:"https://static.whatsapp.net/rsrc.php/v3/yR/r/y8-PTBaP90a.png",
        title:"WhatsApp (also called WhatsApp Messenger) is an internationally available freeware, cross-platform, centralized instant messaging (IM) and voice-over-IP (VoIP) service owned by US tech conglomerate Meta.[11] It allows users to send text and voice messages,[12] make voice and video calls, and share images, documents, user locations, and other content.[13][14] WhatsApp's client application runs on mobile devices, and can be accessed from computers."
    },{
        name:"https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6304a2578abd315b18c8f6e9_twitter-logo.png",
        title:"Twitter is an online social media and social networking service owned and operated by American company X Corp., the legal successor of Twitter, Inc. On Twitter users post or reply to texts, images and videos known as tweets.[9][10] Registered users can tweet, like, retweet tweets, and direct message (DM) other registered users, while unregistered users only have the ability to view public tweets."
    },{
        name:"https://images.news18.com/ibnlive/uploads/2015/12/Yahoo-logo.gif?im=FitAndFill,width=1200,height=1200",
        title:"Yahoo! (/ˈjɑːhuː/, styled yahoo! in its logo)[4][5] is an American web services provider. It is headquartered in Sunnyvale, California and operated by the namesake company Yahoo! Inc., which is 90% owned by investment funds managed by Apollo Global Management and 10% by Verizon Communications.        It provides a web portal, search engine Yahoo Search, and related services, including My Yahoo!"
    }]
    return (
        <>
            <Header />
            <div>
                <h1 style={{marginLeft:"14vw",marginTop:"10vh"}}>Discover Spaces</h1>
                <p  style={{marginLeft:"14vw", marginBottom:"10vh"}}>Spaces you might like.</p>

                <div className='spaceCollection'>
                    {spacLIst.map((data,id)=>{
                        return (
                            <div key={id} class="card" style={{width: "18vw"}}>
                            <img style={{height:"25vh"}} src={data.name} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">{data.title}</p>
                                </div>
                        </div>

                        )

                    })

                    }
                   
                </div>

            </div>

        </>
    )
}

export default Spacelist
