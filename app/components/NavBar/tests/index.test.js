/**
 *
 * Tests for NavBar
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NavBar from '../index';

const renderer = new ShallowRenderer();
describe('<NavBar />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<NavBar />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
