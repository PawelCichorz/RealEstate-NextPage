'use client';

import Search from '../Components/Search';
import SmallPromotedOffer from '../Components/SmallPromotedOffer';
import Comments from '../Components/Comments';
import * as S from './AboutStyled';
import pageContent from './PAGE-CONTENT.json';

const About = () => {
  return (
    <>
      <S.StyledRedBanner text="Firma" buttonText="" />
      <S.Container>
        <S.About>
          {pageContent.about[0]}
          <S.Span />
          {pageContent.about[1]}
          <S.Span />
          {pageContent.about[2]}
          <S.Span />
          {pageContent.about[3]}
          <Comments />
        </S.About>

        <S.SearchPromoted>
          <Search />
          <SmallPromotedOffer />
        </S.SearchPromoted>
      </S.Container>
    </>
  );
};

export default About;
