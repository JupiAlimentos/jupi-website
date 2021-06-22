import { css } from 'styled-components'

export const helpers = css`
  .txt-center {
    text-align: center;
  }

  .flex-drct {
    flex-direction: column;
  }

  .pd-0 {
    padding: 0 !important;
  }

  .pt-90 {
    padding-top: 5.625rem !important;
  }

  .pd-40 {
    padding: 2.5rem;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .mb-30 {
    margin-bottom: 1.875rem;
  }

  .ml-auto {
    margin-left: auto;
  }

  .mt-40 {
    margin-top: 2.5rem;
  }

  .mt-main {
    margin-top: 7rem;

    @media (min-width: 576px) {
      margin-top: 8.625rem;
    }

    @media (min-width: 992px) {
      margin-top: 10.625rem;
    }
  }

  .mb-sm-40 {
    @media (max-width: 767.98px) {
      margin-bottom: 2.5rem;
    }
  }

  .mb-md-40 {
    @media (max-width: 991.98px) {
      margin-bottom: 2.5rem;
    }
  }

  .verticalTxtSpacer {
    @media (max-width: 575.98px) {
      padding-right: 1.875rem;
      padding-left: 1.875rem;
    }
  }

  .verticalSpacer {
    padding-top: 2.5rem;
    padding-bottom: 5.75rem;

    @media (min-width: 768px) {
      padding-top: 4.625rem;
      padding-bottom: 6.75rem;
    }

    @media (min-width: 992px) {
      padding-top: 5.625rem;
      padding-bottom: 8.75rem;
    }
  }

  .bottomSpacer {
    padding-bottom: 4.375rem;

    @media (min-width: 576px) {
      padding-bottom: 5rem;
    }

    @media (min-width: 768px) {
      padding-bottom: 5.25rem;
    }

    @media (min-width: 992px) {
      padding-bottom: 6.25rem;
    }

    @media (min-width: 1200px) {
      padding-bottom: 8.25rem;
    }
  }

  .d-inline {
    display: inline !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-grid {
    display: grid !important;
  }

  .d-table {
    display: table !important;
  }

  .d-table-row {
    display: table-row !important;
  }

  .d-table-cell {
    display: table-cell !important;
  }

  .d-flex {
    display: flex !important;
  }

  .d-lg-flex {
    @media (min-width: 992px) {
      display: inline-flex !important;
    }
  }

  .d-inline-flex {
    display: inline-flex !important;
  }

  .d-none {
    display: none !important;
  }

  .flex-fill {
    flex: 1 1 auto !important;
  }

  .flex-row {
    flex-direction: row !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-wrap {
    flex-wrap: wrap !important;
  }

  .flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .justify-content-start {
    justify-content: flex-start !important;
  }

  .justify-content-end {
    justify-content: flex-end !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .justify-content-around {
    justify-content: space-around !important;
  }

  .justify-content-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-start {
    align-items: flex-start !important;
  }

  .align-items-end {
    align-items: flex-end !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .align-items-baseline {
    align-items: baseline !important;
  }

  .align-items-stretch {
    align-items: stretch !important;
  }

  .align-content-start {
    align-content: flex-start !important;
  }

  .align-content-end {
    align-content: flex-end !important;
  }

  .align-content-center {
    align-content: center !important;
  }

  .align-content-between {
    align-content: space-between !important;
  }

  .align-content-around {
    align-content: space-around !important;
  }

  .align-content-stretch {
    align-content: stretch !important;
  }

  .align-self-auto {
    align-self: auto !important;
  }

  .align-self-start {
    align-self: flex-start !important;
  }

  .align-self-end {
    align-self: flex-end !important;
  }

  .align-self-center {
    align-self: center !important;
  }

  .align-self-baseline {
    align-self: baseline !important;
  }

  .align-self-stretch {
    align-self: stretch !important;
  }

  .order-first {
    order: -1 !important;
  }

  .order-0 {
    order: 0 !important;
  }

  .order-1 {
    order: 1 !important;
  }

  .order-2 {
    order: 2 !important;
  }

  .order-3 {
    order: 3 !important;
  }

  .order-4 {
    order: 4 !important;
  }

  .order-5 {
    order: 5 !important;
  }

  .order-last {
    order: 6 !important;
  }

  .m-0 {
    margin: 0 !important;
  }

  .m-1 {
    margin: 0.25rem !important;
  }

  .m-2 {
    margin: 0.5rem !important;
  }

  .m-3 {
    margin: 1rem !important;
  }

  .m-4 {
    margin: 1.5rem !important;
  }

  .m-5 {
    margin: 3rem !important;
  }

  .m-auto {
    margin: auto !important;
  }

  .mt-auto {
    margin-top: auto !important;
  }

  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .gap-2 {
    gap: 0.5rem !important;
  }

  .offset-1 {
    margin-left: 8.3333333333%;
  }

  @media (min-width: 768px) {
    .offset-md-1 {
      margin-left: 8.3333333333%;
    }
  }

  @media (min-width: 992px) {
    .offset-lg-1 {
      margin-left: 8.3333333333%;
    }
  }
`

export default helpers
