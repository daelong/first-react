import React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext"; //구분을 위해 displayName설정

export default ThemeContext;

// context의 초기값 별도 설정 안함, 이후 provider에서 설정할거임
