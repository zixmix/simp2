import React from "react";
import TopBar from "../../components/Layout/components/TopBar/TopBar";
import Header from "../../components/Layout/components/Header/Header";
import Footer from "../../components/Layout/components/Footer/Footer";
import HomeBody from "../../components/Layout/components/Body/HomeBody";

export default function ContactUs({childern})
{
    return(
        <div>
            <>
                <TopBar/>
                <Header/>
                <h1> Zeljko Car - Kontakt STRANA</h1>
                <Footer/>
                {childern}
            </>
        </div>
    )
}