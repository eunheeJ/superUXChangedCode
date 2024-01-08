SuperUx Custom code 변환기 입니다.

## 선언된 변수 입력란

선언된 변수 입력란에는 선언된 변수들을 입력해 주시면 됩니다.

예를 들어,

dist > main.js 에서

```javascript
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ =
  __webpack_require__(
    /*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"
  );
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ =
  __webpack_require__(
    /*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js"
  );
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ =
  __webpack_require__(
    /*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js"
  );
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ =
  __webpack_require__(
    /*! @mui/material */ "./node_modules/@mui/material/Box/Box.js"
  );
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
  __webpack_require__(/*! react */ "./node_modules/react/index.js");

const CustomComponent = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
  ({ className, children, dummyData }, ref) => {
    const InfoBoxHead = (0,
    _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"])(
      _mui_material__WEBPACK_IMPORTED_MODULE_2__["default"]
    )`
        flex: 1;
        font-weight: 600;
        background: #f1f2f8;
        border: 1px solid #f8f8f8;
        padding: 10px;
    `;
    const InfoBoxBody = (0,
    _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"])(
      _mui_material__WEBPACK_IMPORTED_MODULE_2__["default"]
    )`
        flex: 1.5;
        border: 1px solid #f8f8f8;
        padding: 10px;
    `;
    const InfoBox = ({ title, value }) =>
      react__WEBPACK_IMPORTED_MODULE_1__.createElement(
        _mui_material__WEBPACK_IMPORTED_MODULE_3__["default"],
        { direction: "row", flex: 1 },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(
          InfoBoxHead,
          null,
          title
        ),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(
          InfoBoxBody,
          null,
          value
        )
      );
    const InfoBoxList = ({ data }) => {
      const result = [];
      for (let i = 0; i < data.length; i += 4) {
        const title = data[i].value;
        const value = data[i + 1].value;
        const title2 = data[i + 2].value;
        const value2 = data[i + 3].value;
        result.push(
          react__WEBPACK_IMPORTED_MODULE_1__.createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_3__["default"],
            { direction: "row", key: i },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBox, {
              title: title,
              value: value,
            }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBox, {
              title: title2,
              value: value2,
            })
          )
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(
        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        null,
        result
      );
    };
    if (!dummyData) {
      return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      _mui_material__WEBPACK_IMPORTED_MODULE_4__["default"],
      null,
      react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBoxList, {
        data: dummyData,
      })
    );
  }
);
```

"선언된 변수들을 입력해주세요" 아래의 TextArea에는

```javascript
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ =
  __webpack_require__(
    /*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"
  );
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ =
  __webpack_require__(
    /*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js"
  );
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ =
  __webpack_require__(
    /*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js"
  );
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ =
  __webpack_require__(
    /*! @mui/material */ "./node_modules/@mui/material/Box/Box.js"
  );
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
  __webpack_require__(/*! react */ "./node_modules/react/index.js");
```

위의 코드, 전체를 복사 붙여넣기 해주면 된다.
(선언문만 해줄 필요없이, 주석까지 전체를 넣어줘도 상관없다.)

## 변환 될 코드 입력란

"변환 될 코드를 입력해주세요" 아래의 TextArea에는 변환할 코드를 넣어주면 된다.

```javascript
const CustomComponent = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
  ({ className, children, dummyData }, ref) => {
    const InfoBoxHead = (0,
    _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"])(
      _mui_material__WEBPACK_IMPORTED_MODULE_2__["default"]
    )`
        flex: 1;
        font-weight: 600;
        background: #f1f2f8;
        border: 1px solid #f8f8f8;
        padding: 10px;
    `;
    const InfoBoxBody = (0,
    _emotion_styled__WEBPACK_IMPORTED_MODULE_0__["default"])(
      _mui_material__WEBPACK_IMPORTED_MODULE_2__["default"]
    )`
        flex: 1.5;
        border: 1px solid #f8f8f8;
        padding: 10px;
    `;
    const InfoBox = ({ title, value }) =>
      react__WEBPACK_IMPORTED_MODULE_1__.createElement(
        _mui_material__WEBPACK_IMPORTED_MODULE_3__["default"],
        { direction: "row", flex: 1 },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(
          InfoBoxHead,
          null,
          title
        ),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(
          InfoBoxBody,
          null,
          value
        )
      );
    const InfoBoxList = ({ data }) => {
      const result = [];
      for (let i = 0; i < data.length; i += 4) {
        const title = data[i].value;
        const value = data[i + 1].value;
        const title2 = data[i + 2].value;
        const value2 = data[i + 3].value;
        result.push(
          react__WEBPACK_IMPORTED_MODULE_1__.createElement(
            _mui_material__WEBPACK_IMPORTED_MODULE_3__["default"],
            { direction: "row", key: i },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBox, {
              title: title,
              value: value,
            }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBox, {
              title: title2,
              value: value2,
            })
          )
        );
      }
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(
        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        null,
        result
      );
    };
    if (!dummyData) {
      return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(
      _mui_material__WEBPACK_IMPORTED_MODULE_4__["default"],
      null,
      react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBoxList, {
        data: dummyData,
      })
    );
  }
);
```

## 변환 결과

이렇게 위와 같이 넣어줬을 경우 변환 버튼 클릭하면 아래와 같은 결과를 보여준다.

```javascript
변환 된 코드

const CustomComponent = React.forwardRef(({ className, children, dummyData }, ref) => { const InfoBoxHead = (0,at_mui_material_5_15_2.styled)(at_mui_material_5_15_2.Typography) ` flex: 1; font-weight: 600; background: #f1f2f8; border: 1px solid #f8f8f8; padding: 10px; `; const InfoBoxBody = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__)(_mui_material__WEBPACK_IMPORTED_MODULE_2__) ` flex: 1.5; border: 1px solid #f8f8f8; padding: 10px; `; const InfoBox = ({ title, value }) => (react__WEBPACK_IMPORTED_MODULE_1__.createElement(at_mui_material_5_15_2.Stack, { direction: 'row', flex: 1 }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBoxHead, null, title), react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBoxBody, null, value))); const InfoBoxList = ({ data }) => { const result = []; for (let i = 0; i < data.length; i += 4) { const title = data[i].value; const value = data[i + 1].value; const title2 = data[i + 2].value; const value2 = data[i + 3].value; result.push(react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { direction: 'row', key: i }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBox, { title: title, value: value }), react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBox, { title: title2, value: value2 }))); } return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, result); }; if (!dummyData) { return null; } return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(at_mui_material_5_15_2.Box["default"], null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(InfoBoxList, { data: dummyData }))); });
```

"const CustomComponent =" 을 제외하고 모든 코드를 복사해서 SuperUX 커스텀 컴포넌트에 복사하여 넣어주면 된다.

## 사용 가능한 라이브러리

페이지 윗 상단에 쓰여있음.  
현재 : @mui/material": "5.15.2" , @mui/icons-material
