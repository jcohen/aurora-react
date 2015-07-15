import { assert } from 'chai';
import Header from '../Header';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;

function shallowRender(component) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(component, {});
  return shallowRenderer.getRenderOutput();
}

suite('Header', () => {
  test('renders successfully', () => {
    const child = <span>Hello World!</span>;
    const header = shallowRender(<Header>{child}</Header>);

    // These are not the most useful asserts, they're just intended to illustrate what's possible.
    assert.equal(header.type, 'div');
    assert.equal(header.props.className, 'page-header');

    const renderedChild = header.props.children;
    assert.equal(renderedChild.type, 'h2');
    assert.equal(renderedChild.props.className, 'text-center');

    const renderedContent = renderedChild.props.children;
    assert.equal(renderedContent, child);
  });
});
