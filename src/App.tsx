import {
  Box,
  Button,
  Stack,
  TextareaAutosize,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

type TInput = {
  value: string;
  code: string;
};
function App() {
  const { register, handleSubmit, reset } = useForm<TInput>();
  const [changedCode, setChangedCode] = React.useState<string>("");

  const findValue = (statement: string) => {
    const equalIdx = statement.indexOf("=");
    const front = statement.slice(0, equalIdx).trim();
    const back = statement.slice(equalIdx + 1).trim();
    const valueStartIdx = back.lastIndexOf("/");
    const valueEndIdx = back.lastIndexOf(".js");
    let value = "";

    if (front.includes("mui_material")) {
      value = `at_mui_material_5_15_2.${back.slice(
        valueStartIdx + 1,
        valueEndIdx
      )}`;
    } else if (front.includes("mui_icons_material")) {
      value = `MUI_ICON.${back.slice(valueStartIdx + 1, valueEndIdx)}`;
    } else if (front.includes("react__WEBPACK_IMPORTED_MODULE")) {
      value = "React";
    } else if (front.includes("styled__WEBPACK_IMPORTED_MODULE")) {
      value = "at_mui_material_5_15_2.styled";
    }

    return `${front}=${value}`;
  };

  const defineVar = (vars: string) => {
    let code = [];
    let startIdx = vars.indexOf("var");
    let endIdx = vars.indexOf(";", startIdx);

    while (startIdx !== -1 && endIdx !== -1) {
      const statement = vars.slice(startIdx + 4, endIdx).trim();
      code.push(findValue(statement));
      startIdx = vars.indexOf("var", endIdx);
      endIdx = vars.indexOf(";", startIdx);
    }
    return code;
  };

  const replaceCode = (componentCode: string, code: string[]) => {
    for (const c of code) {
      const [buildCode, changedCode] = c.split("=");
      componentCode = componentCode.replace(buildCode, changedCode);
      componentCode = componentCode.replace('["default"]', "");
    }
    return componentCode;
  };

  const onSubmit = (data: TInput) => {
    const defineCode = defineVar(data.value);
    const replacedCode = replaceCode(data.code, defineCode);
    setChangedCode(replacedCode);
  };

  const resetCode = () => {
    reset();
    setChangedCode("");
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: "20px" }}
    >
      <Typography sx={{ fontSize: "10px" }}>
        사용 가능한 라이브러리 : '@mui/material": "5.15.2" ,
        @mui/icons-material'
      </Typography>
      <Stack sx={{ mt: "20px" }}>
        <Typography>선언된 변수들을 입력해주세요</Typography>
        <TextareaAutosize minRows={10} {...register("value")} />
        <Typography sx={{ mt: "30px" }}>
          변환 될 코드를 입력해주세요.
        </Typography>
        <TextareaAutosize minRows={10} {...register("code")} />
        <Stack direction={"row"}>
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: "10px", width: "100px" }}
          >
            변환
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: "10px", width: "100px", ml: "10px" }}
            onClick={resetCode}
          >
            초기화
          </Button>
        </Stack>

        <Typography sx={{ mt: "30px" }}>변환 된 코드</Typography>
        <Typography>{changedCode}</Typography>
      </Stack>
    </Box>
  );
}

export default App;
