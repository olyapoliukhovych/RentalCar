'use client';

import toast from 'react-hot-toast';
import css from './CopyId.module.css';
import { Icon } from '../Icon/Icon';

export const CopyId = ({ id }: { id: string }) => {
  const shorterId = id.length > 4 ? `${id.slice(0, 4)}...` : id;

  const handleCopy = () => {
    navigator.clipboard.writeText(id);
    toast.success('Id copied to clipboard!', { id: 'copy-id' });
  };

  return (
    <div>
      <span className={css.idText} title={id}>
        Id: {shorterId}
      </span>
      <button className={css.copyButton} onClick={handleCopy} type="button" aria-label="Copy ID">
        <Icon id="copy" width={12} height={12} />
      </button>
    </div>
  );
};
