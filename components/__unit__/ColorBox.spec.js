import ColorBox from '../ColorBox';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

describe('ColorBox', () => {
  let box;

  beforeEach(() => {
    box = TestUtils.renderIntoDocument(<ColorBox />);
  });

  it('is red by default', () => {
    expect(box.props.color).toBe('red');
  });

  it('renders a click count', () => {
    const node = React.findDOMNode(box);
    expect(node.innerText).toBe("0");

    TestUtils.Simulate.click(React.findDOMNode(box));

    expect(node.innerText).toBe("1");
  });
});