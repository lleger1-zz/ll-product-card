import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product1 } from '../data/product';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="url/test" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente correctamente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
