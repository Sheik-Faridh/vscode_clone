export default ({ ...props }) => {
  const { palette } = props.theme;
  return `
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background-color: ${palette.background.paper};
        & div.MuiBox-root {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            & img.image-preview {
                object-fit: contain; 
            }
        }
        &.markdown-preview {
            padding: 20px 50px;
            background-color: ${palette.background.paper};
            & img {
                background-color: ${palette.background.paper};
            }
            &::-webkit-scrollbar {
                width: 10px;
              }
            &::-webkit-scrollbar-thumb {
                background-color: rgba(121, 121, 121, 0.4);
            }
            &::-webkit-scrollbar-track {
                background-color: transparent;
            }
        }
    `;
};
