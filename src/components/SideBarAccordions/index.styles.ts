export default ({ ...props }) => {
  const { mixins, palette, shadows } = props.theme;
  return `
    .MuiAccordion-root {
      & .MuiAccordionSummary-root {
        flex-direction: row-reverse;
        padding: 0 5px;
        background: ${mixins.accordion.summary.background};
        min-height: ${mixins.accordion.summary.minHeight};
        gap: 5px;
        &.Mui-expanded {
          box-shadow: ${shadows[3]};
        }
        & .MuiAccordionSummary-content {
          margin: 6px 0;
          & .MuiTypography-root {
            font-weight: 500;
            font-size: 0.775rem;
            text-transform: uppercase;
            color: ${palette.common.white};
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
        padding: 0;
      }
    }
  `;
};
