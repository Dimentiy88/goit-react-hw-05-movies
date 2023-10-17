import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const ListItem = styled.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  max-width: min-content;
  background-color: #2a2a2a;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  img {
    max-width: 182px;
  }
  span {
    color: #6671e5;
  }
`;
