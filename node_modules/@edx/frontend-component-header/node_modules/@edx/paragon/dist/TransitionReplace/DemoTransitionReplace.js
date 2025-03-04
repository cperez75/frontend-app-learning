import React, { useState } from 'react';
import TransitionReplace from './index';
export default function DemoTransitionReplace() {
  const contentOptions = [/*#__PURE__*/React.createElement("blockquote", {
    className: "h2 m-0",
    key: 0
  }, /*#__PURE__*/React.createElement("p", null, "You know the golden rule, don\u2019t you boy? Those who have the gold make the rules."), /*#__PURE__*/React.createElement("footer", null, "\u2014 Crazy hunch-backed old guy in Aladdin")), /*#__PURE__*/React.createElement("blockquote", {
    className: "m-0",
    key: 1
  }, /*#__PURE__*/React.createElement("p", null, "People say nothing is impossible, but I do nothing every day."), /*#__PURE__*/React.createElement("footer", null, "\u2014 A. A. Milne")), /*#__PURE__*/React.createElement("blockquote", {
    className: "h2 m-0",
    key: 2
  }, /*#__PURE__*/React.createElement("p", null, "I won\u2019t go into a big spiel about reincarnation, but the first time I was in the Gucci store in Chicago was the closest I\u2019ve ever felt to home."), /*#__PURE__*/React.createElement("footer", null, "\u2014 Kanye")), /*#__PURE__*/React.createElement("blockquote", {
    className: "m-0",
    key: 3
  }, /*#__PURE__*/React.createElement("p", null, "The first time I see a jogger smiling, I\u2019ll consider it."), /*#__PURE__*/React.createElement("footer", null, "\u2014 Joan Rivers"))];
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const changeContent = () => {
    setCurrentContentIndex((currentContentIndex + 1) % contentOptions.length);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary mb-2",
    onClick: changeContent
  }, "Next Quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#eee',
      padding: '1rem',
      maxWidth: '15rem'
    }
  }, /*#__PURE__*/React.createElement(TransitionReplace, null, contentOptions[currentContentIndex])));
}
//# sourceMappingURL=DemoTransitionReplace.js.map