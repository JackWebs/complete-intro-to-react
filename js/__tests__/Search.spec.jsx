import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house';
  const expectedShowCount = 1;
  const component = shallow(<Search />);
  component.find('input').simulate('change',{target:{value: searchWord}});
  const actualShowCount = preload.shows.filter((show) => `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(searchWord.toUpperCase())).length;
  expect(actualShowCount).toEqual(expectedShowCount);
});
