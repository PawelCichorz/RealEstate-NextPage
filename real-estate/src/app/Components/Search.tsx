'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as S from './SearchStyled';

interface SearchFormInputs {
  rodzaj?: string;
  kategoria?: string;
  gmina?: string;
  miejscowość?: string;
  cenaMin?: number;
  cenaMax?: number;
  powierzchniaMin?: number;
  powierzchniaMax?: number;
}

const Search = () => {
  const { register, handleSubmit } = useForm<SearchFormInputs>();
  const router = useRouter();

  const onSubmit = (data: SearchFormInputs) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = new URLSearchParams(data as any).toString();
    router.push(`/offersearch?${query}`);
  };

  return (
    <S.Search onSubmit={handleSubmit(onSubmit)}>
      <S.Select {...register('rodzaj')}>
        <option value="">Wybierz rodzaj</option>
        <option value="sprzedaż">Sprzedaż</option>
        <option value="wynajem">Wynajem</option>
      </S.Select>

      <S.Select {...register('kategoria')}>
        <option value="">Wybierz kategorię</option>
        <option value="dom">Dom</option>
        <option value="działka">Działka</option>
        <option value="mieszkanie">Mieszkanie</option>
      </S.Select>

      <S.Select {...register('gmina')}>
        <option value="">Wybierz gminę</option>
        <option value="Skawina">Skawina</option>
        <option value="Brzeźnica">Brzeźnica</option>
        <option value="Kraków">Kraków</option>
      </S.Select>

      <S.Select {...register('miejscowość')}>
        <option value="">Wybierz miejscowość</option>
        <option value="Skawina">Skawina</option>
        <option value="Radziszów">Radziszów</option>
        <option value="Borek Szlachecki">Borek Szlachecki</option>
        <option value="Brzeźnica">Brzeźnica</option>
        <option value="Sosnowice">Sosnowice</option>
        <option value="Kraków">Kraków</option>
        <option value="Rzozów">Rzozów</option>
      </S.Select>

      <S.RangeContainer>
        <S.RangeInput
          type="number"
          placeholder="Cena od"
          {...register('cenaMin')}
        />

        <S.RangeInput
          type="number"
          placeholder="Cena do"
          {...register('cenaMax')}
        />
      </S.RangeContainer>

      <S.RangeContainer>
        <S.RangeInput
          type="number"
          placeholder="Powierzchnia od"
          {...register('powierzchniaMin')}
        />

        <S.RangeInput
          type="number"
          placeholder="Powierzchnia do"
          {...register('powierzchniaMax')}
        />
      </S.RangeContainer>

      <S.SearchButton type="submit">Szukaj</S.SearchButton>
    </S.Search>
  );
};

export default Search;
