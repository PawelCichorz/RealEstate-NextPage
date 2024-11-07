'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Search from '../../Components/Search';
import { ObjectId } from 'mongodb';
import Cookies from 'js-cookie';
import RedBanner from '../../Components/RedBanner';
import * as S from './idOffersStyled';
import SmallPromotedOffer from '../../Components/SmallPromotedOffer';

interface IOffer {
  _id: ObjectId;
  rodzaj: 'sprzedaż' | 'wynajem';
  kategoria: 'dom' | 'działka' | 'mieszkanie';
  gmina: 'Skawina' | 'Brzeźnica' | 'Kraków';
  miejscowość:
    | 'Skawina'
    | 'Radziszów'
    | 'Borek Szlachecki'
    | 'Brzeźnica'
    | 'Sosnowice'
    | 'Kraków'
    | 'Rzozów';
  powierzchnia: number;
  cena: number;
  woda: 'tak' | 'nie';
  gaz: 'tak' | 'nie';
  prąd: 'tak' | 'nie';
  opis: string;
  imageUrls: string[];
  date: string;
  promote: boolean;
}

const OfferDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [offer, setOffer] = useState<IOffer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const accessToken = Cookies.get('accessToken');
      console.log(accessToken);
      setIsUserLoggedIn(!!accessToken);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const fetchOffer = async () => {
      if (!id) return;

      try {
        const response = await fetch(`/api/offers/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch offer');
        }

        const data: IOffer = await response.json();

        setOffer(data);
      } catch (err) {
        setError('Failed to fetch offer');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOffer();
  }, [id, offer?.promote]);

  const handleImageClick = () => {
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const handlePrevImage = () => {
    setOffer((prevOffer) => {
      if (
        !prevOffer ||
        !prevOffer.imageUrls ||
        prevOffer.imageUrls.length === 0
      )
        return prevOffer;
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevOffer.imageUrls.length - 1
      );
      return prevOffer;
    });
  };

  const handleNextImage = () => {
    setOffer((prevOffer) => {
      if (
        !prevOffer ||
        !prevOffer.imageUrls ||
        prevOffer.imageUrls.length === 0
      )
        return prevOffer;
      setCurrentImageIndex((prevIndex) =>
        prevIndex < prevOffer.imageUrls.length - 1 ? prevIndex + 1 : 0
      );
      return prevOffer;
    });
  };

  const handlePromote = async () => {
    if (!offer) return;
    try {
      const response = await fetch(`/api/offers/${id}/promote`, {
        method: 'PUT',
      });
      if (response.ok) {
        const updatedOffer = await response.json();
        setOffer(updatedOffer);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (err) {
      console.error('Failed to promote offer', err);
    }
  };

  const handleDeleteOffer = async () => {
    if (!offer) return;
    try {
      const response = await fetch(`/api/offers/${id}/delete`, {
        method: 'DELETE',
      });
      if (response.ok) {
        router.push('/offers');
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (err) {
      console.error('Failed to delete offer', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!offer) return <p>No offer found</p>;

  return (
    <>
      <RedBanner text="Oferta" buttonText="" />
      <S.Container>
        <S.OfferWrapper>
          <p>
            <strong>Numer Oferty:</strong>{' '}
            {offer._id ? offer._id.toString() : 'Brak ID'}
          </p>
          <p>
            {offer.kategoria} -
            {offer.rodzaj === 'sprzedaż' ? 'Sprzedaż' : 'Wynajem'}
          </p>
          {isUserLoggedIn && (
            <div>
              <S.PromoteButton onClick={handlePromote}>
                {!offer.promote ? 'Promuj' : 'Usuń Promowanie'}
              </S.PromoteButton>

              <S.PromoteButton onClick={handleDeleteOffer}>
                Usuń ofertę
              </S.PromoteButton>
            </div>
          )}
          {/* Main image */}
          <S.MainImageWrapper>
            {offer && offer.imageUrls && offer.imageUrls.length > 0 && (
              <Image
                src={offer.imageUrls[0]}
                alt="Main Offer Image"
                fill
                style={{ cursor: 'pointer', objectFit: 'cover' }}
                onClick={handleImageClick}
              />
            )}
          </S.MainImageWrapper>
          <S.DetailsWrapper>
            <div>
              <p>{offer.miejscowość}</p>
              <S.PriceParagraph>
                <strong>cena:</strong> {offer.cena} PLN
              </S.PriceParagraph>
              <p>
                <strong>Gmina:</strong> {offer.gmina}
              </p>
              <p>
                <strong>Powierzchnia:</strong> {offer.powierzchnia} m²
              </p>
              <p>
                <strong>Woda:</strong> {offer.woda}
              </p>
            </div>
            <div>
              <p>
                <strong>Opis:</strong> {offer.opis}
              </p>
            </div>
          </S.DetailsWrapper>
        </S.OfferWrapper>
        <S.SearchPromoted className="flex items-center">
          <Search />
          <SmallPromotedOffer />
        </S.SearchPromoted>

        {isGalleryOpen && offer.imageUrls.length > 0 && (
          <S.GalleryModal>
            <S.CloseButton onClick={closeGallery}>X</S.CloseButton>
            <S.PrevButton onClick={handlePrevImage}>&lt;</S.PrevButton>
            <div style={{ position: 'relative' }}>
              <S.GalleryImage
                src={offer.imageUrls[currentImageIndex]}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                width={800}
                height={600}
              />
            </div>
            <S.NextButton onClick={handleNextImage}>&gt;</S.NextButton>
          </S.GalleryModal>
        )}
      </S.Container>
    </>
  );
};

export default OfferDetail;
