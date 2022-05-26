export default ({ ...props }) => {
  const { palette } = props.theme;
  return `
    & .MuiAccordion-root {
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
            }
        }
    }
    & li.MuiListItem-root {
        & div.MuiListItemText-root {
            & .MuiTypography-root {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            & span.MuiListItemText-primary {
               font-size: 0.85rem;
               color: ${palette.grey.A800};
               font-weight: 600;
            }
            & p.MuiListItemText-secondary {
                font-size: 0.8rem;
                color: ${palette.grey[500]};
            }
        }
    }
    `;
};
