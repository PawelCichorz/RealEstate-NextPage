"use cilent"
import MyImage from "./Components/Image";
import RedBanner from "./Components/RedBanner";
import PromotedOffers from "./Components/PromotedOffer";
import * as S from "./MainPageStyled"

export default function Home() {
  return (
    <>
    <S.ImageDiv>
<MyImage />
    </S.ImageDiv>
<RedBanner text="Bądź zawsze na bieżąco, zapisz się do Newslettera"
        buttonText="Zapisz się"/>
        <PromotedOffers/>
</>

  );
}
