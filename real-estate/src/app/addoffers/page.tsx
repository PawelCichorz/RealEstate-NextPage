'use client';

import React, { useState } from 'react';
import * as S from './offerStyles' // Import stylów

function OfferForm() {
  const [formData, setFormData] = useState({
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
  });

  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      // Add form data
      for (const key in formData) {
        const value = formData[key as keyof typeof formData];
        // Convert number to string
        formDataToSend.append(key, value.toString());
      }
      // Add images
      images.forEach(image => {
        formDataToSend.append('images', image);
      });

      const response = await fetch('/api/addoffers', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to submit offer');
      }

      const result = await response.json();
      console.log('Offer submitted successfully:', result);
      // Clear form data
      setFormData({
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
      });
      setImages([]);
    } catch (err) {
      setError('Failed to submit offer');
      console.error(err);
    } finally {
      setLoading(false);
      setError('Ofeta została dodana');
    }
  };

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmit}>
        <S.Label>
          Rodzaj:
          <S.SelectInput name="rodzaj" value={formData.rodzaj} onChange={handleChange}>
            <option value="sprzedaż">Sprzedaż</option>
            <option value="wynajem">Wynajem</option>
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Kategoria:
          <S.SelectInput name="kategoria" value={formData.kategoria} onChange={handleChange}>
            <option value="dom">Dom</option>
            <option value="działka">Działka</option>
            <option value="mieszkanie">Mieszkanie</option>
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Gmina:
          <S.SelectInput name="gmina" value={formData.gmina} onChange={handleChange}>
            <option value="Skawina">Skawina</option>
            <option value="Brzeźnica">Brzeźnica</option>
            <option value="Kraków">Kraków</option>
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Miejscowość:
          <S.SelectInput name="miejscowość" value={formData.miejscowość} onChange={handleChange}>
          <option value="Skawina">Skawina</option>
            <option value="Brzeźnica">Brzeźnica</option>
            <option value="Kraków">Kraków</option>
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Powierzchnia:
          <S.TextInput
            type="number"
            name="powierzchnia"
            value={formData.powierzchnia}
            onChange={handleChange}
          />
        </S.Label>
        <S.Label>
          Cena:
          <S.TextInput
            type="number"
            name="cena"
            value={formData.cena}
            onChange={handleChange}
          />
        </S.Label>
        <S.Label>
          Woda:
          <S.SelectInput name="woda" value={formData.woda} onChange={handleChange}>
            <option value="tak">Tak</option>
            <option value="nie">Nie</option>
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Gaz:
          <S.SelectInput name="gaz" value={formData.gaz} onChange={handleChange}>
            <option value="tak">Tak</option>
            <option value="nie">Nie</option>
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Prąd:
          <S.SelectInput name="prąd" value={formData.prąd} onChange={handleChange}>
            <option value="tak">Tak</option>
            <option value="nie">Nie</option>
          </S.SelectInput>
        </S.Label>
        <S.Label>
          Opis:
          <S.TextArea
            name="opis"
            value={formData.opis}
            onChange={handleChange}
          />
        </S.Label>
        <S.Label>
          Zdjęcia:
          <S.TextInput
            type="file"
            multiple
            onChange={handleImageChange}
          />
        </S.Label>
        <S.SubmitButton type="submit" disabled={loading}>
          {loading ? 'Dodawanie...' : 'Dodaj Ofertę'}
        </S.SubmitButton>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </form>
    </S.FormContainer>
  );
}

export default OfferForm;
