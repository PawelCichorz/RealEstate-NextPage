
"use client"
import * as S from './authStyles'

function Auth () {








    return(
        <S.Container>

            <S.StyledLink href="/addoffers" passHref>
                <S.ButtonOffers >Dodaj Ofertę</S.ButtonOffers>
            </S.StyledLink>
            <S.StyledLink href="/offers" passHref>
                <S.ButtonPromote >Wybierz Oferty Promowane</S.ButtonPromote>
            </S.StyledLink>
        </S.Container>
    )
}

export default Auth