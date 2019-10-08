import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Header, Message, Table } from 'semantic-ui-react';

const LocationSearchResults = ({ locations, postalCodeSearchValue }) => {
  if (locations === null) {
    return null;
  }

  if (locations.length === 0) {
    return <Message>No result.</Message>;
  }

  return (
    <Fragment>
      <Header>
        Locations search results for Postal Code{' '}
        <em>{postalCodeSearchValue}</em>
      </Header>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Postal Code</Table.HeaderCell>
            <Table.HeaderCell>Country Code</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {locations.map(location => (
            <Table.Row key={location.countryCode}>
              <Table.Cell>{location.name}</Table.Cell>
              <Table.Cell>{location.phone}</Table.Cell>
              <Table.Cell>{location.city}</Table.Cell>
              <Table.Cell>{location.postalCode}</Table.Cell>
              <Table.Cell>{location.countryCode}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

LocationSearchResults.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      city: PropTypes.string,
      postalCode: PropTypes.string,
      countryCode: PropTypes.string,
    })
  ),
  postalCodeSearchValue: PropTypes.string,
};
LocationSearchResults.defaultProps = {
  locations: null,
  postalCodeSearchValue: null,
};

export default LocationSearchResults;
