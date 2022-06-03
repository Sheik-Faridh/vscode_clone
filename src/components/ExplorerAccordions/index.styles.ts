export default ({ ...props }) => {
  const { palette, mixins } = props.theme;
  return `
    .MuiAccordion-root {
      & .MuiAccordionSummary-root {
        & .MuiAccordionSummary-content {
          & .MuiTypography-root {
            font-weight: 500;
            font-size: 12px;
            text-transform: uppercase;
            color: ${mixins.accordion.color};
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            flex: 1;
          }
          & div.MuiBox-root {
            display: none;
            & button.MuiButtonBase-root.MuiIconButton-root {
              padding-top: 0;
              padding-bottom: 0;
              & svg {
                color: ${mixins.accordion.color};
              }
            }
          }
          
        }
      }
      &:hover,
      &:focus {
        &.Mui-expanded div.MuiAccordionSummary-content div.MuiBox-root {
          display: block;
        }
      }
      & .MuiAccordionDetails-root {
        & div.MuiBox-root.not-found-info-wrapper {
          padding: 20px;
          color: ${palette.grey[2]};
        }
      }
    }
  `;
};
