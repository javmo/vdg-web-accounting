// AccountListStyles.js

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  font-weight: 600;
  text-align: left;
  padding: 8px;
  border-bottom: 2px solid #f1f1f1;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
`;