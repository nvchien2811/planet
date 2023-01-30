import * as React from "react"
import Svg, { Circle, G, Mask, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={300}
      height={300}
      viewBox="0 0 458 458"
      fill="none"
      {...props}
    >
      <Circle cx={229} cy={229} r={229} fill="#65F0D5" />
      <Mask
        id="prefix__a"
        x={0}
        y={0}
        width={458}
        height={458}
      >
        <Circle cx={229} cy={229} r={229} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M445.12-150c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-156c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm0 220c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V-8h-.01c-.262-6.395-5.53-11.5-11.99-11.5S397.392-14.395 397.13-8h-.01v160c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-257c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v49c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-30c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12V70zm-96-205c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm0 287c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V79c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm-12 264c6.628 0 12-5.373 12-12V238c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v166c0 6.627 5.373 12 12 12zm84-190c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v257c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V274h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01v24c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V142c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v84zm12 298c6.628 0 12-5.373 12-12V356c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156c0 6.627 5.373 12 12 12z"
          fill="#49CBC2"
        />
      </G>
      <Mask
        id="prefix__b"
        x={0}
        y={0}
        width={458}
        height={458}
      >
        <Circle cx={229} cy={229} r={229} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M181.12-220c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-156c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156zm0 220c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-78h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01V82c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-257c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v49c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-30c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12V0zm96-205c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-73c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v73zm0 287c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v73zm12 264c-6.627 0-12-5.373-12-12V168c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v166c0 6.627-5.372 12-12 12zm-84-190c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-9c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v257c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V204h-.01c-.262-6.395-5.53-11.5-11.99-11.5s-11.728 5.105-11.99 11.5h-.01v24c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12V72c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v84zm-12 298c-6.627 0-12-5.373-12-12V286c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156c0 6.627-5.372 12-12 12z"
          fill="#50DECD"
        />
      </G>
      <Mask
        id="prefix__c"
        x={0}
        y={0}
        width={458}
        height={458}
      >
        <Circle cx={229} cy={229} r={229} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__c)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M157.12-253c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-156c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm0 220c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-78h-.01c-.262-6.395-5.53-11.5-11.99-11.5s-11.728 5.105-11.99 11.5h-.01V49c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-257c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v49c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12v-30c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v156zm-96-205c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm0 287c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-73c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12v73zm-12 264c6.628 0 12-5.373 12-12V135c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v166c0 6.627 5.373 12 12 12zm84-190c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12v-9c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v257c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V171h.01c.262-6.395 5.53-11.5 11.99-11.5s11.728 5.105 11.99 11.5h.01v24c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12V39c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v84zm12 298c6.628 0 12-5.373 12-12V253c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12v156c0 6.627 5.373 12 12 12z"
          fill="#77FFF5"
        />
      </G>
      <Mask
        id="prefix__d"
        x={0}
        y={0}
        width={458}
        height={458}
      >
        <Circle cx={229} cy={229} r={229} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__d)">
        <Path opacity={0.078} fill="#000" d="M229 0h229v458H229z" />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M229 450c122.055 0 221-98.945 221-221S351.055 8 229 8v442z"
        fill="#138B83"
      />
      <Mask
        id="prefix__e"
        x={229}
        y={8}
        width={221}
        height={442}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M229 450c122.055 0 221-98.945 221-221S351.055 8 229 8v442z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__e)">
        <Circle cx={230} cy={229} r={145} fill="#1BB9AE" />
        <Circle cx={228.5} cy={229.5} r={32.5} fill="#06504C" />
      </G>
    </Svg>
  )
}

export default SvgComponent
