'use client';
import * as S from './AgentsStyled';
import Image from 'next/image';
import agent from '../../../public/assets/image/agent.jpeg';

const Agents = () => {
  return (
    <S.Container>
      <h2>Lista Agentów</h2>
      <S.Box>
        <Image src={agent} alt="logo" width={200} />
        <S.Name>Krzysztof Krzysztof</S.Name>
        <S.Phone>
          Tel: <p>666 666 777</p>
        </S.Phone>
        <S.Email>
          Email<p>pankowski@gmail.com</p>
        </S.Email>
      </S.Box>
      <S.Box>
        <Image src={agent} alt="logo" width={200} />
        <S.Name>Krzysztof Krzysztof</S.Name>
        <S.Phone>
          Tel: <p>666 666 777</p>
        </S.Phone>
        <S.Email>
          Email<p>pankowski@gmail.com</p>
        </S.Email>
      </S.Box>
      <S.Box>
        <Image src={agent} alt="logo" width={200} />
        <S.Name>Krzysztof Krzysztof</S.Name>
        <S.Phone>
          Tel: <p>666 666 777</p>
        </S.Phone>
        <S.Email>
          Email<p>pankowski@gmail.com</p>
        </S.Email>
      </S.Box>
    </S.Container>
  );
};

export default Agents;
