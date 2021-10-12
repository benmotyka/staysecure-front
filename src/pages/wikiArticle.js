import React from 'react'

import Navbar from 'components/Navbar/Navbar'
import SimilarArticles from 'components/PreviewItems/SimilarArticles'
import Footer from 'components/Footer/Footer'
import {PageWrapper} from 'components/Pages/Pages.styles'
import Article from 'components/Article/Article'

const wikiArticle = (props) => {
    return (
        <>
            <Navbar/>
            <PageWrapper>
            <Article name={props.match.params.articleName}/>
            <SimilarArticles/>
            </PageWrapper>
            <Footer/>
        </>
    )
}

export default wikiArticle
