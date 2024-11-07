'use cilent';
import MyImage from './Components/Image';
import RedBanner from './Components/RedBanner';
import PromotedOffers from './Components/PromotedOffer';
import Search from './Components/Search';
import * as S from './MainPageStyled';
import Agents from './Components/Agents';
import Comments from './Components/Comments';

export default function Home() {
  return (
    <S.Container>
      <S.ImageDiv>
        <MyImage />
      </S.ImageDiv>
      <RedBanner
        text="Bądź zawsze na bieżąco, zapisz się do Newslettera"
        buttonText="Zapisz się"
      />
      <S.PromotedandSearch>
        <PromotedOffers />
        <div>
          <Search />
          <Agents />
        </div>
      </S.PromotedandSearch>
      <Comments />
    </S.Container>
  );
}
