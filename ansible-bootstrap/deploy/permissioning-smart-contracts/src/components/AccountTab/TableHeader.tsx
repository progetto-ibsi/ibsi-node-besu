// Libs
import React from 'react';
import PropTypes from 'prop-types';
// Rimble Components
import { Flex, Box, Heading, Button } from 'rimble-ui';

type TableHeader = {
  number: Number;
  openAddModal: () => void;
  disabledAdd: boolean;
};

const TableHeader: React.FC<TableHeader> = ({ number, openAddModal, disabledAdd }) => (
  <Flex alignItems="center" justifyContent="space-between">
    <Box display="flex" alignItems="center">
      <Heading.h2 fontWeight="700">Admin Smart Contract ({number})</Heading.h2>
    </Box>
    <Flex alignItems="center">
      <Button icon="AddCircleOutline" onClick={() => openAddModal()} disabled={disabledAdd}>
        Add Admin Smart Contract
      </Button>
    </Flex>
  </Flex>
);

TableHeader.propTypes = {
  number: PropTypes.number.isRequired,
  openAddModal: PropTypes.func.isRequired,
  disabledAdd: PropTypes.bool.isRequired
};

export default TableHeader;
