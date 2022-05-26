export default ({ ...props }) => {
  const { palette } = props.theme;
  return `
    .MuiAccordion-root {
      & .MuiAccordionSummary-root {
        & .MuiAccordionSummary-content {
          & .MuiTypography-root {
            font-weight: 500;
            font-size: 0.775rem;
            text-transform: uppercase;
            color: ${palette.common.white};
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
      }
      & .MuiAccordionDetails-root {
        & div.MuiBox-root.not-found-info-wrapper {
          padding: 20px;
          color: ${palette.grey.A900};
        }
      }
    }
  `;
};
