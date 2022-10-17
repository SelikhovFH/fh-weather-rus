import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByPlaceId, Suggestion
} from 'react-places-autocomplete';

import LanguageButton from '../buttons/LanguageButton';
import Logo from '../img/searchbar-logo.png';
import { serviceIcons } from '../../assets/Icons';

const Searchbar: FC = () => {
  const [input, setInput] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const getLatAndLng = async (
    placeId: string,
  ): Promise<{ lat: number; lon: number }> => {
    const res: google.maps.GeocoderResult[] = await geocodeByPlaceId(placeId);
    return {
      lat: res[0].geometry.location.lat(),
      lon: res[0].geometry.location.lng(),
    };
    console.log(res[0].geometry.location.lat(), res[0].geometry.location.lng());
  };

  return (
    <div className='pt-8 pb-20 w-full flex justify-between text-black'>
      <div className='flex items-center'>
        <img src={Logo} alt='' />
      </div>

      <PlacesAutocomplete
        value={input}
        onChange={setInput}
        onSelect={setInput}
        onError={() => console.log('err')}
        debounce={1000}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className='relative flex items-center justify-between border-1px border-primary-blue rounded-primary bg-white w-45vw z-20'>
              <input
                {...getInputProps({
                  placeholder:
                    'Название населенного пункта , страны или региона',
                  className:
                    'outline-none font-Mulish font-light text-2xl placeholder:text-base placeholder:font-Montserrat mx-7 py-5 w-[40vw]',
                  onBlur: () => setIsHidden(true),
                  onFocus: () => setIsHidden(false),
                })}
              />
              <img
                className='cursor-pointer px-5 '
                src={serviceIcons['search-outlined']}
                alt=''
              />
              <ul
                className={`${
                  suggestions.length || loading ? '' : 'hidden'
                } py-7 absolute w-full border-1px border-primary-blue bg-white rounded-primary top-[110%]`}>
                {(suggestions as Suggestion[]).map(item => (
                  <li
                    {...getSuggestionItemProps(item, {
                      onClick: () => getLatAndLng(item.placeId),
                      className:
                        'font-Mulish font-normal text-2xl py-2.5 px-8 hover:bg-light-blue hover:text-white cursor-pointer z-30',
                    })}
                    key={item.placeId}>
                    <span className='font-bold'>
                      {item.formattedSuggestion.mainText},{' '}
                    </span>
                    {item.formattedSuggestion.secondaryText}
                  </li>
                ))}
                {loading && (
                  <li className='font-Mulish font-normal text-2xl py-2.5 px-8 hover:bg-light-blue hover:text-white cursor-pointer z-30'>
                    Loading
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <div className='flex justify-between items-center'>
        <Link to={'/'}>
          <img className='mr-4' src={serviceIcons['home-outlined']} />
        </Link>
        <LanguageButton text='RU' selected />
        <LanguageButton text='UA' />
      </div>

      <div
        className={`${
          isHidden ? 'hidden' : ''
        } w-screen h-screen fixed top-0 left-0 bg-search-shadow bg-opacity-50 z-10`}></div>
    </div>
  );
};

export default Searchbar;
