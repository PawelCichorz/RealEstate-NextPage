'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import RedBanner from '../Components/RedBanner';
import Search from '../Components/Search';
import SmallPromotedOffer from '../Components/SmallPromotedOffer';
import Image from 'next/image';
import { ObjectId } from 'mongodb';
import * as S from './offersStyled';

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
}

function Offers() {
  const [offers, setOffers] = useState<IOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const offersPerPage = 10;

  const truncateDescription = (description: string, wordLimit: number) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  const fetchOffers = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/offers?page=${page}&limit=${offersPerPage}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch offers');
      }
      const data = await response.json();
      setOffers(data.offers);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (err) {
      setError('Failed to fetch offers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <RedBanner text="Oferty" buttonText="" />
      <S.Container>
        <S.OffersList>
          {offers.map((offer) => (
            <S.OfferCard key={offer.date}>
              <S.ImageWrapper>
                {offer.imageUrls.length > 0 ? (
                  <Image
                    src={offer.imageUrls[0]}
                    alt={`Offer Image 1`}
                    fill
                    style={{ cursor: 'pointer', objectFit: 'cover' }}
                  />
                ) : (
                  <p>No images available</p>
                )}
              </S.ImageWrapper>
              <S.DetailsWrapper>
                <div>
                  <h2>
                    <p>
                      {' '}
                      {offer.kategoria} -{' '}
                      {offer.rodzaj === 'sprzedaż' ? 'sprzedaż' : 'wynajem'}
                    </p>
                  </h2>
                  <p> {offer.miejscowość}</p>
                  <S.PriceParagraph>
                    {' '}
                    <p>{offer.cena}</p> PLN
                  </S.PriceParagraph>
                  <p>
                    <strong>Opis:</strong> {truncateDescription(offer.opis, 10)}
                  </p>
                  <Link href={`/offers/${offer._id}`} passHref>
                    <S.MoreButton>Więcej</S.MoreButton>
                  </Link>
                </div>
                <div>
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
              </S.DetailsWrapper>
            </S.OfferCard>
          ))}
          <S.Pagination>
            {Array.from({ length: totalPages }, (_, index) => (
              <S.PageNumber
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                style={{
                  fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                }}
              >
                {index + 1}
              </S.PageNumber>
            ))}
          </S.Pagination>
        </S.OffersList>
        <S.Box className="flex items-center">
          <Search />
          <SmallPromotedOffer />
        </S.Box>
      </S.Container>
    </>
  );
}

export default Offers;
