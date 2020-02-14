import Header from './Header'
import '../styles/Style.css';
import '../styles/sass/home.scss';
import Head from "next/head";
import React from "react";

const  Layout = (props) => {
    return (
        <div>
            <Head>
                <title> NextJS App</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
            </Head>
            <Header />
            {props.children}
        </div>
    )
}
export default Layout;
