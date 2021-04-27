import { css } from 'styled-components'

export const helpers = css`
  .txt-center {
    text-align: center;
  }

  .d-flex {
    display: flex;
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

  .ml-auto {
    margin-left: auto;
  }

  .mt-40 {
    margin-top: 2.5rem;
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

  .verticalSpacer {
    padding-top: 4.375rem;
    padding-bottom: 4.375rem;

    @media (min-width: 576px) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }

    @media (min-width: 768px) {
      padding-top: 5.25rem;
      padding-bottom: 5.25rem;
    }

    @media (min-width: 992px) {
      padding-top: 6.25rem;
      padding-bottom: 6.25rem;
    }

    @media (min-width: 1200px) {
      padding-top: 8.25rem;
      padding-bottom: 8.25rem;
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
`

export default helpers
