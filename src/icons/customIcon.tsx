import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

interface CustomIconProps extends SvgIconProps {
  path: string;
  size: "inherit" | "small" | "large" | "medium";
}

function CustomIcon({ path, size, ...props }: CustomIconProps) {
  return (
    <SvgIcon {...props} fontSize={size}>
      <path d={path} />
    </SvgIcon>
  );
}

export default CustomIcon;
