import React from 'react'
import propTypes from 'prop-types'

import { PaginationWrapper, PaginationItem, PaginationLink } from './style'

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage
}) => (
  <nav>
    <PaginationWrapper>
      {!isFirst && (
        <PaginationItem>
          <PaginationLink to={prevPage}>Página Anterior</PaginationLink>
        </PaginationItem>
      )}
      <PaginationItem>
        <p>
          {currentPage} de {numPages}
        </p>
      </PaginationItem>
      {!isLast && (
        <PaginationItem>
          <PaginationLink to={nextPage}>Próxima Página</PaginationLink>
        </PaginationItem>
      )}
    </PaginationWrapper>
  </nav>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string
}

export default Pagination
