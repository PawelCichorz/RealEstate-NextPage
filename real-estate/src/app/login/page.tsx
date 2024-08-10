import { fetchOffers } from '../lib/api';

const Page = async () => {
  const offers = await fetchOffers();
  console.log(offers)


  return (
    <div>
      <h1>Oferty Nieruchomości</h1>
      <ul>
        {offers.map((offer: any) => (
          <li key={offer._id}>
            {offer.rodzaj} - {offer.kategoria} - {offer.miejscowosc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;