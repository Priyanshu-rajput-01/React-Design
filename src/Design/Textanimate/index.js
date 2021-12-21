import React from 'react';
import "./style.css";
export default function Index() {
    return (
        <div>
            <svg viewBox="0 0 1320 300">
    <defs>
      <pattern id="GPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
        <animatetransform attributeType="xml" attributeName="patternTransform" type="rotate" from="35" to="395" begin="0" dur="160s" repeatCount="indefinite"></animatetransform>
        <circle cx="10" cy="10" r="10" stroke="none" fill="yellow">
          <animate attributeName="r" type="xml" from="1" to="1" values="1; 10; 1" begin="0s" dur="2s" repeatCount="indefinite"></animate>
        </circle>
      </pattern>
      <pattern id="SPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(100)">
        <animatetransform attributeType="xml" attributeName="patternTransform" type="rotate" from="100" to="400" begin="0" dur="10s" repeatCount="indefinite"></animatetransform>
        <circle cx="10" cy="10" r="10" stroke="white" fill="Green">
          <animate attributeName="r" type="xml" from="1" to="1" values="1; 10; 1" begin="0s" dur="2s" repeatCount="indefinite"></animate>
        </circle>
      </pattern>
    </defs>
    {/* symbol text starts here */}
    <symbol id="s-text">
        <text textAnchor="middle" x="25%" y="50%" dy=".35em">S</text>
      </symbol>
    <symbol id="p-text">
      <text textAnchor="middle" x="40%" y="50%" dy=".35em">P</text>
    </symbol>
    <symbol id="e-text">
      <text textAnchor="middle" x="55%" y="50%" dy=".35em">E</text>
    </symbol>
    <symbol id="c-text">
      <text textAnchor="middle" x="70%" y="50%" dy=".35em">c</text>
    </symbol>
    <use className="text" xlinkHref="#p-text"></use>
    <use className="text" xlinkHref="#p-text"></use>
    <use className="text" xlinkHref="#p-text"></use>
    <use className="text" xlinkHref="#p-text"></use>
    <use className="text" xlinkHref="#p-text"></use>
    <use className="text1" xlinkHref="#e-text"></use>
    <use className="text1" xlinkHref="#e-text"></use>
    <use className="text1" xlinkHref="#e-text"></use>
    <use className="text2" id="c-usetag" xlinkHref="#s-text" style={{fill: "url(#SPattern)"}}></use>
    <use className="text2" id="g-usetag" xlinkHref="#c-text" style={{fill: "url(#GPattern)"}}></use>
  </svg>
        </div>
    )
}
