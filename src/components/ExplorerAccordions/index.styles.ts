export default ({ ...props }) => {
  const { mixins, palette, shadows } = props.theme;
  return `
    .MuiAccordion-root {
      box-shadow: none;
      border-bottom: 1px solid ${mixins.accordion.border};
      &:last-child {
        border-bottom: none;
      }
      & .MuiAccordionSummary-root {
        flex-direction: row-reverse;
        padding: 0 5px;
        background: ${mixins.accordion.summary.background};
        min-height: ${mixins.accordion.summary.minHeight};
        gap: 5px;
        &.Mui-expanded {
          box-shadow: ${shadows[3]};
          &:focus {
            border: 1px solid ${palette.primary.main};
          }
        }
        & .MuiAccordionSummary-content {
          margin: 2px 0;
          justify-content: space-between;
          align-items: center;
          & .MuiTypography-root {
            font-weight: 500;
            font-size: 0.775rem;
            text-transform: uppercase;
            color: ${palette.common.white};
          }
          & div.MuiBox-root {
            display: none;
            & button.MuiButtonBase-root.MuiIconButton-root {
              padding-top: 0;
              padding-bottom: 0;
              & svg {
                color: ${palette.common.white};
              }
            }
          }
          &:hover,
          &:focus {
            &.Mui-expanded div.MuiBox-root {
              display: block;
            }
          }
        }
        & .MuiAccordionSummary-expandIconWrapper {
          &.Mui-expanded {
            transform: rotate(90deg);
          }
          > svg {
            color: ${palette.common.white};
          }
        }
      }
      & .MuiAccordionDetails-root {
        background: ${mixins.accordion.summary.background};
        padding: 0;
        & div.MuiBox-root.not-found-info-wrapper {
          padding: 20px;
          color: ${palette.grey.A900};
        }
      }
    }
  `;
};
