import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext, useEventFetch } from '../../../../utils/hooks';
import styles from './ButtonDeleteWithQuesctionProceed.module.scss';

interface Props {
  event_id: string;
}

const ButtonDeleteWithQuesctionProceed = ({ event_id }: Props) => {
  const { user } = useAuthContext();
  const { eventDelete } = useEventFetch();
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteItem = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    await eventDelete(event_id);
    setIsDeleted(true);
  };

  return (
    <>
      <p className={styles.confirmationText}>
        Are you sure you want to proceed?
      </p>
      <div className={styles.confirmationButtons}>
        {isDeleted ? (
          <Link to={'/cockpit'} className={styles.btnNo}>
            Return to Cockpit
          </Link>
        ) : (
          <button className={styles.btnYes} onClick={deleteItem}>
            Yes, I am sure
          </button>
        )}
      </div>
    </>
  );
};

export { ButtonDeleteWithQuesctionProceed };
