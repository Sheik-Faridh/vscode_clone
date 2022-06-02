import FileDialog from '@components/FilesDialog';
import { DialogStoreState, DialogType } from '@models';
import { DialogStore } from '@store';
import { useEffect, useState } from 'react';

const AppDialog = () => {
  const [dialog, setDialog] = useState<DialogStoreState>(DialogStore.state);

  useEffect(() => {
    const store = DialogStore.subject.subscribe((v) => {
      setDialog(v);
    });

    return () => store.unsubscribe();
  }, []);

  const Dialogs: Record<DialogType, JSX.Element> = {
    FileDialog: <FileDialog />,
  };

  return dialog.open ? Dialogs[dialog.type] || <></> : <></>;
};

export default AppDialog;
