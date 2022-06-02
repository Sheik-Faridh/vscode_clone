export default ({ ...props }) => {
  const { palette } = props.theme;
  return `
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: ${palette.background.paper};
        & img {
            object-fit: contain; 
        }
    `;
};
