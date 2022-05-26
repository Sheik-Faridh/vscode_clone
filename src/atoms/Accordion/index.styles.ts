export default ({ ...props }) => {
  const { mixins, palette, shadows } = props.theme;
  return `
    &.MuiAccordion-root {
        box-shadow: none;
        border-bottom: 1px solid ${palette.grey.A1000};
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
          }
          & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
            transform: rotate(90deg);
          }
          & .MuiAccordionSummary-expandIconWrapper > svg {
            color: ${palette.common.white};
          }
        }
        & .MuiAccordionDetails-root {
          background: ${mixins.accordion.summary.background};
          padding: 0;
        }
    }
    `;
};
