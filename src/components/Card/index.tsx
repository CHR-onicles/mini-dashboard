import { StyledCard } from "./Card.styled";

interface Props {
  number?: number;
}
export const Card = ({ number }: Props) => {
  return (
    <StyledCard>
      <p>Card {number}</p>
    </StyledCard>
  );
};
