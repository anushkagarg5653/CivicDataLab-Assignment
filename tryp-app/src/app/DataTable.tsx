import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';

interface DataTableProps {
  headers: string[];
  caption?: string;
  sorting?: boolean;
  pagination?: boolean;
  rows: Record<string, any>[];
}

const DataTable: React.FC<DataTableProps> = ({ headers, caption, sorting, pagination }) => {
  // Implement the logic for sorting and pagination here

  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="gray">
        {caption && <TableCaption>{caption}</TableCaption>}
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{/* Render the rows here */}</Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
