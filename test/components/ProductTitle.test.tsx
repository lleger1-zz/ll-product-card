import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from '../data/product';

describe('ProductTitle', () => {
  test('debe mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Coffee Mug" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente correctamente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
