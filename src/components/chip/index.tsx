import { Chips, Wrapper, Avatar } from "./style";

const Chip = ({ children, avatar }) => (
  <Chips>
    <Wrapper>
      <Avatar src={avatar}></Avatar>
      {children}
    </Wrapper>
  </Chips>
);

export default Chip;
