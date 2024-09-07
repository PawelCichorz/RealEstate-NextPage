'use client';

import React, { useState } from 'react';
import * as S from './CommentsStyled';

interface Comment {
  name: string;
  text: string;
}

const comments: Comment[] = [
  {
    name: 'Olek',
    text: 'Świetna współpraca z biurem nieruchomości! Dzięki nim udało mi się szybko sprzedać dom w bardzo dobrej cenie. Profesjonalizm na najwyższym poziomie. Gorąco polecam każdemu, kto szuka rzetelnego pośrednika.',
  },
  {
    name: 'Paweł',
    text: 'Jestem bardzo zadowolony z usług tego biura nieruchomości. Pomogli mi znaleźć idealne mieszkanie w centrum miasta. Proces zakupu przebiegł sprawnie i bez żadnych komplikacji. Zdecydowanie polecam!',
  },
  {
    name: 'Krzysztof',
    text: 'Biuro nieruchomości, które naprawdę dba o klienta. Bardzo profesjonalne podejście i wsparcie na każdym etapie sprzedaży mieszkania. Dziękuję za pomoc i na pewno wrócę przy kolejnej transakcji.',
  },
];

const Comments = () => {
  const [currentComment, setCurrentComment] = useState<number>(0);

  return (
    <S.Container>
      <h2>Opinie</h2>
      <S.Box>
        <S.Comments>{comments[currentComment].text}</S.Comments>
        <S.Name>{comments[currentComment].name}</S.Name>
      </S.Box>
      <S.Navigation>
        {comments.map((_, index) => (
          <S.NavButton
            key={index}
            isActive={currentComment === index ? 'true' : 'false'}
            onClick={() => setCurrentComment(index)}
          />
        ))}
      </S.Navigation>
    </S.Container>
  );
};

export default Comments;
