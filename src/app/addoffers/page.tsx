'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as S from './offerStyles';

interface FormData {
  rodzaj: string;
  kategoria: string;
  gmina: string;
  miejscowość: string;
  powierzchnia: number;
  cena: number;
  woda: string;
  gaz: string;
  prąd: string;
  opis: string;
  images: FileList;
}

const rodzajOptions = [
  { value: 'sprzedaż', label: 'Sprzedaż' },
  { value: 'wynajem', label: 'Wynajem' },
];

const kategoriaOptions = [
  { value: 'dom', label: 'Dom' },
  { value: 'działka', label: 'Działka' },
  { value: 'mieszkanie', label: 'Mieszkanie' },
];

const gminaOptions = [
  { value: 'Skawina', label: 'Skawina' },
  { value: 'Brzeźnica', label: 'Brzeźnica' },
  { value: 'Kraków', label: 'Kraków' },
];

const wodaOptions = [
  { value: 'tak', label: 'Tak' },
  { value: 'nie', label: 'Nie' },
];

const gazOptions = [
  { value: 'tak', label: 'Tak' },
  { value: 'nie', label: 'Nie' },
];

const prądOptions = [
  { value: 'tak', label: 'Tak' },
  { value: 'nie', label: 'Nie' },
];

function OfferForm() {
  const [error, setError] = useState<string>('');
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      rodzaj: 'sprzedaż',
      kategoria: 'dom',
      gmina: 'Skawina',
      miejscowość: 'Skawina',
      powierzchnia: 0,
      cena: 0,
      woda: 'tak',
      gaz: 'tak',
      prąd: 'tak',
      opis: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();

      for (const [key, value] of Object.entries(data)) {
        if (key === 'images') {
          Array.from(value as FileList).forEach((file) =>
            formData.append('images', file)
          );
        } else {
          formData.append(key, value as string | Blob);
        }
      }

      const response = await fetch('/api/addoffers', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      setError('Oferta została dodana');
      reset();
    } catch (err) {
      console.error('Error submitting offer:', err);
      setError('Błąd podczas dodawania oferty');
    }
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>
          Rodzaj:
          <S.SelectInput {...register('rodzaj')}>
            {rodzajOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Kategoria:
          <S.SelectInput {...register('kategoria')}>
            {kategoriaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Gmina:
          <S.SelectInput {...register('gmina')}>
            {gminaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Miejscowość:
          <S.SelectInput {...register('miejscowość')}>
            {gminaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Powierzchnia:
          <S.TextInput
            type="number"
            {...register('powierzchnia', { required: true })}
          />
          {errors.powierzchnia && (
            <S.ErrorMessage>Wymagane pole</S.ErrorMessage>
          )}
        </S.Label>
        <S.Label>
          Cena:
          <S.TextInput
            type="number"
            {...register('cena', { required: true })}
          />
          {errors.cena && <S.ErrorMessage>Wymagane pole</S.ErrorMessage>}
        </S.Label>
        <S.Label>
          Woda:
          <S.SelectInput {...register('woda')}>
            {wodaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Gaz:
          <S.SelectInput {...register('gaz')}>
            {gazOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Prąd:
          <S.SelectInput {...register('prąd')}>
            {prądOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Opis:
          <S.TextArea {...register('opis')} />
        </S.Label>
        <S.Label>
          Zdjęcia:
          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <S.TextInput
                type="file"
                multiple
                onChange={(e) => field.onChange(e.target.files)}
              />
            )}
          />
        </S.Label>
        <S.SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Dodawanie...' : 'Dodaj Ofertę'}
        </S.SubmitButton>
      </form>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.FormContainer>
  );
}

export default OfferForm;
